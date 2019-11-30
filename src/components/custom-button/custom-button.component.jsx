import React from 'react';
import classes from './custom-button.module.scss';

const CustomButton = props => {
  const {type, children} = props;
  return (
    <button type={type} className={classes['custom-button']}>
      {children}
    </button>
  );
};

export default CustomButton;
