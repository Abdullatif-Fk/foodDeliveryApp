import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {SIZES} from '../../constants';
import {Section} from '../../Containers';
import {VerticalFoodCard} from '../../components';

const PopularSection = ({popular}) => {
  return (
    <Section title="Popular Near You">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popular}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <VerticalFoodCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : 10,
              marginRight: index == popular.length - 1 ? SIZES.padding : 0,
            }}
            item={item}
          />
        )}
      />
    </Section>
  );
};
const styles = StyleSheet.create({});
export default PopularSection;
