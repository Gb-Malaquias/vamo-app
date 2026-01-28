import { achievementsCatalog } from "./achievements.catalog";
import { Achievement } from "@/domain/entities/Achievement";


export function resolveAchievements(
  likedCount: number,
  visitedCount: number
): Achievement[] {
  return achievementsCatalog.filter(ach => {
    if (ach.condition.type === "LIKED_PLACES") {
      return likedCount >= ach.condition.amount;
    }
    if (ach.condition.type === "VISITED_PLACES") {
      return visitedCount >= ach.condition.amount;
    }
    return false;
  });
}
