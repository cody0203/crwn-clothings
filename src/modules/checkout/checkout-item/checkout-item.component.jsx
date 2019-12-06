import React, { useContext } from 'react';
import './checkout-item.style.scss';

import { CartContext } from '../../../context/providers/cart/cart.provider';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price, id } = item;
  const { removeItem, removeItemFromCart, addItem } = useContext(CartContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItem(item)}
          style={{ pointerEvents: quantity === 1 ? 'none' : 'auto' }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
