import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParams} from '../navigations/Navigations';

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ScrollView} from 'react-native';

import {Container, MovieDetails} from '../components';
import {useMovieDetails} from '../hooks';
// import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const {height: screenHeight} = Dimensions.get('screen');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export default function DetailsScreen({route}: Props) {
  const {movie} = route.params;

  const navigation = useNavigation();
  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.posterContainer}>
        <Image
          style={styles.poster}
          source={{uri: imageBaseUrl + movie.poster_path}}
        />
      </View>

      <Container>
        <View>
          <Text style={styles.subtitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>

        <View>
          {/* <Icon name="cloud" color="gray" size={20} /> */}

          {isLoading ? (
            <ActivityIndicator size={35} color="gray" style={{marginTop: 20}} />
          ) : (
            <MovieDetails movieFull={movieFull!} cast={cast} />
          )}
        </View>
      </Container>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleGoBack}
        style={{
          position: 'absolute',
          left: 20,
          top: 20,
          width: 60,
          paddingVertical: 9,
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    marginBottom: 20,
    width: '100%',
    height: screenHeight * 0.7,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 0.7,
    elevation: 5,
  },
  poster: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});
