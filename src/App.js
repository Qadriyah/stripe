import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainDashboard from './dashboards/MainDashboard';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome</h1>
        <MainDashboard />
      </div>
    </Provider>
  );
}

export default App;
