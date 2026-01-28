// TodayEmptyState.tsx
import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/shared/theme/theme";

export function TodayEmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Tudo certo!</Text>
      <Text style={styles.text}>
        Você já decidiu o lugar de hoje.
      </Text>
      <Text style={styles.sub}>
        Volte amanhã para uma nova sugestão 🙂
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: theme.colors.text,
  },
  text: {
    color: theme.colors.muted,
    marginBottom: 4,
  },
  sub: {
    color: theme.colors.muted,
    fontSize: 13,
  },
});
