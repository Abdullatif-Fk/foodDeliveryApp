import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const Section = ({title, children, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> {title} </Text>
        <TouchableOpacity
        // onPress={}
        >
          <Text style={styles.btnText}>Show All</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
  },
  content: {},
  title: {
    flex: 1,
    ...FONTS.h3,
  },
  btnText: {
    color: COLORS.primary,
    ...FONTS.body3,
  },
});
export default Section;
