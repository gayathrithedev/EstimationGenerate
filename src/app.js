// @flow

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Create from './screens/Create';
import Show from './screens/Show';
import AddPrice from './screens/AddPrice';

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
    AddPrice: {
      screen: AddPrice,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;