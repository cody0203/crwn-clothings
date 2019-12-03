import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import {
  removeItemFromCart,
  removeItem,
  addItem
} from '../../../redux/cart/cart.action';

const CheckoutItem = ({ item, removeItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price, id } = item;
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

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
