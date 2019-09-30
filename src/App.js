import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainDashboard from './views/OderDashboard/MainDashboard';
import store from './store';

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
