import { connect } from 'react-redux';
import { renderTextInput, renderButton } from '../TextInputs/inputHelpers';
import ShippingAddress from './ShippingAddress';

export default connect(
  null,
  {
    renderTextInput,
    renderButton
  }
)(ShippingAddress);
