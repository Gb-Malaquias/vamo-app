import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

// hooks
import { useSwipe } from "./useSwipe";
import { usePlaces } from "@/features/places/usePlaces";

// contextos
import { useLikes } from "@/features/liked/likesContext";

// components / theme
import { PlaceCard } from "@/shared/components/PlaceCard";
import { AppButton } from "@/shared/components/AppButton";
import { theme } from "@/shared/theme/theme";

export default function SwipeScreen() {
  const places = usePlaces();
  const { current, next } = useSwipe(places);

  const { like, isLiked } = useLikes();

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(30);

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
  }, [current]);

  if (!current) {
    return (
      <View style={styles.center}>
        <Text style={styles.empty}>Acabaram os lugares 🎉</Text>
      </View>
    );
  }

  function handleLike() {
    like(current);
    next();
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity,
          transform: [{ translateY }],
        }}
      >
        <PlaceCard place={current}
        liked={isLiked(current.id)}/>
      </Animated.View>

      <View style={styles.actions}>
        <AppButton
          title="❌ Pular"
          onPress={next}
          variant="secondary"
        />

        <AppButton
          title={isLiked(current.id) ? "❤️ Curtido" : "❤️ Curtir"}
          onPress={handleLike}
          disabled={isLiked(current.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    justifyContent: "center",
  },
  actions: {
    marginTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  center: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
});
