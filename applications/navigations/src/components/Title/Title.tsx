import type {PropsWithChildren} from 'react';
import type {TextProps} from 'react-native';

import React from 'react';
import {Text} from 'react-native';

import theme from '../../theme/theme';

interface Props extends PropsWithChildren, TextProps {}

export default function Title({children, ...args}: Props) {
  return (
    <Text {...args} style={{...theme.titlePrimary}}>
      {children}
    </Text>
  );
}
