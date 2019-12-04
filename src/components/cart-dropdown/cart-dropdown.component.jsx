import React from 'react';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CustomButtonMargin
} from './cart-dropdown.style';

const CartDropDown = ({ cartItems, history, toggleCart }) => {
  const goToCheckout = () => {
    toggleCart();
    history.push('/check-out');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButtonMargin onClick={goToCheckout}>
        GO TO CHECKOUT
      </CustomButtonMargin>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
