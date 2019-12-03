import React from 'react';
import {
  CartItemContainer,
  ItemThumbnail,
  ItemDetails,
  ItemName
} from './cart-item.style';

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CartItemContainer>
      <ItemThumbnail src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
