import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  toggleLogIn: createAction('Shows or hides the log in form'),

  logIn: createAction('Log into the site'),
  logOut: createAction('Log out of the site'),

  logInSuccess: createAction('Log in succeeded'),
  logInFailure: createAction('Log in failed')
};

const userPresent = createReducer({
  [actions.logInSuccess]: (state) => true,
  [actions.logInFailure] : (state) => false,
  [actions.logOut]: (state) => false
}, false);

const error = createReducer({
  [actions.logInSuccess]: (state) => null,
  [actions.logInFailure]: (state, { error }) => error,
  [actions.logOut]: (state) => null
}, null);

const isVisible = createReducer({
  [actions.toggleLogIn]: (state) => !state,
  [actions.logOut]: (state) => true
}, false);

export default combineReducers({ userPresent, isVisible, error });
