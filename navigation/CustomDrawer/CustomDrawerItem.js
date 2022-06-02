import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, constants, FONTS, SIZES} from '../../constants';
import {setSelectedTab} from '../../stores/tab/tabActions';
const CustomDrawerItem = ({
  label,
  icon,
  isFocused,
  selectedTab,
  setSelectedTab,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: isFocused ? COLORS.transparentBlack1 : null},
      ]}
      onPress={() => {
        if (
          label == constants.screens.home ||
          label == constants.screens.wallet
        ) {
          setSelectedTab(label);
          navigation.navigate('MainLayout');
        } else {
          setSelectedTab(label);
          // navigation.navigate(label);
        }
      }}>
      <Image source={icon} style={styles.img} />
      <Text style={styles.label}>{label} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.base,
  },
  img: {
    width: 28,
    height: 28,
    tintColor: COLORS.white,
  },
  label: {
    marginLeft: 15,
    color: COLORS.white,
    ...FONTS.h3,
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerItem);
