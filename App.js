import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as screen from './src/screens/index';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: screen.Home},
    Repos: {screen: screen.Repos}
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
