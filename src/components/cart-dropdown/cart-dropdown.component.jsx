import React, { useContext } from 'react';
import './cart-dropdown.style.scss';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../context/providers/cart/cart.provider';

const CartDropDown = ({ history }) => {
  const { toggleHidden, cartItems } = useContext(CartContext);

  const goToCheckout = () => {
    toggleHidden();
    history.push('/check-out');
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);
