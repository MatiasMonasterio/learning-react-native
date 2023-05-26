import React from 'react';
// import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import SettingScreen from '../screens/SettingScreen/SettingScreen';

const Drawer = createDrawerNavigator();

export default function MenyLateralBasico() {
  //   const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />

      <Drawer.Screen
        name="Article"
        options={{title: 'Settings'}}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
}
