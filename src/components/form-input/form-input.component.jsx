import React from 'react';
import classes from './form-input.module.scss';

const FormInput = props => {
  const {handleChange, label, ...otherProps} = props;

  return (
    <div className={classes['group']}>
      <input
        className={classes['form-input']}
        {...otherProps}
        onChange={handleChange}
        autoComplete="true"
      />
      {label ? (
        <label
          className={[
            classes['form-input-label'],
            classes[props.value.length ? 'shrink' : '']
          ].join(' ')}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
