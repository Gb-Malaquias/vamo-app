import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

import { Place, PriceRange } from "@/domain/entities/Place";
import { theme } from "@/shared/theme/theme";

type Props = {
  place: Place;
  liked?: boolean;
  visited?: boolean;
  highlight?: boolean; // 🔹 ALTERADO: suporte a surprise
};

type PriceInfo = {
  label: string;
  color: string;
};

export function PlaceCard({
  place,
  liked,
  visited,
  highlight,
}: Props) {
  const badgeAnim = useRef(new Animated.Value(0)).current;

  // 🔹 ALTERADO: animação especial de surprise
  const surpriseAnim = useRef(new Animated.Value(0)).current;

  function getPriceInfo(range: PriceRange | string): PriceInfo {
    switch (range) {
      case "FREE":
        return { label: "🆓 Gratuito", color: "#22c55e" };
      case "LOW":
        return { label: "💰 Econômico", color: theme.colors.primary };
      case "MEDIUM":
        return { label: "💰💰 Médio", color: "#f59e0b" };
      case "HIGH":
        return { label: "💰💰💰 Caro", color: "#ef4444" };
      default:
        return {
          label: "💰 Preço indefinido",
          color: theme.colors.muted,
        };
    }
  }

  const price = getPriceInfo(place.priceRange);

  // anima badge (curtido / visitado)
  useEffect(() => {
    if (liked || visited) {
      badgeAnim.setValue(0);
      Animated.spring(badgeAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 6,
      }).start();
    }
  }, [liked, visited]);

  // 🔹 ALTERADO: animação contínua de surprise
  useEffect(() => {
    if (!highlight) return;

    Animated.loop(
      Animated.sequence([
        Animated.timing(surpriseAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(surpriseAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [highlight]);

  return (
    <Animated.View
      style={[
        styles.card,
        highlight && styles.surpriseCard, // 🔹 ALTERADO
        highlight && {
          transform: [
            {
              scale: surpriseAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.015],
              }),
            },
          ],
          shadowOpacity: surpriseAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.15, 0.35],
          }),
        },
      ]}
    >
      {(liked || visited) && (
        <Animated.View
          style={[
            styles.badge,
            liked && styles.liked,
            visited && styles.visited,
            {
              transform: [{ scale: badgeAnim }],
              opacity: badgeAnim,
            },
          ]}
        >
          <Text style={styles.badgeText}>
            {visited ? "📍 Visitado" : "❤️ Curtido"}
          </Text>
        </Animated.View>
      )}

      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>

      <View style={styles.meta}>
        <Text style={styles.metaText}>
          📍 {place.location.city}
        </Text>

        <View
          style={[
            styles.priceBadge,
            { backgroundColor: price.color + "22" },
          ]}
        >
          <Text style={[styles.priceText, { color: price.color }]}>
            {price.label}
          </Text>
        </View>

        <Text style={styles.metaText}>
          🏷️ {place.category}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.lg,
    borderRadius: 16,
    backgroundColor: theme.colors.card,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 4,
  },

  // 🔹 ALTERADO: estilo exclusivo surprise
  surpriseCard: {
    borderWidth: 1.5,
    borderColor: "#facc15", // dourado
    shadowColor: "#facc15",
  },

  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  liked: {
    backgroundColor: theme.colors.primary,
  },
  visited: {
    backgroundColor: theme.colors.secondary,
  },
  badgeText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#000",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  description: {
    marginTop: 4,
    color: theme.colors.muted,
  },
  meta: {
    marginTop: theme.spacing.md,
    gap: 6,
  },
  metaText: {
    color: theme.colors.muted,
    fontSize: 14,
  },
  priceBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  priceText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
