import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './header.module.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = props => {
  const handleSignOut = () => {
    // auth.signOut method fired when handleSignOut fired
    // auth.signOut() is built-in method of firebase auth
    auth.signOut();
  };

  const { currentUser, hidden } = props;
  return (
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
        {currentUser ? (
          <div className={classes['option']} onClick={handleSignOut}>
            Sign Out
          </div>
        ) : (
          <Link to="/sign-in" className={classes['option']}>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? '' : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
