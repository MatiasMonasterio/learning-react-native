/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MenuLateral from './src/navigation/MenuLateral';
// import MenyLateralBasico from './src/navigation/MenyLateralBasico';
// import StackNavigator from './src/navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
}

export default App;
