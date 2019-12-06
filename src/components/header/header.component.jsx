import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import CurrentUserContext from '../../context/current-user/current-user.context';

const Header = props => {
  const handleSignOut = () => {
    // auth.signOut method fired when handleSignOut fired
    // auth.signOut() is built-in method of firebase auth
    auth.signOut();
  };

  const currentUser = useContext(CurrentUserContext);

  const { hidden } = props;
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            Sign Out
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? '' : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
