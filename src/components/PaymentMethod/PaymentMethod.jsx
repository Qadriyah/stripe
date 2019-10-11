import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleSubmit } from '../TextInputs/helper';
import {
  renderTextInput,
  renderButton,
  renderToggleButton
} from '../TextInputs/inputHelpers';
import { isEmpty } from '../../utils';
import '../ShippingAddress/ShippingAddress.scss';

class PaymentMethod extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    inputs: {},
    message: '',
    className: ''
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ message: '' });
    }, 5000);
  }

  renderForm = () => {
    return (
      <form noValidate>
        <div className="row">
          {renderTextInput({
            name: 'name',
            placeholder: 'First and last name',
            label: 'Name on card',
            parent: this,
            col: 'col-12',
            required: true
          })}
          {renderTextInput({
            name: 'number',
            placeholder: 'Card number',
            label: 'Card number',
            parent: this,
            col: 'col-12',
            required: true
          })}
          {renderTextInput({
            name: 'expiry',
            placeholder: 'MM / YY',
            label: 'Expiry date',
            parent: this,
            col: 'col-4',
            required: true
          })}
          {renderTextInput({
            name: 'cvv',
            placeholder: '123',
            label: 'Cvv',
            parent: this,
            col: 'col-4',
            required: true
          })}
          {renderTextInput({
            name: 'zip',
            placeholder: '12345',
            label: 'Zip code',
            parent: this,
            col: 'col-4',
            required: true
          })}
        </div>
        <div className="row">
          {renderButton({
            type: 'submit',
            col: 'col-5',
            value: 'Save',
            onClick: event => handleSubmit(event, this)
          })}
        </div>
      </form>
    );
  };

  render() {
    const { status } = this.props;
    const { message, className } = this.state;
    const styles = !status ? 'grade-form__body' : 'grade-form__body-1';
    return (
      <>
        <div className="grade-form mb-3">
          <div className="grade-form__header">
            <h5>Payment method</h5>
          </div>
          <div className={styles}>
            {!status ? (
              this.renderForm()
            ) : (
              <div className="row">
                {renderToggleButton('Add credit card', this)}
              </div>
            )}
          </div>
          {!isEmpty(message) && <div className={className}>{message}</div>}
        </div>
      </>
    );
  }
}

PaymentMethod.propTypes = {
  status: PropTypes.bool.isRequired
};

export default PaymentMethod;
