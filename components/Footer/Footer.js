import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAnimatedStyle} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {COLORS, constants, icons, SIZES} from '../../constants';
import {setSelectedTab} from '../../stores/tab/tabActions';
import TabButton from '../Tab/TabButton';
const Footer = ({selectedTab, flatListRef}) => {
  // const [icons,setIcons]=
  // console.log(flatListRef);
  return (
    <View style={styles.container}>
      {/* Shadow */}

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 4}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={styles.shadow}
      />
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {Object.keys(constants.screens).map((key, index) =>
          constants.screens.wallet != constants.screens[key] ? (
            <TabButton
              key={index}
              flatListRef={flatListRef}
              index={index}
              label={constants.screens[key]}
              icon={icons[key]}
              isFocused={selectedTab == constants.screens[key]}
            />
          ) : null,
        )}
        {/* <TabButton
          flatListRef={flatListRef}
          index={0}
          label={constants.screens.home}
          icon={icons.home}
          isFocused={selectedTab == constants.screens.home}
        />
        <TabButton
          flatListRef={flatListRef}
          index={1}
          label={constants.screens.search}
          icon={icons.search}
          isFocused={selectedTab == constants.screens.search}
        />
        <TabButton
          flatListRef={flatListRef}
          index={2}
          label={constants.screens.cart}
          icon={icons.cart}
          isFocused={selectedTab == constants.screens.cart}
        />
        <TabButton
          flatListRef={flatListRef}
          index={3}
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={selectedTab == constants.screens.favourite}
        />
        <TabButton
          flatListRef={flatListRef}
          index={4}
          label={constants.screens.notification}
          icon={icons.notification}
          isFocused={selectedTab == constants.screens.notification}
        /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'flex-end',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  shadow: {
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
    // borderColor: 'red',
    // borderWidth: 1,
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
