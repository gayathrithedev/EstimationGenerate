// @flow
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = o => o;

export default function configureStore(reducers: *) {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  return store;
}