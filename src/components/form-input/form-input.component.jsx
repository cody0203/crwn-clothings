import React from 'react';
import './form-input.style.scss';

const FormInput = props => {
  const { handleChange, label, ...otherProps } = props;

  return (
    <div className="group">
      <input
        className="form-input"
        {...otherProps}
        onChange={handleChange}
        autoComplete="true"
      />
      {label ? (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label
          `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
