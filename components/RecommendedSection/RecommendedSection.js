import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {SIZES} from '../../constants';
import {Section} from '../../Containers';
import HorizontalfoodCard from '../HorizontalfoodCard/HorizontalfoodCard';
const RecommendedSection = ({recommends}) => {
  //   console.log(recommends);

  return (
    <Section title="Recommended">
      <FlatList
        data={recommends}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <HorizontalfoodCard
            containerStyle={{
              height: 180,

              width: SIZES.width * 0.85,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: index == recommends.legnth - 1 ? 0 : SIZES.padding,
              paddingRight: SIZES.radius,
              alignItems: 'center',
            }}
            imgStyle={{
              marginTop: 35,
              height: 150,
              width: 150,
            }}
            item={item}
          />
        )}
      />
    </Section>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default RecommendedSection;
