import { combineReducers } from 'redux';
import cellReducer from './cellReducer.js';

export default combineReducers({
  cell: cellReducer,
})
