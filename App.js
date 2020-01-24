// @flow

import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/app';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import configureStore from './src/config/configureStoreMobile';

const AppContainer = createAppContainer(AppNavigator);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </StoreProvider>
    );
  }
}
