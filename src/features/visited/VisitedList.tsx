import { View, Text, FlatList, StyleSheet, Animated } from "react-native";
import { useRef, useEffect } from "react";

import { useVisited } from "@/features/visited/visitedContext";
import { PlaceCard } from "@/shared/components/PlaceCard";
import { theme } from "@/shared/theme/theme";

import { EmptyState } from "@/shared/components/EmptyState";


function AnimatedItem({ children, index }: { children: React.ReactNode; index: number }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        delay: index * 60,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        delay: index * 60,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ translateY }],
      }}
    >
      {children}
    </Animated.View>
  );
}

export default function VisitedList() {
  const { visited } = useVisited();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Lugares Visitados</Text>

      {visited.length === 0 ? (
  <EmptyState
    icon="📍"
    title="Nenhum lugar visitado ainda"
    description="Marque como visitado quando conhecer um lugar"
  />
      ) : (
        <FlatList
          data={visited}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => (
            <View style={{ height: theme.spacing.md }} />
          )}
          renderItem={({ item, index }) => (
            <AnimatedItem index={index}>
              <PlaceCard place={item} visited/>
            </AnimatedItem>
          )}
        />
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
  list: {
    paddingBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  empty: {
    color: theme.colors.muted,
    fontStyle: "italic",
  },
});
