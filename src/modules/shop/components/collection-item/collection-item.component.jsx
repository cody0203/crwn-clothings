import React from 'react';
import classes from './collection-item.module.scss';

const CollectionItem = props => {
  const {id, name, imageUrl, price} = props;
  return (
    <div className={classes['collection-item']}>
      <div
        className={classes['image']}
        style={{backgroundImage: `url(${imageUrl})`}}
      ></div>
      <div className={classes['collection-footer']}>
        <span className={classes['name']}>{name}</span>
        <span className={classes['price']}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
