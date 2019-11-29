import React from 'react';
import classes from './index.module.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = props => {
  const {title, imageUrl, size, history, linkUrl, match} = props;
  const directUrl = () => {
    history.push(`${match.url}${linkUrl}`);
  };
  return (
    <div
      className={[classes['menu-item'], classes[size]].join(' ')}
      onClick={directUrl}
    >
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

export default withRouter(MenuItem);
