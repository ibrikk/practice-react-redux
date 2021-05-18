import loggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counterReducer,
  loggedReducer,
});

export default rootReducer;