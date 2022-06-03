import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const VerticalFoodCard = ({item, containerStyle}) => {
  return (
    <Pressable style={[styles.container, containerStyle]}>
      <View style={{flexDirection: 'row'}}>
        {/* Calories */}
        <View style={styles.calories}>
          <Image style={styles.caloriesIcon} source={icons.calories} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} Calories
          </Text>
        </View>
        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            height: 20,
            width: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      {/* Image */}

      <View style={styles.imgContainer}>
        <Image style={{height: '100%', width: '100%'}} source={item.image} />
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={{color: COLORS.black, ...FONTS.h3}}> {item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: 'center',
            ...FONTS.body5,
          }}>
          {item.description}
        </Text>
        <Text
          style={{marginTop: SIZES.radius, ...FONTS.h2, color: COLORS.black}}>
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: SIZES.radius,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  calories: {
    flex: 1,
    flexDirection: 'row',
  },
  caloriesIcon: {
    width: 30,
    height: 30,
  },
  imgContainer: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    marginTop: -20,
  },
});
export default VerticalFoodCard;
