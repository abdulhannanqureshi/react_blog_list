import { combineReducers } from 'redux';
import { blogReducer } from './blogReducer';

const AppReducer = combineReducers({
  blogReducer,
});

export default AppReducer;
