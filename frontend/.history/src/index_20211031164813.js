import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

render(
  <Provider>
    <App />
  </Provider>
  document.getElementById('root')
);
