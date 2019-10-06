import React from 'react';
import TextInput from './TextInput';
import Button from '../Button/Button';

/**
 * Renders the text input component
 *
 * @param Object properties
 */
export const renderTextInput = properties => (
  <div className={properties.col}>
    <TextInput
      name={properties.name}
      placeholder={properties.placeholder}
      label={properties.label}
      className={properties.className}
      serverError={properties.serverError}
      pattern={properties.pattern}
      parent={properties.parent}
      type={properties.type}
      required={properties.required}
    />
  </div>
);

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

export const renderToggleButton = (value, component) => {
  const { handleButtonClick } = component.props;
  return renderButton({
    className: 'btn btn-general btn-lg btn-block',
    col: 'col-5',
    value,
    onClick: handleButtonClick
  });
};

export default {
  renderTextInput
};
