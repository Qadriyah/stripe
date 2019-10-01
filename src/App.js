import React from 'react';
import { Provider } from 'react-redux';
import MainDashboard from './views/MainDashboard/MainDashboard';
import store from './store';

import './assets/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainDashboard />
      </div>
    </Provider>
  );
}

export default App;
