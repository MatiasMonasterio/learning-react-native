import type {MovieFull, Cast} from '../types';

import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {CastItem} from '../components';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export default function MovieDetails({movieFull, cast}: Props) {
  return (
    <View style={{marginBottom: 40}}>
      <Text style={{color: 'gray'}}>
        {movieFull.genres.map(genre => genre.name).join(', ')}
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Historia
      </Text>
      <Text style={{color: 'gray'}}>{movieFull.overview}</Text>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        Presupuesto
      </Text>
      <Text style={{color: 'gray'}}>{movieFull.budget}</Text>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 8,
        }}>
        Actores
      </Text>

      <FlatList
        data={cast}
        renderItem={({item}: any) => <CastItem actor={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
      />
    </View>
  );
}
