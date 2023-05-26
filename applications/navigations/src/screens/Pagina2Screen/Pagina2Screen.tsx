import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import theme from '../../theme';

export default function Pagina2Screen() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('screen3');
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Nuevo título',
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  return (
    <View style={theme.container}>
      <Text style={theme.titlePrimary}>Pagina2Screen</Text>
      <Button title="Ir pagina 3" onPress={handleNavigate} />
    </View>
  );
}
