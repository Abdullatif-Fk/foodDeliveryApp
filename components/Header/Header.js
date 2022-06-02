import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
const Header = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      {/* Left */}
      <LeftComponent />
      {/* Title */}
      <View style={styles.title}>
        <Text style={{...FONTS.h3}}> {title} </Text>
      </View>
      {/* Right */}
      <RightComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: SIZES.padding,
    marginTop: 20,
    // alignItems: 'center',
    // borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
