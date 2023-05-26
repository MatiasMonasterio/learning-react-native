import React from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ChatScree from '../screens/ChatScreen/ChatScree';
import ContactScreen from '../screens/ContactScreen/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen/AlbumScreen';

const Tab = createMaterialTopTabNavigator();

interface TabBarIconsAndroid {
  focused: boolean;
  color: string;
}

interface Props2 extends TabBarIconsAndroid {}

function TabIconAndroid(_props: Props2) {
  return <Text>h1</Text>;
}

export default function TopTapNativator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{top: insets.top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarPressColor: 'gray',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarStyle: {
          borderTopColor: 'gray',
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="ChatScree"
        options={{tabBarIcon: TabIconAndroid}}
        component={ChatScree}
      />

      <Tab.Screen
        name="ContactScreen"
        options={{tabBarIcon: TabIconAndroid}}
        component={ContactScreen}
      />

      <Tab.Screen
        name="AlbumScreen"
        options={{tabBarIcon: TabIconAndroid}}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
}
