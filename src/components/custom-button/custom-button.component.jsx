import React from 'react';
import classes from './custom-button.module.scss';

const CustomButton = props => {
  const {children, isGoogleSignIn, ...otherProps} = props;
  return (
    <button
      {...otherProps}
      className={[
        classes['custom-button'],
        classes[isGoogleSignIn ? 'google-sign-in' : '']
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default CustomButton;
