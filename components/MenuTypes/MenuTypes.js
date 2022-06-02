import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {COLORS, dummyData, FONTS, SIZES} from '../../constants';

const MenuTypes = ({
  selectedMenuType,
  setSelectedMenuType,
  handleChangeCategory,
  selectedCategoryId,
}) => {
  return (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 30,
        marginBottom: 20,
      }}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={[
            styles.menuItem,
            {
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            },
          ]}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory(selectedCategoryId, item.id);
          }}>
          <Text
            style={[
              styles.name,
              {
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
              },
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  menuItem: {
    marginLeft: SIZES.padding,
  },
  name: {
    ...FONTS.h3,
  },
});
export default MenuTypes;
