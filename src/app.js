// @flow

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import CompanyDetails from './screens/CompanyDetails';
import Show from './screens/Show';
import PriceDetails from './screens/PriceDetails';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    CompanyDetails: {
      screen: CompanyDetails,
    },
    Show: {
      screen: Show,
    },
    PriceDetails: {
      screen: PriceDetails,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;