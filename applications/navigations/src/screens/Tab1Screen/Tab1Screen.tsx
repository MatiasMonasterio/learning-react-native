import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../theme';

export default function Tab1Screen() {
  useEffect(() => {
    console.log('init');
  }, []);

  return (
    <View style={theme.container}>
      <Text>Tab1Screen</Text>
      <Icon name="rocket" size={50} color="#900" />
    </View>
  );
}
