import type {Movie} from '../types';

import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {Container, MoviePoster} from '../components';

interface Props {
  title: string;
  movies: Movie[];
}

export default function HorizontalSlide({title, movies}: Props) {
  return (
    <View style={{height: 280}}>
      <Container>
        <Text style={{color: 'black', fontWeight: '900', fontSize: 26}}>
          {title}
        </Text>
      </Container>

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
