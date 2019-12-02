import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name}
            <span> {item.quantity}</span>
          </li>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps)(CartDropDown);
