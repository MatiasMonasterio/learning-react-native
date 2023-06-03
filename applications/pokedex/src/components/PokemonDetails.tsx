import type {Pokemon} from '../types';

import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import {styles} from '../theme/appTheme';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonDetails({pokemon}: Props) {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
        ...styles.container,
        top: 350,
        paddingTop: 20,
      }}>
      <View style={{marginBottom: 20}}>
        <Text style={{...styles.title}}>Types</Text>
        <Text style={{color: 'black'}}>
          {pokemon.types.map(type => type.type.name).join('  ')}
        </Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{...styles.title}}>Peso</Text>
        <Text style={{color: 'black'}}>{pokemon.weight} KG</Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{...styles.title}}>Habilidades</Text>
        <Text style={{color: 'black'}}>
          {pokemon.abilities.map(item => item.ability.name).join('  ')}
        </Text>
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{...styles.title}}>Movimientos</Text>
        <Text style={{color: 'black'}}>
          {pokemon.moves.map(item => item.move.name).join('  ')}
        </Text>
      </View>

      <View style={{marginBottom: 20, paddingBottom: 40}}>
        <Text style={{...styles.title}}>Sprites</Text>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: pokemon.sprites.front_default}}
            style={{width: 60, height: 60}}
          />

          <Image
            source={{uri: pokemon.sprites.back_default}}
            style={{width: 60, height: 60}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
