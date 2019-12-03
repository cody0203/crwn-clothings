import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const HeaderStyles = {
  HeaderContainer: styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  `,
  LogoContainer: styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
  `,
  OptionsContainer: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  OptionLink: styled(Link)`
    ${OptionContainerStyles}
  `,
  OptionDiv: styled.div`
    ${OptionContainerStyles}
  `
};

export default HeaderStyles;
