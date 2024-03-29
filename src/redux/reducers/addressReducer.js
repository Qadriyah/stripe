import { ADD_ADDRESS } from '../actions/types';

const initialState = {
  addresses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: action.payload
      };
    default:
      return state;
  }
}
