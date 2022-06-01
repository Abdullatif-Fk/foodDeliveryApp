import {useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const MainLayout = () => {
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
      <Text>MainLayout</Text>
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
});
export default MainLayout;
