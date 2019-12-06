import React, { useContext } from 'react';
import './collection-item.style.scss';

import CustomButton from '../custom-button/custom-button.component';

import { CartContext } from '../../context/providers/cart/cart.provider';

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);

  const handleAddItem = item => {
    addItem(item);
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItem.bind(null, item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
