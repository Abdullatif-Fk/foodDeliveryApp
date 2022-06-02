import {useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {Header} from '../components';
import {constants} from '../constants';
import {setSelectedTab} from '../stores/tab/tabActions';
const MainLayout = ({selectedTab, setSelectedTab}) => {
  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);
  const isDrawerOpen = useDrawerStatus();
  const progress = useSharedValue(0);
  React.useEffect(() => {
    isDrawerOpen === 'open'
      ? (progress.value = withTiming(1))
      : (progress.value = withTiming(0));
  }, [isDrawerOpen]);
  const screenStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 0.5, 1], [1, 0.95, 0.85], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [1, 26], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scaleY}],
      borderRadius,
    };
  });
  return (
    <Animated.View style={[styles.container, screenStyle]}>
      {/* HEADER  */}
      <Header title={String(selectedTab).toUpperCase()} />
      {/* CONTENT */}
      <View style={styles.contentContainer}></View>
      {/* FOOTER */}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
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
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
