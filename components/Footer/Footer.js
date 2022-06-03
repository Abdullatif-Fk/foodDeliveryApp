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
        {Object.keys(constants.screens).map(
          (key, index) =>
            constants.screens.wallet != constants.screens[key] &&
            constants.screens.main_layout != constants.screens[key] && (
              <TabButton
                key={index}
                flatListRef={flatListRef}
                index={index}
                label={constants.screens[key]}
                icon={icons[key]}
                isFocused={selectedTab == constants.screens[key]}
              />
            ),
        )}
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
