import React from 'react';

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  QuantityContainer,
  QuantityValue,
  Arrow,
  Price,
  RemoveButton
} from './checkout-item.style';

const CheckoutItem = ({ item, removeItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price, id } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer>
        <Arrow
          onClick={() => removeItem(item)}
          isMinimum={quantity === 1 ? true : false}
        >
          &#10094;
        </Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => addItem(item)}>&#10095;</Arrow>
      </QuantityContainer>
      <Price>${price}</Price>
      <RemoveButton onClick={() => removeItemFromCart(id)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
