import { View, Text, StyleSheet } from "react-native";

import { useProfileStats } from "./profile.data";
import { resolveAchievements } from "../achievements/resolveAchievements";

import { StatCard } from "@/shared/components/StatCard";
import { theme } from "@/shared/theme/theme";


//reset button
import { DevResetButton } from "@/shared/components/DevResetButton";





export default function ProfileScreen() {
  const { name, likedCount, visitedCount } = useProfileStats();
  const achievements = resolveAchievements(likedCount, visitedCount);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>
        Seu histórico de descobertas
      </Text>

      {/* Stats */}
      <View style={styles.stats}>
        <StatCard icon="❤️" label="Curtidos" value={likedCount} />
        <StatCard icon="📍" label="Visitados" value={visitedCount} />
      </View>

      {/* Conquistas */}
      <Text style={styles.section}>🏆 Conquistas</Text>

      {achievements.length === 0 && (
        <Text style={styles.empty}>
          Explore lugares para desbloquear conquistas
        </Text>
      )}

      {achievements.map((a) => (
        <View key={a.id} style={styles.achievement}>
          <Text style={styles.achievementIcon}>{a.icon}</Text>
          <View>
            <Text style={styles.achievementTitle}>{a.title}</Text>
            <Text style={styles.achievementDesc}>
              {a.description}
            </Text>
          </View>
        </View>
      ))}
        <DevResetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.lg,
  },
  stats: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  section: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  empty: {
    color: theme.colors.muted,
    fontStyle: "italic",
  },
  achievement: {
    flexDirection: "row",
    gap: theme.spacing.md,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.sm,
  },
  achievementIcon: {
    fontSize: 28,
  },
  achievementTitle: {
    color: theme.colors.text,
    fontWeight: "bold",
  },
  achievementDesc: {
    color: theme.colors.muted,
    fontSize: 13,
  },
});
