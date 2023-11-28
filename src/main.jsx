import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import { reducer } from './reducers/reducers.js';

const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
