import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Create middleware
// const middleware = [thunk];

// Create the initial state
// const initialState = {};

const store = createStore(rootReducer);

export default store;
