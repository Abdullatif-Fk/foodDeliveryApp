import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* ICON */}
      <Image source={icons.search} style={styles.icon} />
      {/* TEXT INPUT */}
      <TextInput style={styles.input} placeholder="search food...." />
      {/* FILTER BUTTON */}
      <TouchableOpacity>
        <Image source={icons.filter} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.black,
  },
  input: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
});
export default Search;
