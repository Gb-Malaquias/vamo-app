import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

import { useLikes } from "@/features/liked/likesContext";
import { useVisited } from "@/features/visited/visitedContext";
import { PlaceCategory } from "@/domain/entities/Place";

import { PlaceCard } from "@/shared/components/PlaceCard";
import { AppButton } from "@/shared/components/AppButton";
import { theme } from "@/shared/theme/theme";

import { EmptyState } from "@/shared/components/EmptyState";


export default function LikedList() {
  const { likes } = useLikes();
  const { visit, isVisited } = useVisited();

  const [category, setCategory] = useState<PlaceCategory | "ALL">("ALL");
  const [order, setOrder] = useState<"name" | "city">("name");

  const filteredLikes = likes
    .filter((p) => category === "ALL" || p.category === category)
    .sort((a, b) => {
      if (order === "name") {
        return a.name.localeCompare(b.name);
      }
      return a.location.city.localeCompare(b.location.city);
    });

  return (
    <View style={styles.container}>
      {/* Filtros */}
      <View style={styles.controls}>
        <Text style={styles.label}>Categoria</Text>

        <View style={styles.row}>
          {["ALL", "RESTAURANT", "BAR", "CAFE", "TOURIST_SPOT", "EVENT"].map(
            (c) => (
              <Text
                key={c}
                style={[
                  styles.filter,
                  category === c && styles.active,
                ]}
                onPress={() => setCategory(c as any)}
              >
                {c}
              </Text>
            )
          )}
        </View>

        <Text style={styles.label}>Ordenar por</Text>

        <View style={styles.row}>
          <Text
            style={[styles.filter, order === "name" && styles.active]}
            onPress={() => setOrder("name")}
          >
            Nome
          </Text>

          <Text
            style={[styles.filter, order === "city" && styles.active]}
            onPress={() => setOrder("city")}
          >
            Cidade
          </Text>
        </View>
      </View>

      {/* Lista */}
      {filteredLikes.length === 0 ? (
  <EmptyState
    icon="❤️"
    title="Nenhum lugar curtido ainda"
    description="Explore lugares e curta os que chamarem sua atenção"
  />
      ) : (
        <FlatList
          data={filteredLikes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <PlaceCard place={item} liked/>

              <AppButton
                title={
                  isVisited(item.id)
                    ? "✅ Visitado"
                    : "📍 Marcar como visitado"
                }
                onPress={() => visit(item)}
                disabled={isVisited(item.id)}
                variant={isVisited(item.id) ? "secondary" : "primary"}
              />
            </View>
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
  controls: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    color: theme.colors.muted,
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: theme.spacing.md,
  },
  filter: {
    color: theme.colors.text,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: theme.colors.card,
    overflow: "hidden",
  },
  active: {
    backgroundColor: theme.colors.primary,
    color: "#000",
  },
  empty: {
    color: theme.colors.muted,
    fontStyle: "italic",
  },
  cardWrapper: {
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
});
