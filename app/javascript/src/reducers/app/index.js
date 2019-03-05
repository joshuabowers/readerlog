import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import logIn from './log-in';
import search from './search';

export default combineReducers({ logIn, search });
