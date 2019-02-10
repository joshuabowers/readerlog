import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  addBook: createAction('Adds a book to a users library')
};

const books = createReducer({
  [actions.addBook]: (state, payload) => [...state, payload]
}, []);

export default combineReducers({ books });
