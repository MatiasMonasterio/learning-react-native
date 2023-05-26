import type {StackScreenProps} from '@react-navigation/stack';

import React from 'react';
import {View, Text, Button} from 'react-native';

import theme from '../../theme/theme';

interface Props extends StackScreenProps<any, any> {}

export default function Pagina3Screen({navigation}: Props) {
  const handleNavigateBack = () => {
    navigation.pop();
  };

  const handleNavigateTop = () => {
    navigation.popToTop();
  };

  return (
    <View style={theme.container}>
      <Text style={theme.titlePrimary}>Pagina3Screen</Text>
      <Button title="regresar" onPress={handleNavigateBack} />
      <Button title="Volver al inicio" onPress={handleNavigateTop} />
    </View>
  );
}
