// @flow

import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/app';
import {Provider as PaperProvider} from 'react-native-paper';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
