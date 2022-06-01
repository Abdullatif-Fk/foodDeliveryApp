import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '../../constants';
import {MainLayout} from '../../screens';
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  return (
    <View style={styles.drawerContainer}>
      <Drawer.Navigator
        initialRouteName="MainLayout"
        screenOptions={{
          header: () => null,
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
