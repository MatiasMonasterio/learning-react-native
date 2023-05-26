import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Pagina1Screen from '../screens/Pagina1Screen/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen/PersonaScreen';

export type RootStackParams = {
  screen1: undefined;
  screen2: undefined;
  screen3: undefined;
  persona: {name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName='screen2'
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0, // borra lnea de abajo en android
          shadowColor: 'transparent', // borra shadow para iphone
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="screen1"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />

      <Stack.Screen
        name="screen2"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />

      <Stack.Screen
        name="screen3"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />

      <Stack.Screen
        name="persona"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
}
