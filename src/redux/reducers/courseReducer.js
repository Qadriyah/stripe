import { ADD_COURSE } from '../actions/types';

const initialState = {
  courses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        courses: action.payload
      };
    default:
      return state;
  }
}
