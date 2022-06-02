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
import {Footer, Header} from '../components';
import {COLORS, constants, SIZES} from '../constants';
import {setSelectedTab} from '../stores/tab/tabActions';
import LinearGradient from 'react-native-linear-gradient';
import Home from './Home/Home';
import Search from './Search/Search';
import CartTab from './Cart/CartTab';
import Favourite from './Favourite/Favourite';
import Notification from './Notification/Notification';
const MainLayout = ({selectedTab, setSelectedTab}) => {
  const flatListRef = React.useRef(0);
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
    const scaleX = interpolate(progress.value, [0, 0.5, 1], [1, 0.95, 0.85], {
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
      <View style={styles.contentContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                  // backgroundColor: COLORS.gray,
                }}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.search && <Search />}
                {item.label == constants.screens.cart && <CartTab />}
                {item.label == constants.screens.favourite && <Favourite />}
                {item.label == constants.screens.notification && (
                  <Notification />
                )}
                {/* {item.label == constants.screens.wallet && (
                  <Wa />
                )} */}
              </View>
            );
          }}
        />
      </View>
      {/* FOOTER */}
      <Footer flatListRef={flatListRef} />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
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
