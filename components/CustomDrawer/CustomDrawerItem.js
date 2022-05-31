import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const CustomDrawerItem = ({icon, label}) => {
  return (
    <TouchableOpacity style={styles.drawerItemContainer}>
      <Image style={styles.drawerItemImage} source={icon} />
      <Text style={styles.drawerItemLabel}> {label} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.base,
  },
  drawerItemImage: {
    width: 28,
    height: 28,
    tintColor: COLORS.white,
  },
  drawerItemLabel: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3,
  },
});
export default CustomDrawerItem;
