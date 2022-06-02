import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {dummyData, SIZES} from '../../constants';

const RightComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={dummyData.myProfile?.profile_image} style={styles.img} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
  },
});

export default RightComponent;
