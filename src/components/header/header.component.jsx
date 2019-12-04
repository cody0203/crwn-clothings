import React from 'react';

import { auth } from '../../firebase/firebase.utils';
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

const Header = props => {
  const handleSignOut = () => {
    // auth.signOut method fired when handleSignOut fired
    // auth.signOut() is built-in method of firebase auth
    auth.signOut();
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

export default Header;
