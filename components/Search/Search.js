import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';

const Search = ({setMenuList, handleChangeCategory}) => {
  function search(text) {
    // console.log(dummyData.menu[0].list[0].name);
    if (String(text).length > 0) {
      let searchedList = [];
      searchedList = dummyData.foods.filter(
        food =>
          food.name
            .trim()
            .toLowerCase()
            .includes(String(text).trim().toLowerCase()) ||
          food.description
            .trim()
            .toLowerCase()
            .includes(String(text).trim().toLowerCase()),
      );
      console.log(searchedList);
      setMenuList(searchedList);
    } else {
      handleChangeCategory(1, 1);
    }

    // if (String(text) == '') {
    //   // handleChangeCategory(1, 1);
    // }
  }
  const [serachText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      {/* ICON */}
      <Image source={icons.search} style={styles.icon} />
      {/* TEXT INPUT */}
      <TextInput
        style={styles.input}
        onChangeText={value => {
          setSearchText(value);
          setTimeout(() => search(serachText), 500);
        }}
        value={serachText}
        placeholder="search food...."
      />
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
