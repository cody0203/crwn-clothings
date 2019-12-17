import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  ${({ image }) => `background-image: url(${image})`}
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media (max-width: 767.8px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ItemImage} {
      opacity: 0.8;
    }

    ${AddToCartButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media (max-width: 767.8px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const ItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ItemName = styled.span`
  width: 75%;
  margin-bottom: 15px;
`;
export const ItemPrice = styled.span`
  text-align: right;
`;
