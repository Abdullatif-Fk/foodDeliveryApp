import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
const CustomDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={icon} style={styles.img} />
      <Text style={styles.label}>{label} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.base,
  },
  img: {
    width: 28,
    height: 28,
    tintColor: COLORS.white,
  },
  label: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3,
  },
});
export default CustomDrawerItem;
