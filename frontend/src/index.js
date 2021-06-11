import React from 'react';
import ReactDOM from 'react-dom';
//react redux package called provider to wrap our store with our provider
//react-redux allows us to use react with redux
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);