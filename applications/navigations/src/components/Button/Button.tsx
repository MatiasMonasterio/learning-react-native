import type {PropsWithChildren} from 'react';
import type {TouchableOpacityProps} from 'react-native';

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props extends PropsWithChildren, TouchableOpacityProps {}

export default function Button({children, style, ...args}: Props) {
  return (
    <TouchableOpacity {...args} style={{...styles.button, ...style}}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
