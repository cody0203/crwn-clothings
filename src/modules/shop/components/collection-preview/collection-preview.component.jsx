import React from 'react';
import classes from './collection-preview.module.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = props => {
  const {title, items} = props;

  return (
    <div className={classes['collection-preview']}>
      <h1 className={classes['title']}>{title}</h1>
      <div className={classes['preview']}>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
