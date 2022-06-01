import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, icons} from '../../constants';
const CloseButton = ({navigation}) => {
  return (
    <View style={styles.closeBtnContainer}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.closeDrawer()}>
        <Image source={icons.cross} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  closeBtnContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 35,
    width: 35,
    tintColor: COLORS.white,
  },
});
export default CloseButton;
