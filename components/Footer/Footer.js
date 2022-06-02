import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAnimatedStyle} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {COLORS, constants, icons, SIZES} from '../../constants';
import {setSelectedTab} from '../../stores/tab/tabActions';
import TabButton from '../Tab/TabButton';
const Footer = ({selectedTab, setSelectedTab}) => {
  //   const TabFlex = useSharedValue(1);
  //   const TabColor = useSharedValue(COLORS.white);

  //   const flexStyle = useAnimatedStyle(() => {
  //     return {
  //       flex: TabFlex.value,
  //     };
  //   });
  //   const colorStyle = useAnimatedStyle(() => {
  //     return {
  //       backgroundColor: TabColor.value,
  //     };
  //   });
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
        <TabButton
          label={constants.screens.home}
          icon={icons.home}
          isFocused={selectedTab == constants.screens.home}
          onPress={() => {
            setSelectedTab(constants.screens.home);
          }}
        />
        <TabButton
          label={constants.screens.search}
          icon={icons.search}
          isFocused={selectedTab == constants.screens.search}
          onPress={() => {
            setSelectedTab(constants.screens.search);
          }}
        />
        <TabButton
          label={constants.screens.cart}
          icon={icons.cart}
          isFocused={selectedTab == constants.screens.cart}
          onPress={() => {
            setSelectedTab(constants.screens.cart);
          }}
        />
        <TabButton
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={selectedTab == constants.screens.favourite}
          onPress={() => {
            setSelectedTab(constants.screens.favourite);
          }}
        />
        <TabButton
          label={constants.screens.notification}
          icon={icons.notification}
          isFocused={selectedTab == constants.screens.notification}
          onPress={() => {
            setSelectedTab(constants.screens.notification);
          }}
        />
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
