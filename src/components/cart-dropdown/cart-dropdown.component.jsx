import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import classes from './cart-dropdown.module.scss';

const CartDropDown = props => (
  <div className={classes['cart-dropdown']}>
    <div className={classes['cart-items']}></div>
    <CustomButton className={classes['button']}>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
