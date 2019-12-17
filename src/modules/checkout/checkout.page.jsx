import React from 'react';

import CheckoutItemContainer from '../../components/checkout-item/checkout-item.container';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
  TestWarning
} from './checkout.style';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>

    {cartItems.map(cartItem => (
      <CheckoutItemContainer key={cartItem.id} item={cartItem} />
    ))}

    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarning>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

export default CheckoutPage;
