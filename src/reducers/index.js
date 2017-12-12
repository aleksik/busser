import { combineReducers } from 'redux';
import lines from './lines';
import ui from './ui';

const rootReducer = combineReducers({
  lines,
  ui
});

export default rootReducer;
