import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  toggleLogIn: createAction('Shows or hides the log in form'),

  logIn: createAction('Log into the site'),
  logOut: createAction('Log out of the site'),

  logInSuccess: createAction('Log in succeeded'),
  logInFailure: createAction('Log in failed'),

  toggleSearchBar: createAction('Shows or hides the search bar'),
  search: createAction('Perform a book search'),
  searchSuccess: createAction('A search succeeded'),
  searchFailure: createAction('A search failed')
};

const isLoggedIn = createReducer({
  [actions.logInSuccess]: (state) => true,
  [actions.logInFailure] : (state) => false,
  [actions.logOut]: (state) => false
}, false);

const loginError = createReducer({
  [actions.logInSuccess]: (state) => null,
  [actions.logInFailure]: (state, { error }) => error,
  [actions.logOut]: (state) => null
}, null);

const isLogInVisible = createReducer({
  [actions.toggleLogIn]: (state) => !state,
  [actions.logOut]: (state) => true
}, false)

const isVisible = createReducer({
  [actions.toggleSearchBar]: (state) => !state,
  [actions.logOut]: (state) => false
}, false);

const query = createReducer({
  [actions.search]: (state, payload) => payload
}, '');

const logIn = combineReducers({ isVisible: isLogInVisible, error: loginError })
const search = combineReducers({ isVisible, query });

export default combineReducers({ isLoggedIn, logIn, search });
