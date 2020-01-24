import reducers from './combineReducer';
import configureStoreMobile from './configureStore';

export default function configureStore() {
  return configureStoreMobile(reducers);
}
