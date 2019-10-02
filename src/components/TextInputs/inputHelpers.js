import React from 'react';
import TextInput from './TextInput';
import Button from '../Button/Button';

/**
 * Renders the text input component
 *
 * @param Object properties
 */
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

/**
 * Renders a button component
 *
 * @param Object properties
 */
export const renderButton = properties => {
  const { type, className, col, value, onClick, dataTest } = properties;

  return (
    <Button
      col={col}
      type={type}
      className={className}
      value={value}
      onClick={onClick}
      dataTest={dataTest}
    />
  );
};

export default {
  renderTextInput
};
