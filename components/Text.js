/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import * as colors from '@colors';

export function GenericText({
  text = '',
  style,
  color,
  size,
  onPress,
  underline,
  bold,
  lineHeight,
  uppercase,
  center,
}) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          fontWeight: bold ? 'bold' : 'normal',
          textAlign: center ? 'center' : 'left',
          color: color || colors.black,
          fontSize: size || widthPercentageToDP(4),
          ...(lineHeight && { lineHeight }),
          ...(underline
            ? {
                textDecorationLine: 'underline',
                textDecorationColor: color || '#000',
              }
            : {}),
        },
        style,
      ]}
    >
      {uppercase ? text.toUpperCase() : text}
    </Text>
  );
}
