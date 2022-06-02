import {
  DrawerContentScrollView,
  useDrawerProgress,
  useDrawerStatus,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {HorizontalDivider} from '../../components';
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from '../../constants';
import CloseButton from './CloseButton';
import CustomDrawerItem from './CustomDrawerItem';
const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        {/* CLOSE BUTTUN */}
        <CloseButton navigation={navigation} />
        {/* PROFILE SECTION */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => console.log(profile)}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={styles.profileImg}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{dummyData.myProfile?.name}</Text>
            <Text style={styles.profileDesc}> View Your Profile </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer Items */}
        <View style={styles.drawerItems}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
          />
          <CustomDrawerItem
            label={constants.screens.wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screens.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
          />
          {/* Divider */}
          <HorizontalDivider />
          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite Friends" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>
        <View style={{marginBottom: SIZES.padding}}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    alignItems: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
  },
  profileInfo: {
    marginLeft: SIZES.radius,
  },
  profileName: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  profileDesc: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  drawerItems: {
    flex: 1,
    marginTop: SIZES.padding,
  },
});
export default CustomDrawerContent;
