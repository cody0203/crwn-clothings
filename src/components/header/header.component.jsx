import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIconContainer from '../cart-icon/cart-icon.container';
import CartDropDownContainer from '../cart-dropdown/cart-dropdown.container';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles';

import { signOutStart } from '../../redux/user/user.action';

const Header = props => {
  const { signOutStart } = props;
  const handleSignOut = () => {
    // auth.signOut method fired when handleSignOut fired
    // auth.signOut() is built-in method of firebase auth
    signOutStart();
  };

  const { currentUser, hidden } = props;
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={handleSignOut}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/sign-in">Sign In</OptionLink>
        )}
        <CartIconContainer />
      </OptionsContainer>
      {hidden ? '' : <CartDropDownContainer />}
    </HeaderContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(Header);
