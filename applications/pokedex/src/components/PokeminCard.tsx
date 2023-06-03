import type {SimplePokemon} from '../types';

import React, {useState} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

// import {getColors} from 'react-native-image-colors';

interface Props {
  pokemon: SimplePokemon;
}

export default function PokeminCard({pokemon}: Props) {
  const [bgColor] = useState('grey');
  const navigation = useNavigation();

  //   useEffect(() => {
  //     getColors(pokemon.picture, {fallback: 'grey'}).then(color => {
  //       if (color.platform === 'android') {
  //         setBgColor(color.dominant || 'grey');
  //       }
  //     });
  //   }, []);

  const handleNavigatePokemon = () => {
    navigation.navigate('pokemon', {pokemon: pokemon});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleNavigatePokemon}
      style={{
        flex: 1,
        backgroundColor: bgColor,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        overflow: 'visible',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 5,
      }}>
      <Image
        source={{uri: pokemon.picture}}
        style={{
          width: 120,
          height: 120,
          position: 'absolute',
          right: -15,
          bottom: -15,
        }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          paddingBottom: 40,
        }}>
        {pokemon.name}
        {'\n#' + pokemon.id}
      </Text>
    </TouchableOpacity>
  );
}
