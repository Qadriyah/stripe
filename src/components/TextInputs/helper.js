import { isEmpty } from '../../utils';

/**
 * Attaches the input field component its parent component
 *
 * @param React.Component component
 */
export const attachToParentComponent = component => {
  const { parent, name } = component.props;
  parent.setState(state => ({
    inputs: { ...state.inputs, [name]: component }
  }));
};

/**
 * Displays a message after submitting the form
 *
 * @param string message
 * @param string className
 * @param bool type type of form submitted
 */
// export const showNotification = ({ message, className, type }) => {
//   notify.show(<div className={className}>{message}</div>, type, 5000, {});
// };

/**
 * Gets the data from the input components
 *
 * @param Object inputs
 * @returns Object
 */
export const processFormData = inputs => {
  const data = {};
  const errors = {};
  Object.values(inputs).forEach(input => {
    const { name, required } = input.props;
    data[name] = input.getValue();
    if (required && isEmpty(input.getValue()))
      errors[name] = `${name} is required`;
  });

  return {
    data,
    isValid: isEmpty(errors)
  };
};

/**
 * Clears the form input fields
 * @param Object inputs
 */
export const clearFormFields = inputs => {
  Object.values(inputs).forEach(input => {
    input.clearInputField();
  });
};

/**
 * Handle form submission
 * @param component parent component
 */
export const handleSubmit = (event, component) => {
  event.preventDefault();
  const { inputs } = component.state;
  const inputData = processFormData(inputs);
  let message = 'Data submitted successfully';
  let className = 'toast__message toast__message_success m-auto';
  if (!inputData.isValid) {
    message = 'All fields are required';
    className = 'toast__message toast__message_error m-auto';
  } else {
    clearFormFields(inputs);
  }
  component.setState({
    message,
    className
  });
};

export default {
  attachToParentComponent
};
