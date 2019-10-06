import { connect } from 'react-redux';
import { renderTextInput, renderButton } from '../TextInputs/inputHelpers';
import PaymentMethod from './PaymentMethod';

export default connect(
  null,
  {
    renderTextInput,
    renderButton
  }
)(PaymentMethod);
