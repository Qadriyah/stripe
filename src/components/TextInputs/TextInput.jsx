import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { attachToParentComponent } from './helper';
import { isEmpty } from '../../utils';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      clientError: ''
    };
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    attachToParentComponent(this);
  }

  /**
   * Handles input value change
   */
  handleChange = event => {
    this.setState({
      value: event.target.value,
      clientError: ''
    });
  };

  /**
   * Gets the input value
   *
   * @returns string
   */
  getValue = () => {
    const { value } = this.state;
    return value;
  };

  /**
   * Manages the focus of the input element
   */
  focus = () => this.textInputRef.current.focus();

  onBlur = () => {
    const { value } = this.state;
    const currentNode = this.textInputRef.current || null;
    if (currentNode.required && isEmpty(value)) {
      this.setState({
        clientError:
          currentNode && currentNode.required ? 'This field is required' : ''
      });
    }
  };

  /**
   * Alert if clicked outside of element
   */
  handleClickOutsideInputField = () => {
    const { value } = this.state;
    const currentNode = this.textInputRef.current || null;
    if (document.activeElement === currentNode && isEmpty(value)) {
      this.setState({
        clientError:
          currentNode && currentNode.required ? 'This field is required' : ''
      });
    }
    if (!isEmpty(currentNode)) this.textInputRef.current.blur();
  };

  render() {
    const { value, clientError } = this.state;
    const {
      name,
      placeholder,
      type,
      pattern,
      className,
      serverError,
      label,
      required
    } = this.props;
    const error = clientError || serverError;
    const finalLabel = !isEmpty(label) ? (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label htmlFor={name}>{label}</label>
    ) : null;

    return (
      <div className="form-group">
        {finalLabel}
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={this.handleChange}
          onClick={this.focus}
          pattern={pattern}
          ref={this.textInputRef}
          required={required}
          className={classnames(className, {
            'is-invalid': error
          })}
          onBlur={this.onBlur}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  className: PropTypes.string.isRequired,
  serverError: PropTypes.string.isRequired,
  required: PropTypes.bool
};

TextInput.defaultProps = {
  type: 'text',
  pattern: null,
  label: '',
  required: false
};

export default TextInput;
