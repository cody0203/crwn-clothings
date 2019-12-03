import React from 'react';
import './collection-item.style.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ addItem, item }) => {
  const { name, imageUrl, price } = item;

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

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
