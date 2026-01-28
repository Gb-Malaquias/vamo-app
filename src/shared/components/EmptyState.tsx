import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { theme } from "@/shared/theme/theme";

type Props = {
  icon: string;
  title: string;
  description?: string;
};

export function EmptyState({ icon, title, description }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity, transform: [{ translateY }] },
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>

      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: theme.spacing.lg,
  },
  icon: {
    fontSize: 42,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text,
    textAlign: "center",
  },
  description: {
    marginTop: theme.spacing.sm,
    color: theme.colors.muted,
    textAlign: "center",
  },
});
