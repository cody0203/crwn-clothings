import React from 'react';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer
} from './cart-icon.style';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = props => {
  const { toggleCart, itemCount } = props;

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconContainer as={ShoppingIcon} />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
