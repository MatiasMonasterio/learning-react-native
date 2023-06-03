import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../theme/appTheme';
import {PokeminCard} from '../components';
import {usePokemonPagination} from '../hooks';

export default function Home() {
  const insets = useSafeAreaInsets();
  const {pokemons, loadPokemons} = usePokemonPagination();

  return (
    <View>
      <FlatList
        style={{...styles.page, top: insets.top}}
        data={pokemons}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PokeminCard pokemon={item} />}
        onEndReached={loadPokemons}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          ...styles.container,
          gap: 20,
          marginBottom: 20,
          width: '100%',
        }}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<ActivityIndicator style={{height: 100}} />}
        ListHeaderComponent={
          <Text
            style={{...styles.title, ...styles.container, marginBottom: 12}}>
            Pokedex
          </Text>
        }
      />
    </View>
  );
}
