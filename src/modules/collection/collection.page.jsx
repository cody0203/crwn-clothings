import React, { useContext } from 'react';
import './collection.style.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import ShopContext from '../../context/collection/collection.context';

const CollectionPage = ({ match }) => {
  const collections = useContext(ShopContext);
  const collection = collections[match.params.collectionId];

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// //  Ngoài việc mapping state vào component, mapStateToProps còn có thể lấy ngược lại các props từ component
// // Lúc này, tham số đầu tiên sẽ là state từ redux, tham số thứ 2 là props của component
// function mapStateToProps(state, ownProps) {
//   console.log(arguments);
//   return {
//     // Vì selector selectCollection là 1 function nhận vào 1 tham số và trả về function createSelector
//     // Nên sẽ truyền tham số vào cho selector như dưới đây.
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
//   };
// }

export default CollectionPage;
