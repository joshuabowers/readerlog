import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createLogger } from 'redux-logger';
import { loggers } from 'redux-act';

import { createStore, applyMiddleware } from 'redux';

import App from './app'
import Styles from './styles.css';
import rootReducer from './reducers';

const logger = createLogger({
  ...loggers.reduxLogger
});

const middleware = applyMiddleware( logger );
const store = createStore( rootReducer, middleware );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById( 'root' )
  );
});
