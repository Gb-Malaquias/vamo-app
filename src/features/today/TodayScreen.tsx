import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";

import { useLikes } from "@/features/liked/likesContext";
import { useVisited } from "@/features/visited/visitedContext";
import { useToday } from "@/domain/services/today.service";
import { PlaceCard } from "@/shared/components/PlaceCard";
import { AppButton } from "@/shared/components/AppButton";
import { theme } from "@/shared/theme/theme";

import { useRouter } from "expo-router";
import { mockPlaces } from "@/features/places/mockPlaces";

export default function TodayScreen() {
  const router = useRouter();

  const { likes, like, isLiked } = useLikes();
  const { visited, visit, isVisited } = useVisited();

  const { place, reason, isSurprise, yesterday } = useToday({
    places: mockPlaces,
    likedIds: likes.map(p => p.id),
    visitedIds: visited.map(p => p.id),
    likedCategories: likes.map(p => p.category),
    visitedCategories: visited.map(p => p.category),
  });

  // 🔹 ALTERADO: controle de loading visual
  const [ready, setReady] = useState(false);

  // 🔹 ALTERADO: animação de entrada única
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!place) return;

    setReady(true);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [place]);

  return (
    <View style={styles.container}>
      {/* Header sempre renderizado */}
      <View style={styles.header}>
        <Text style={styles.title}>✨ Sugestão do dia</Text>

        {reason && (
          <Text style={styles.reason}>{reason}</Text>
        )}
      </View>

      {/* Conteúdo com fade-in */}
      {!ready ? (
        // 🔹 ALTERADO: placeholder estável (não troca tela)
        <View style={styles.placeholder}>
          <Text style={styles.empty}>
            Preparando sua sugestão de hoje…
          </Text>
        </View>
      ) : (
        <Animated.View style={{ opacity: fadeAnim }}>
          <PlaceCard
            place={place}
            liked={isLiked(place.id)}
            visited={isVisited(place.id)}
            highlight={isSurprise}
          />

          <View style={styles.actions}>
            <AppButton
              title={isLiked(place.id) ? "❤️ Curtido" : "❤️ Curtir"}
              onPress={() => like(place)}
              disabled={isLiked(place.id)}
            />

            <AppButton
              title={
                isVisited(place.id)
                  ? "📍 Visitado"
                  : "📍 Marcar como visitado"
              }
              onPress={() => visit(place)}
              disabled={isVisited(place.id)}
              variant="secondary"
            />

            <Text
              style={styles.explore}
              onPress={() => router.push("/swipe")}
            >
              Explorar mais lugares →
            </Text>
          </View>

          {yesterday && (
            <View style={styles.yesterday}>
              <Text style={styles.yesterdayLabel}>
                Ontem foi:
              </Text>
              <Text style={styles.yesterdayName}>
                {yesterday.name}
              </Text>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  reason: {
    marginTop: 4,
    color: theme.colors.muted,
    fontSize: 14,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    color: theme.colors.muted,
    fontStyle: "italic",
  },
  actions: {
    marginTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  explore: {
    marginTop: theme.spacing.sm,
    textAlign: "center",
    color: theme.colors.muted,
    textDecorationLine: "underline",
  },
  yesterday: {
    marginTop: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderColor: theme.colors.card,
  },
  yesterdayLabel: {
    color: theme.colors.muted,
    fontSize: 12,
    marginBottom: 2,
  },
  yesterdayName: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: "500",
  },
});
