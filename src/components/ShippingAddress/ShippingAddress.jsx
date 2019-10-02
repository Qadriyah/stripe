import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { processFormData } from '../TextInputs/helper';
import { isEmpty } from '../../utils';
import './ShippingAddress.scss';

class ShippingAddress extends Component {
  state = {
    inputs: {},
    message: '',
    className: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { inputs } = this.state;
    const inputData = processFormData(inputs);
    let message = 'Data submitted successfully';
    let className = 'toast__message toast__message_success';
    if (!inputData.isValid) {
      message = 'All fields are required';
      className = 'toast__message toast__message_error';
    }
    this.setState({
      message,
      className
    });
  };

  renderForm = () => {
    const { renderTextInput, renderButton } = this.props;
    return (
      <form noValidate>
        <div className="row">
          {renderTextInput({
            name: 'name',
            placeholder: 'First and last name',
            label: 'Name',
            parent: this,
            col: 'col-12',
            required: true
          })}
          {renderTextInput({
            name: 'address',
            placeholder: 'Street address',
            label: 'Address',
            parent: this,
            col: 'col-12',
            required: true
          })}
          {renderTextInput({
            name: 'address2',
            placeholder: 'Street address 2 (Optional)',
            parent: this,
            col: 'col-12'
          })}
          {renderTextInput({
            name: 'city',
            placeholder: 'City',
            parent: this,
            col: 'col-7',
            required: true
          })}
          {renderTextInput({
            name: 'state',
            placeholder: 'State',
            parent: this,
            col: 'col-5',
            required: true
          })}
          {renderTextInput({
            name: 'zip',
            placeholder: 'Zip code',
            parent: this,
            col: 'col-5',
            required: true
          })}
        </div>
        <div className="row">
          {renderButton({
            type: 'submit',
            col: 'col-5',
            value: 'Save',
            onClick: this.handleSubmit
          })}
        </div>
      </form>
    );
  };

  renderFormBody = ({ status, renderButton, handleButtonClick }) => {
    return status ? (
      this.renderForm()
    ) : (
      <div className="row">
        {renderButton({
          className: 'btn btn-general btn-lg btn-block',
          col: 'col-5',
          value: 'Add credit card',
          onClick: handleButtonClick
        })}
      </div>
    );
  };

  render() {
    const { status } = this.props;
    const { message, className } = this.state;
    const styles = status ? 'grade-form__body' : 'grade-form__body-1';
    return (
      <>
        <div className="grade-form mb-3">
          <div className="grade-form__header">
            <h5> Shipping to </h5>
          </div>
          <div className={styles}>{this.renderFormBody(this.props)}</div>
          {!isEmpty(message) && <div className={className}> {message} </div>}
        </div>
      </>
    );
  }
}

ShippingAddress.propTypes = {
  status: PropTypes.bool.isRequired,
  renderButton: PropTypes.func.isRequired,
  renderTextInput: PropTypes.func.isRequired
};

export default ShippingAddress;
