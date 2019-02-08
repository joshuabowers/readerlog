import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  logIn: createAction('Log into the site'),
  logOut: createAction('Log out of the site'),

  toggleSearchBar: createAction('Shows or hides the search bar'),
  search: createAction('Perform a book search'),
  searchSuccess: createAction('A search succeeded'),
  searchFailure: createAction('A search failed')
};

const isLoggedIn = createReducer({
  [actions.logIn]: (state) => true,
  [actions.logOut]: (state) => false
}, false);

const isVisible = createReducer({
  [actions.toggleSearchBar]: (state) => !state,
  [actions.logOut]: (state) => false
}, false);

const query = createReducer({
  [actions.search]: (state, payload) => payload
}, '');

const search = combineReducers({ isVisible, query });

export default combineReducers({ isLoggedIn, search });
