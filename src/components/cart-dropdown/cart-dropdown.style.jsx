import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
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

  @media (max-width: 767.8px) {
    bottom: 70px;
    top: auto;
    position: fixed;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const CustomButtonMargin = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 50px auto;
`;
