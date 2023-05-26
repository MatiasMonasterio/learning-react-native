import type {DrawerScreenProps} from '@react-navigation/drawer';

import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';

import theme from '../../theme';
import {Title, Button as IAButton} from '../../components';

interface Props extends DrawerScreenProps<any, any> {}

function MenuButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return <Button title="Menu" onPress={handlePress} />;
}

export default function Pagina1Screen({navigation}: Props) {
  const handleNavigate = (screen: string, params?: any) => {
    navigation.navigate(screen, params);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <MenuButton />,
    });
  }, [navigation]);

  return (
    <View style={theme.container}>
      <Title>Pagina1Screen</Title>
      <Button title="Ir pagina 2" onPress={() => handleNavigate('screen2')} />

      <View style={{flexDirection: 'row', gap: 6, marginTop: 10}}>
        <IAButton
          style={{backgroundColor: 'black'}}
          onPress={() => handleNavigate('persona', {name: 'Pedro'})}>
          Pedro
        </IAButton>

        <IAButton onPress={() => handleNavigate('persona', {name: 'Maria'})}>
          Maria
        </IAButton>
      </View>
    </View>
  );
}
