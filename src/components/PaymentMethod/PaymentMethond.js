import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notify-toast';
import { addCourse } from '../../actions/courseAction';
import {
  renderTextInput,
  renderButton,
  renderToggleButton
} from '../TextInputs/inputHelpers';
import { showNotification, getFormData } from '../TextInputs/helper';
import '../ShippingAddress/ShippingAddress.scss';

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { inputs } = this.state;
    const inputData = getFormData(inputs);
    let message = 'Data submitted successfully';
    let className = 'toast__message toast__message_success';
    if (!inputData.isValid) {
      message = 'All fields are required';
      className = 'toast__message toast__message_error';
    }
    showNotification({
      message,
      className,
      type: 'custom'
    });
  };

  renderForm = () => (
    <form onSubmit={this.onSubmit} noValidate>
      <div className="row">
        {renderTextInput({
          name: 'name',
          placeholder: 'First and last name',
          label: 'Name on card',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-12',
          required: true
        })}
        {renderTextInput({
          name: 'number',
          placeholder: '1234 5678 9012 3456',
          label: 'Card number',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-12',
          required: true
        })}
        {renderTextInput({
          name: 'expiry',
          placeholder: 'MM / YY',
          label: 'Expiry date',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-4',
          required: true
        })}
        {renderTextInput({
          name: 'cvv',
          placeholder: '123',
          label: 'Cvv',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-4',
          required: true
        })}
        {renderTextInput({
          name: 'zip',
          placeholder: '12345',
          label: 'Zip code',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-4',
          required: true
        })}
      </div>
      <div className="row">
        {renderButton({
          type: 'submit',
          className: 'btn btn-primary btn-lg btn-block',
          col: 'col-5',
          value: 'Save'
        })}
      </div>
    </form>
  );

  render() {
    const { status } = this.props;
    const styles = !status ? 'grade-form__body' : 'grade-form__body-1';
    return (
      <>
        <div className="grade-form mb-3">
          <Notifications options={{ zIndex: 200, top: '5px' }} />
          <div className="grade-form__header">
            <h5>Payment method</h5>
          </div>
          <div className={styles}>
            {!status ? this.renderForm() : renderToggleButton(this)}
          </div>
        </div>
      </>
    );
  }
}

PaymentMethod.propTypes = {
  status: PropTypes.bool.isRequired
};

export default connect(
  null,
  { addCourse }
)(PaymentMethod);
