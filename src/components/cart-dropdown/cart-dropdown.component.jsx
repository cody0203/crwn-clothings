import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import CartDropDownStyles from './cart-dropdown.style';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCart } from '../../redux/cart/cart.action';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  const goToCheckout = () => {
    dispatch(toggleCart());
    history.push('/check-out');
  };
  return (
    <CartDropDownStyles.CartDropdownContainer>
      <CartDropDownStyles.CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartDropDownStyles.EmptyMessage>
            Your cart is empty
          </CartDropDownStyles.EmptyMessage>
        )}
      </CartDropDownStyles.CartItems>
      <CartDropDownStyles.CustomButtonMargin onClick={goToCheckout}>
        GO TO CHECKOUT
      </CartDropDownStyles.CustomButtonMargin>
    </CartDropDownStyles.CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
