import { combineReducers } from 'redux';
import addressReducer from './addressReducer';

export default combineReducers({
  addresses: addressReducer
});
