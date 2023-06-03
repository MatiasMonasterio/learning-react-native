import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../navigations/MainNavigations';

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import {styles} from '../theme/appTheme';
import {usePokemon} from '../hooks';
import {PokemonDetails} from '../components';

interface Props extends StackScreenProps<RootStackParams, 'pokemon'> {}

export default function Pokemon({navigation, route}: Props) {
  const {pokemon} = route.params;
  const {isLoading, pokemon: pokemonDetail} = usePokemon(pokemon.id);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.container,
          ...styles.page,
          height: 350,
          zIndex: 999,
          alignItems: 'center',
          backgroundColor: 'gray',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleGoBack}
          style={{
            position: 'absolute',
            left: 20,
            top: 25,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 4,
            backgroundColor: 'rgba(0,0,0,.8)',
          }}>
          <Text>Back</Text>
        </TouchableOpacity>

        <Text style={{...styles.title, color: 'white', marginBottom: 20}}>
          #{pokemon.id} {pokemon.name}
        </Text>

        <Image
          source={{uri: pokemon.picture}}
          style={{width: 250, height: 250}}
        />
      </View>

      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -60,
          }}>
          <ActivityIndicator color="black" size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemonDetail!} />
      )}
    </View>
  );
}
