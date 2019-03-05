import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  toggleSearchBar: createAction('Shows or hides the search bar'),
  search: createAction('Perform a book search'),
  searchSuccess: createAction('A search succeeded'),
  searchFailure: createAction('A search failed')
};

const isVisible = createReducer({
  [actions.toggleSearchBar]: (state) => !state,
  [actions.logOut]: (state) => false
}, false);

const query = createReducer({
  [actions.search]: (state, payload) => payload
}, '');

export default combineReducers({ isVisible, query });
