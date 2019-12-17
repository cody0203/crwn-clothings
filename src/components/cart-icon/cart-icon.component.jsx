import React from 'react';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from './cart-icon.style';

import shoppingIcon from '../../assets/shopping-bag.png';

const CartIcon = props => {
  const { toggleCart, itemCount } = props;

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer src={shoppingIcon} alt="shopping-icon" />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
