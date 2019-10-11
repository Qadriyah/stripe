import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleSubmit } from '../TextInputs/helper';
import {
  renderTextInput,
  renderButton,
  renderToggleButton
} from '../TextInputs/inputHelpers';
import { isEmpty } from '../../utils';
import './ShippingAddress.scss';

class ShippingAddress extends Component {
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
            onClick: event => handleSubmit(event, this)
          })}
        </div>
      </form>
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
          <div className={styles}>
            {status ? (
              this.renderForm()
            ) : (
              <div className="row">
                {renderToggleButton('Add address', this)}
              </div>
            )}
          </div>
          {!isEmpty(message) && <div className={className}> {message} </div>}
        </div>
      </>
    );
  }
}

ShippingAddress.propTypes = {
  status: PropTypes.bool.isRequired
};

export default ShippingAddress;
