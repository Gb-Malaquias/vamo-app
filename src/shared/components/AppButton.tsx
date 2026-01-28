import { Pressable, Text, StyleSheet, Animated } from "react-native";
import { useRef } from "react";
import { theme } from "@/shared/theme/theme";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export function AppButton({
  title,
  onPress,
  variant = "primary",
  disabled,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  function handlePress() {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  }

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={[
          styles.button,
          styles[variant],
          disabled && styles.disabled,
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%", 
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.card,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 16,
  },
});
