import { useRef } from "react";
import { Animated } from "react-native";

export function usePressAnimation() {
  const scale = useRef(new Animated.Value(1)).current;

  function pressIn() {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  }

  function pressOut() {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }

  return {
    animatedStyle: {
      transform: [{ scale }],
    },
    pressIn,
    pressOut,
  };
}
