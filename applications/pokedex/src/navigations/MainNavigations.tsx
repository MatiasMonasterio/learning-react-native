import type {SimplePokemon} from '../types';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

export type RootStackParams = {
  home: undefined;
  pokemon: {pokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export default function MainNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="home" options={{title: 'Home'}} component={Home} />

      <Stack.Screen
        name="pokemon"
        options={{title: 'Pokemon'}}
        component={Pokemon}
      />
    </Stack.Navigator>
  );
}
