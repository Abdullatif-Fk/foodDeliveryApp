import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '../../constants';
import {MainLayout, Notification} from '../../screens';
import CustomDrawerContent from './CustomDrawerContent';
import {connect} from 'react-redux';
import {setSelectedTab} from '../../stores/tab/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({selectedTab, setSelectedTab}) => {
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
          return (
            <CustomDrawerContent
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              navigation={props.navigation}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Notification">
          {props => <Notification {...props} />}
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

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
