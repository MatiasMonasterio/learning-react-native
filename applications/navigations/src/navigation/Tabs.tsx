import type {} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Text, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import TopTapNativator from './TopTapNativator';

import Tab1Screen from '../screens/Tab1Screen/Tab1Screen';
// import Tab2Screen from '../screens/Tab2Screen/Tab2Screen';
// import Tab3Screen from '../screens/Tab3Screen/Tab3Screen';
import StackNavigator from './StackNavigator';

const TabIOS = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

interface TabBarIconsIOS {
  focused: boolean;
  color: string;
  size: number;
}

interface TabBarIconsAndroid {
  focused: boolean;
  color: string;
}

interface Props1 extends TabBarIconsIOS {}
interface Props2 extends TabBarIconsAndroid {}

function TabIconIOS(_props: Props1) {
  return <Text>h1</Text>;
}

function TabIconAndroid(_props: Props2) {
  return <Text>h1</Text>;
}

export default function Tabs() {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
}

function TabsAndroid() {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'white',
      }}>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{tabBarIcon: TabIconAndroid}}
        component={Tab1Screen}
      />

      <TabAndroid.Screen
        name="Tab2Screen"
        options={{tabBarIcon: TabIconAndroid}}
        component={TopTapNativator}
      />

      <TabAndroid.Screen
        name="StackNavigator"
        options={{tabBarIcon: TabIconAndroid}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
}

function TabsIOS() {
  return (
    <TabIOS.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          borderTopColor: 'green',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <TabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1', tabBarIcon: TabIconIOS}}
        component={Tab1Screen}
      />

      <TabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2', tabBarIcon: TabIconIOS}}
        component={TopTapNativator}
      />

      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Tab3', tabBarIcon: TabIconIOS}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
}
