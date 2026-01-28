import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Achievement } from "@/domain/entities/Achievement";
import { resolveAchievements } from "./resolveAchievements";
import { useLikes } from "@/features/liked/likesContext";
import { useVisited } from "@/features/visited/visitedContext";
import {
  loadUnlockedAchievements,
  saveUnlockedAchievements,
} from "./achievements.storage";

type AchievementsContextType = {
  achievements: Achievement[];
  newlyUnlocked: Achievement[];
  clearNewlyUnlocked: () => void;
};

const AchievementsContext = createContext<AchievementsContextType | null>(null);

export function AchievementsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { likes } = useLikes();
  const { visited } = useVisited();

  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newlyUnlocked, setNewlyUnlocked] = useState<Achievement[]>([]);
  const unlockedIdsRef = useRef<Set<string>>(new Set());

  // 🔹 carregar do storage
  useEffect(() => {
    loadUnlockedAchievements().then((ids) => {
      unlockedIdsRef.current = new Set(ids);
    });
  }, []);

  useEffect(() => {
    const resolved = resolveAchievements(
      likes.length,
      visited.length
    );

    const newOnes = resolved.filter(
      (a) => !unlockedIdsRef.current.has(a.id)
    );

    if (newOnes.length > 0) {
      newOnes.forEach((a) => unlockedIdsRef.current.add(a.id));
      saveUnlockedAchievements([...unlockedIdsRef.current]);
      setNewlyUnlocked(newOnes);
    }

    setAchievements(resolved);
  }, [likes.length, visited.length]);

  function clearNewlyUnlocked() {
    setNewlyUnlocked([]);
  }

  return (
    <AchievementsContext.Provider
      value={{ achievements, newlyUnlocked, clearNewlyUnlocked }}
    >
      {children}
    </AchievementsContext.Provider>
  );
}

export function useAchievementsContext() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) {
    throw new Error(
      "useAchievementsContext must be used inside AchievementsProvider"
    );
  }
  return ctx;
}
