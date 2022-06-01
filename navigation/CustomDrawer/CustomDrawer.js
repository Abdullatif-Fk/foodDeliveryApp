import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '../../constants';
import {MainLayout} from '../../screens';
import CustomDrawerContent from './CustomDrawerContent';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View style={styles.drawerContainer}>
      <Drawer.Navigator
        drawerType="slide"
        initialRouteName="MainLayout"
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default CustomDrawer;
