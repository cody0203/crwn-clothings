import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCart } from '../../redux/cart/cart.action';

const CartIcon = props => {
  const { toggleCart, cartItems } = props;

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)}
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = state => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
