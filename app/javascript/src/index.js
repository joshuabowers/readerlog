import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createLogger } from 'redux-logger';
import { loggers } from 'redux-act';

import { createStore, applyMiddleware, compose } from 'redux';

import App from './app'
import Styles from './styles.css';
import rootReducer from './reducers';

const logger = createLogger({
  ...loggers.reduxLogger
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
  applyMiddleware( logger )
);

const store = createStore(
  rootReducer, middleware
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById( 'root' )
  );
});
