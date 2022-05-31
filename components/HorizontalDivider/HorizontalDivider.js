import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';
const HorizontalDivider = () => {
  return <View style={styles.horizontalDivider}></View>;
};
const styles = StyleSheet.create({
  horizontalDivider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
});

export default HorizontalDivider;
