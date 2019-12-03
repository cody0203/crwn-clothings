import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const CartDropDownStyles = {
  CartDropdownContainer: styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 60px;
    z-index: 5;
  `,
  CartItems: styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  `,
  CustomButtonMargin: styled(CustomButton)`
    margin-top: auto;
  `,
  EmptyMessage: styled.span`
    font-size: 20px;
    margin: 50px auto;
  `
};

export default CartDropDownStyles;
