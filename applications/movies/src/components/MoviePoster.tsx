import type {Movie} from '../types';

import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export default function MoviePoster({movie, height = 420, width = 300}: Props) {
  const navigation = useNavigation();

  const handleNavigateToDetail = () => {
    navigation.navigate('Detail', {movie});
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNavigateToDetail}>
      <View style={{...styles.poster, height, width}}>
        <Image
          style={styles.image}
          source={{uri: imageBaseUrl + movie.poster_path}}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  poster: {
    shadowColor: '#000',
    marginLeft: 8,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 18,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});
