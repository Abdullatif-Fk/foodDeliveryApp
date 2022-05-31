import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const DrawerButton = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.container}>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DrawerButton;
