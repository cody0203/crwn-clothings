import React from 'react';
import classes from './index.module.scss';

const MenuItem = props => {
  const {title, imageUrl, size} = props;
  return (
    <div className={[classes['menu-item'], classes[size]].join(' ')}>
      <div
        className={classes['background-image']}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={classes['content']}>
        <h1 className={classes['title']}>{title}</h1>
        <span className={classes['subtitle']}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
