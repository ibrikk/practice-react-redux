import counterReducer from './counterReducer';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counterReducer,
  isLogged,
});

export default rootReducer;