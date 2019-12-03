import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import HeaderStyles from './header.styles';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = props => {
  const handleSignOut = () => {
    // auth.signOut method fired when handleSignOut fired
    // auth.signOut() is built-in method of firebase auth
    auth.signOut();
  };

  const { currentUser, hidden } = props;
  return (
    <HeaderStyles.HeaderContainer>
      <HeaderStyles.LogoContainer to="/">
        <Logo />
      </HeaderStyles.LogoContainer>

      <HeaderStyles.OptionsContainer>
        <HeaderStyles.OptionLink to="/shop">Shop</HeaderStyles.OptionLink>
        <HeaderStyles.OptionLink to="/shop">Contact</HeaderStyles.OptionLink>
        {currentUser ? (
          <HeaderStyles.OptionDiv onClick={handleSignOut}>
            Sign Out
          </HeaderStyles.OptionDiv>
        ) : (
          <HeaderStyles.OptionLink to="/sign-in">
            Sign In
          </HeaderStyles.OptionLink>
        )}
        <CartIcon />
      </HeaderStyles.OptionsContainer>
      {hidden ? '' : <CartDropDown />}
    </HeaderStyles.HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
