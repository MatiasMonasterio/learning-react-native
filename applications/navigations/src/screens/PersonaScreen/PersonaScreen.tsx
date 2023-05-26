import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../../navigation/StackNavigator';

import React, {useEffect} from 'react';
import {View} from 'react-native';

import theme from '../../theme/theme';
import {Title} from '../../components';

interface Props extends StackScreenProps<RootStackParams, 'persona'> {}

export default function PersonaScreen({route, navigation}: Props) {
  // export default function PersonaScreen(_props: Props) {

  useEffect(() => {
    // navigation.setOptions({title: route.params?.name});
    navigation.setOptions({title: route.params.name});
  }, [navigation, route]);

  return (
    <View style={theme.container}>
      <Title>PersonaScreen</Title>
    </View>
  );
}
