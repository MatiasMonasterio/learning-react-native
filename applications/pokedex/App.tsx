import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigations from './src/navigations/MainNavigations';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigations />
    </NavigationContainer>
  );
}

export default App;
