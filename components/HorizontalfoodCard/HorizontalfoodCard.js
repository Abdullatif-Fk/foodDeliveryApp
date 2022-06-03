import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const HorizontalfoodCard = ({item, containerStyle, imgStyle}) => {
  // console.log('Horizontal========================================');
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, containerStyle]}>
      {/* Image */}
      <Image source={item.image} style={[styles.img, imgStyle]} />
      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}> {item.name} </Text>
        <Text style={styles.desc}> {item.description} </Text>
        <Text style={styles.price}> $ {item.price} </Text>
      </View>
      {/* Calories */}
      <View style={styles.calories}>
        <Image style={styles.caloriesImg} source={icons.calories} />
        <Text style={styles.caloriesNb}>{item.calories} calories </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    height: 130,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  img: {
    marginTop: 20,
    height: 110,
    width: 110,
  },
  info: {
    flex: 1,
  },
  name: {
    ...FONTS.h3,
    fontSize: 17,
    color: COLORS.black,
  },
  desc: {
    color: COLORS.darkGray2,
    ...FONTS.body4,
  },
  price: {
    marginTop: SIZES.base,
    ...FONTS.h2,
    color: COLORS.black,
  },
  calories: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius,
  },
  caloriesImg: {
    width: 30,
    height: 30,
  },
  caloriesNb: {
    color: COLORS.darkGray2,
    ...FONTS.body5,
  },
});
export default HorizontalfoodCard;
