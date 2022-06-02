import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';
import {setSelectedTab} from '../../stores/tab/tabActions';

const TabButton = ({
  label,
  icon,
  isFocused,
  onPress,
  selectedTab,
  setSelectedTab,
  index,
  flatListRef,
}) => {
  const TabFlex = useSharedValue(1);
  const TabColor = useSharedValue(COLORS.white);

  const flexStyle = useAnimatedStyle(() => {
    return {
      flex: TabFlex.value,
    };
  });
  const colorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: TabColor.value,
    };
  });

  React.useEffect(() => {
    if (selectedTab == label) {
      TabFlex.value = withTiming(3, {duration: 500});
      TabColor.value = withTiming(COLORS.primary, {duration: 500});
      flatListRef?.current?.scrollToIndex({
        index: index,
        animated: false,
      });
    } else {
      TabFlex.value = withTiming(1, {duration: 500});
      TabColor.value = withTiming(COLORS.white, {duration: 500});
    }
  }, [selectedTab]);
  return (
    <TouchableWithoutFeedback onPress={() => setSelectedTab(label)}>
      <Animated.View style={[styles.container, flexStyle]}>
        <Animated.View style={[styles.tab, colorStyle]}>
          <Image
            style={[styles.img, isFocused && {tintColor: COLORS.white}]}
            source={icon}
          />
          {isFocused && <Text style={styles.label}> {label} </Text>}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  tab: {
    flexDirection: 'row',
    width: '80%',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  img: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  label: {
    marginLeft: SIZES.base,
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
export default connect(mapStateToProps, mapDispatchToProps)(TabButton);
