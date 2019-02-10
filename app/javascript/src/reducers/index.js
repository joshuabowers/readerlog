import { combineReducers } from 'redux';
import app from './app';
import library from './library';

export default combineReducers({ app, library });
