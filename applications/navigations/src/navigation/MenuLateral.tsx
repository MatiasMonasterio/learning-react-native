import type {DrawerContentComponentProps} from '@react-navigation/drawer';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Tabs from './Tabs';
import SettingScreen from '../screens/SettingScreen/SettingScreen';

const Drawer = createDrawerNavigator();

interface Props extends DrawerContentComponentProps {}

function DrawerContent({navigation}: Props) {
  return (
    <DrawerContentScrollView>
      <Text>Drawer content</Text>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')}>
          <Text>Navegacion Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Text>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function MenuLateral() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />

      <Drawer.Screen name="Tabs" options={{title: 'Tabs'}} component={Tabs} />

      <Drawer.Screen
        name="Setting"
        options={{title: 'Settings'}}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
}
