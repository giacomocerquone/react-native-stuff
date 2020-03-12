import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as colors from '@colors';

export default class Input extends Component {
  _onChangeText = text => {
    const { onChangeText, name } = this.props;
    return (
      onChangeText && (name ? onChangeText(text, { name }) : onChangeText(text))
    );
  };

  render() {
    const { width, style, iconRight } = this.props;

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholderTextColor={colors.grey}
          {...this.props}
          style={[
            {
              width: width || '80%',
              flex: 1,
              height: 40,
              fontSize: wp(4.5),
              color: colors.black,
            },
            style,
          ]}
          underlineColorAndroid="transparent"
          onChangeText={this._onChangeText}
        />
        {iconRight}
      </View>
    );
  }
}
