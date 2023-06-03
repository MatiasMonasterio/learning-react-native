/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigations from './src/navigations/Navigations';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigations />
    </NavigationContainer>
  );
}

export default App;
