import React from 'react';

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

export default CollectionItem;
