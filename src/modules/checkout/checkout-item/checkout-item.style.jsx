import styled, { css } from 'styled-components';

const commonWidth = css`
  width: 23%;
`;

const cursorPointer = css`
  cursor: pointer;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${commonWidth}
`;

export const QuantityContainer = styled.span`
  ${commonWidth}
  padding-left: 20px;
  display: flex;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const Arrow = styled.div`
  ${cursorPointer}
  ${({ isMinimum }) =>
    isMinimum ? 'pointer-events: none' : 'pointer-events: auto'}
`;

export const Price = styled.span`
  ${commonWidth}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  ${cursorPointer}
`;
