import React from 'react';
import { Group, Input, FormInputLabel } from './form-input.style';

const FormInput = props => {
  const { handleChange, value, label, ...otherProps } = props;

  return (
    <Group>
      <Input {...otherProps} onChange={handleChange} autoComplete="true" />
      {label ? (
        <FormInputLabel shrink={value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
