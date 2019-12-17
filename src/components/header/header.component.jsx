import React from 'react';

import shop from '../../assets/shop.png';
import user from '../../assets/user.png';
import logout from '../../assets/logout.png';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIconContainer from '../cart-icon/cart-icon.container';
import CartDropDownContainer from '../cart-dropdown/cart-dropdown.container';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  MenuItemContainer,
  MobileMenu,
  MenuItemIcon
} from './header.styles';

const Header = props => {
  const { signOutStart } = props;
  console.log(props);
  const handleSignOut = () => {
    signOutStart();
  };

  const { currentUser, hidden } = props;

  const menuItems = (
    <>
      <OptionLink to="/shop">Shop</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={handleSignOut}>Sign Out</OptionDiv>
      ) : (
        <OptionLink to="/sign-in">Sign In</OptionLink>
      )}
    </>
  );

  const mobileMenuItem = (
    <>
      <OptionLink to="/shop">
        <MenuItemIcon src={shop} alt="shop" />
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={handleSignOut}>
          <MenuItemIcon src={logout} alt="logout" />
        </OptionDiv>
      ) : (
        <OptionLink to="/sign-in">
          <MenuItemIcon src={user} alt="user" />
        </OptionLink>
      )}
    </>
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <MenuItemContainer>{menuItems}</MenuItemContainer>
        <CartIconContainer />
      </OptionsContainer>
      <MobileMenu>
        {mobileMenuItem}
        <CartIconContainer />
      </MobileMenu>
      {hidden ? '' : <CartDropDownContainer />}
    </HeaderContainer>
  );
};

export default Header;
