import React from 'react';
import { notify } from 'react-notify-toast';
import { isEmpty } from '../../utils';

export const attachToParentComponent = component => {
  const { parent, name } = component.props;
  parent.setState(state => ({
    inputs: { ...state.inputs, [name]: component }
  }));
};

export const showNotification = ({ message, className, type }) => {
  notify.show(<div className={className}>{message}</div>, type, 5000, {});
};

export const getFormData = inputs => {
  const data = {};
  const errors = {};
  Object.values(inputs).forEach(input => {
    const { name } = input.props;
    data[name] = input.getValue();
    if (isEmpty(input.getValue())) errors[name] = `${name} is required`;
  });
  return {
    data,
    isValid: isEmpty(errors)
  };
};

export default {
  attachToParentComponent
};
