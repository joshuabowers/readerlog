import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import logIn, { actions as logInActions } from './log-in';
import search, { actions as searchActions } from './search';

export const actions = { ...logInActions, ...searchActions }

export default combineReducers({ logIn, search });
