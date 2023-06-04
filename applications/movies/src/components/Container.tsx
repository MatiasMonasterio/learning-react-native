import type {PropsWithChildren} from 'react';
import type {ViewProps} from 'react-native';

import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props extends PropsWithChildren, ViewProps {}

export default function Container({children, style = {}, ...args}: Props) {
  return (
    <View {...args} style={{...style, ...styles.container}}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
