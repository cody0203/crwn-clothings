import React from 'react';
import {Link} from 'react-router-dom';
import classes from './header.module.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
  <div className={classes['header']}>
    <Link className={classes['logo-container']} to="/">
      <Logo />
    </Link>

    <div className={classes['options']}>
      <Link to="/shop" className={classes['option']}>
        Shop
      </Link>
      <Link to="/shop" className={classes['option']}>
        Contact
      </Link>
      <Link to="/sign-in" className={classes['option']}>
        Sign In
      </Link>
    </div>
  </div>
);

export default Header;
