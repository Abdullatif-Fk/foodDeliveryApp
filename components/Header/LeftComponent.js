import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {COLORS, icons, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const LeftComponent = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.openDrawer()}>
      <Image source={icons.menu} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
  },
});
export default LeftComponent;
