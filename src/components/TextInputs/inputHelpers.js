import React from 'react';
import TextInput from './TextInput';

export const renderTextInput = properties => {
  const {
    name,
    placeholder,
    type,
    pattern,
    className,
    serverError,
    parent,
    label,
    col,
    required
  } = properties;
  return (
    <div className={col}>
      <TextInput
        name={name}
        placeholder={placeholder}
        label={label}
        className={className}
        serverError={serverError}
        pattern={pattern}
        parent={parent}
        type={type}
        required={required}
      />
    </div>
  );
};

export const renderButton = properties => {
  const { type, className, col, value, onClick } = properties;

  return (
    <div className={col}>
      <input
        type={type}
        className={className}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export const renderToggleButton = component => {
  const { handleButtonClick, status } = component.props;
  return (
    <div className="row">
      {renderButton({
        type: 'button',
        className: 'btn btn-general btn-lg btn-block',
        col: 'col-5',
        value: status ? 'Add credit card' : 'Add address',
        onClick: handleButtonClick
      })}
    </div>
  );
};

export default {
  renderTextInput
};
