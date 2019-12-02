import React from 'react';
import { connect } from 'react-redux';

import classes from './cart-icon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCart } from '../../redux/cart/cart.action';

const CartIcon = props => {
  const { toggleCart } = props;

  return (
    <div className={classes['cart-icon']} onClick={toggleCart}>
      <ShoppingIcon className={classes['shopping-icon']} />
      <span className={classes['item-count']}>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);
