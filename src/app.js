// @flow

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import CompanyDetails from './screens/CompanyDetails';
import Show from './screens/Show';
import WorkDetails from './screens/WorkDetails';
import AddPrice from './screens/AddPrice';

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
    WorkDetails: {
      screen: WorkDetails,
    },
    AddPrice: {
      screen: AddPrice,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;