// @flow

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Create from './screens/Create';
import Show from './screens/Show';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Create: {
      screen: Create,
    },
    Show: {
      screen: Show,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;