import React from 'react';
import CustomButtonStyles from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonStyles.CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonStyles.CustomButtonContainer>
  );
};

export default CustomButton;
