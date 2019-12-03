import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_D5jjtHSY9O5BTlnbI2yKydpo00L0OYfwUN';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      stripeKey={publishableKey}
      amount={priceForStripe}
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeButton;
