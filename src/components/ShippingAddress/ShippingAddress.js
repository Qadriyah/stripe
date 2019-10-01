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
import './ShippingAddress.scss';

class ShippingAddress extends Component {
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
          label: 'Name',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-12',
          required: true
        })}
        {renderTextInput({
          name: 'address',
          placeholder: 'Street address',
          label: 'Address',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-12',
          required: true
        })}
        {renderTextInput({
          name: 'address2',
          placeholder: 'Street address 2 (Optional)',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-12'
        })}
        {renderTextInput({
          name: 'city',
          placeholder: 'City',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-7',
          required: true
        })}
        {renderTextInput({
          name: 'state',
          placeholder: 'State',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-5',
          required: true
        })}
        {renderTextInput({
          name: 'zip',
          placeholder: 'Zip code',
          className: 'form-control form-control-lg',
          serverError: '',
          parent: this,
          col: 'col-5',
          required: true
        })}
      </div>
      <div className="row">
        {renderButton({
          type: 'submit',
          className: 'btn btn-primary btn-lg btn-block',
          col: 'col-12'
        })}
      </div>
    </form>
  );

  render() {
    const { status } = this.props;
    const styles = status ? 'grade-form__body' : 'grade-form__body-1';
    return (
      <>
        <div className="grade-form mb-3">
          <Notifications options={{ zIndex: 200, top: '5px' }} />
          <div className="grade-form__header">
            <h5>Shipping to</h5>
          </div>
          <div className={styles}>
            {status ? this.renderForm() : renderToggleButton(this)}
          </div>
        </div>
      </>
    );
  }
}

ShippingAddress.propTypes = {
  status: PropTypes.bool.isRequired
};

export default connect(
  null,
  { addCourse }
)(ShippingAddress);
