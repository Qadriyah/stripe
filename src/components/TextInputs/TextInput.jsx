import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { attachToParentComponent } from './helper';
import { isEmpty } from '../../utils';

class TextInput extends Component {
  state = {
    value: '',
    clientError: ''
  };

  textInputRef = React.createRef();

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

  blur = () => {
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
   * Renders the input field label
   *
   * @param string label
   * @param string name
   * @returns Object label|null
   */
  renderLable = (label, name) =>
    !isEmpty(label) ? (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label htmlFor={name}>{label}</label>
    ) : null;

  /**
   * Gets the properties of the input field from the component props
   * @returns Object
   */
  getTextInputProps = () => {
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
    return {
      name,
      placeholder,
      type,
      pattern,
      className,
      serverError,
      label,
      required
    };
  };

  render() {
    const { value, clientError } = this.state;
    const props = this.getTextInputProps();

    const error = clientError || props.serverError;

    return (
      <div className="form-group">
        {this.renderLable(props.label, props.name)}
        <input
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          type={props.type}
          onChange={this.handleChange}
          onFocus={this.focus}
          onBlur={this.blur}
          pattern={props.pattern}
          ref={this.textInputRef}
          required={props.required}
          className={classnames(props.className, {
            'is-invalid': error
          })}
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
  className: PropTypes.string,
  serverError: PropTypes.string,
  required: PropTypes.bool
};

TextInput.defaultProps = {
  type: 'text',
  pattern: null,
  label: '',
  required: false,
  className: 'form-control form-control-lg',
  serverError: ''
};

export default TextInput;
