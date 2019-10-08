import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';
import MainDashboard from './views/MainDashboard/MainDashboard';
import './assets/index.scss';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <MainDashboard />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
