import { Stack } from "expo-router";
import { LikesProvider } from "@/features/liked/likesContext";
import { VisitedProvider } from "@/features/visited/visitedContext";
import {
  AchievementsProvider,
  useAchievementsContext,
} from "@/features/achievements/achievementsContext";
import { AchievementPopup } from "@/features/achievements/AchievementPopup";

function AchievementOverlay() {
  const { newlyUnlocked, clearNewlyUnlocked } = useAchievementsContext();

  if (newlyUnlocked.length === 0) return null;

  return (
    <AchievementPopup
      achievement={newlyUnlocked[0]}
      onClose={clearNewlyUnlocked}
    />
  );
}

export default function RootLayout() {
  return (
    <LikesProvider>
      <VisitedProvider>
        <AchievementsProvider>
          <AchievementOverlay />
          <Stack screenOptions={{ headerShown: false }} />
        </AchievementsProvider>
      </VisitedProvider>
    </LikesProvider>
  );
}

