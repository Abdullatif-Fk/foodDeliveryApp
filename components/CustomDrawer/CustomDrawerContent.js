import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from '../../constants';
import HorizontalDivider from '../HorizontalDivider/HorizontalDivider';
import CustomDrawerItem from './CustomDrawerItem';
const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* Close Button =============================*/}
        <View style={styles.closeBtnContainer}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => navigation.closeDrawer()}>
            <Image source={icons.cross} style={styles.closeBtnIcon} />
          </TouchableOpacity>
        </View>
        {/* Profile Section ==========================*/}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => console.log('profile')}>
          <Image
            style={styles.profileImg}
            source={dummyData.myProfile?.profile_image}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{dummyData.myProfile?.name}</Text>
            <Text style={styles.profileDesc}> View your Profile </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer Items ==============================*/}
        <View style={styles.drawerItemsContainer}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          {/* Line divider */}
          <HorizontalDivider />
          <CustomDrawerItem label={'Track Your Order'} icon={icons.location} />
          <CustomDrawerItem label={'Coupons'} icon={icons.coupon} />
          <CustomDrawerItem label={'Settings'} icon={icons.setting} />
          <CustomDrawerItem label={'Invite a Friend'} icon={icons.profile} />
          <CustomDrawerItem label={'Help Center'} icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem label={'Logout'} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  closeBtnContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnIcon: {
    height: 35,
    width: 35,
    tintColor: 'white',
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
  drawerItemsContainer: {
    flex: 1,
    marginTop: SIZES.padding,
  },
});
export default CustomDrawerContent;
