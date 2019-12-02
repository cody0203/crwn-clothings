import React from 'react';
import classes from './cart-icon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = props => (
  <div className={classes['cart-icon']}>
    <ShoppingIcon className={classes['shopping-icon']} />
    <span className={classes['item-count']}>0</span>
  </div>
);

export default CartIcon;
