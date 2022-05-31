import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import {MainLayout} from '../screens';
import CustomDrawerContent from '../components/CustomDrawer/CustomDrawerContent';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import DrawerButton from '../components/CustomDrawer/DrawerButton';
const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  // console.log(COLORS.primary);onst offset = useSharedValue(0);

  // const [progress, setProgress] = useState(new Animated.Value(0));
  // const scale = Animated.EasingNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = Animated.EasingNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 26],
  // });
  // const animatedStyles = {borderRadius, transform: [{scale}]};
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        drawerContent={props => {
          // setTimeout(() => {
          //   setProgress(props.progress);
          // }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        initialRouteName="MainLayout"
        screenOptions={{
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
        }}>
        <Drawer.Screen
          options={({navigation}) => ({
            // title: 'Awesome app',
            // header: () => <></>,
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => <DrawerButton navigation={navigation} />,
          })}
          name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerItemsContainer: {
    flex: 1,
    marginTop: SIZES.padding,
  },
});
export default CustomDrawer;
