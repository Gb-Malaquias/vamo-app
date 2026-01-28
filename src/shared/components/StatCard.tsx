import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/shared/theme/theme";

type Props = {
  label: string;
  value: number;
  icon: string;
};

export function StatCard({ label, value, icon }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems: "center",
  },
  icon: {
    fontSize: 26,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.text,
    marginTop: 4,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 12,
  },
});
