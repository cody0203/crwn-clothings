import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import {
  CollectionItemContainer,
  ItemFooter,
  ItemImage,
  ItemName,
  ItemPrice,
  AddToCartButton
} from './collection-item.style';

const CollectionItem = ({ addItem, item }) => {
  const { name, imageUrl, price } = item;

  const handleAddItem = item => {
    addItem(item);
  };

  return (
    <CollectionItemContainer>
      <ItemImage image={imageUrl}></ItemImage>
      <ItemFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </ItemFooter>
      <AddToCartButton inverted onClick={handleAddItem.bind(null, item)}>
        ADD TO CART
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
