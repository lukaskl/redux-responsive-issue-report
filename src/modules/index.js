import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { routerReducer } from 'react-router-redux';
import counter from './counter';

export default combineReducers({
  router: routerReducer,
  browser: createResponsiveStateReducer(null, {
    infinity: 'veryBig'
  }),
  counter
});
