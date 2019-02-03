import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  logIn: createAction('Log into the site'),
  logOut: createAction('Log out of the site')
};

const isLoggedIn = createReducer({
  [actions.logIn]: (state) => true,
  [actions.logOut]: (state) => false
}, false);

export default combineReducers({ isLoggedIn });
