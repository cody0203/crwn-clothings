import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionContainer, Title, ItemsContainer } from './collection.style';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionContainer>
  );
};

//  Ngoài việc mapping state vào component, mapStateToProps còn có thể lấy ngược lại các props từ component
// Lúc này, tham số đầu tiên sẽ là state từ redux, tham số thứ 2 là props của component
function mapStateToProps(state, ownProps) {
  console.log(arguments);
  return {
    // Vì selector selectCollection là 1 function nhận vào 1 tham số và trả về function createSelector
    // Nên sẽ truyền tham số vào cho selector như dưới đây.
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
}

export default connect(mapStateToProps)(CollectionPage);
