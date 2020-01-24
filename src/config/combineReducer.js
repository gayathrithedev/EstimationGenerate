// @flow

import {combineReducers} from 'redux';
import estimationReducer from '../redux/reducer';

const appReducer = combineReducers({
  estimationReducer,
});

export default appReducer;