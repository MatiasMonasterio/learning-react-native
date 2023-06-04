import React from 'react';
import {Text, Dimensions, View, ScrollView} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {Container, MoviePoster, HorizontalSlide} from '../components';
import {useMovies} from '../hooks';

const {width: windowWidth} = Dimensions.get('window');

export default function HomeScreen() {
  const ingest = useSafeAreaInsets();
  const {nowPlaying, popular, topRelated, upcoming, isLoading} = useMovies();

  if (isLoading) {
    return (
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={50} />
      </Container>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: ingest.top}}>
        <Text>HomeScreen</Text>

        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlide title="En cine" movies={nowPlaying} />
        <HorizontalSlide title="Populares" movies={popular} />
        <HorizontalSlide title="Mejores calificaciones" movies={topRelated} />
        <HorizontalSlide title="Proximos estrenos" movies={upcoming} />
      </View>
    </ScrollView>
  );
}
