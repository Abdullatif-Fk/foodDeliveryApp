import React from 'react';
import {View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
const HorizontalDivider = () => {
  return (
    <View
      style={{
        height: 1,
        marginVertical: SIZES.radius,
        marginLeft: SIZES.radius,
        backgroundColor: COLORS.lightGray1,
      }}></View>
  );
};

export default HorizontalDivider;
