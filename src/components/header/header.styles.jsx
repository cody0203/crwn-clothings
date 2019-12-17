import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 767.8px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px 0;

  @media (max-width: 767.8px) {
    width: 50px;
    padding: 0;
    margin: auto;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 767.8px) {
    display: none;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const MenuItemContainer = styled.div`
  display: flex;

  @media (max-width: 767.7px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 767.7px) {
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 100;
    box-shadow: 0px -1px 6px 2px rgba(0, 0, 0, 0.05);
    align-items: center;
    padding: 5px;
  }
`;

export const MenuItemIcon = styled.img`
  width: 30px;
`;
