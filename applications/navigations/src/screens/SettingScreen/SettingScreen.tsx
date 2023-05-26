import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Title} from '../../components';

export default function SettingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top}}>
      <Title>SettingScreen</Title>
    </View>
  );
}
