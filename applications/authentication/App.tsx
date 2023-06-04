/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';

import AuthProvider from './src/contexts/AuthContexts';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
