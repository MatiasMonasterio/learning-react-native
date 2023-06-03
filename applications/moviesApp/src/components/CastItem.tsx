import type {Cast} from '../types';

import React from 'react';
import {View, Text, Image} from 'react-native';

interface Props {
  actor: Cast;
}

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export default function CastItem({actor}: Props) {
  const actorImage = `${imageBaseUrl}/${actor.profile_path}`;

  return (
    <View style={{flexDirection: 'row'}}>
      {actor?.profile_path && (
        <Image
          style={{width: 50, height: 50, marginRight: 10, borderRadius: 2}}
          source={{uri: actorImage}}
        />
      )}

      <View>
        <Text style={{color: 'black', fontSize: 18}}>{actor.name}</Text>
        <Text style={{color: 'gray', fontSize: 16}}>{actor.character}</Text>
      </View>
    </View>
  );
}
