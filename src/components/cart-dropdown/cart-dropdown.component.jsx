import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCart } from '../../redux/cart/cart.action';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CustomButtonMargin
} from './cart-dropdown.style';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  const goToCheckout = () => {
    dispatch(toggleCart());
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
