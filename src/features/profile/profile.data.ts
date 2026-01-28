import { useLikes } from "@/features/liked/likesContext";
import { useVisited } from "@/features/visited/visitedContext";

export function useProfileStats() {
  const { likes } = useLikes();
  const { visited } = useVisited();

  return {
    name: "Gabriel", // mock por enquanto
    likedCount: likes.length,
    visitedCount: visited.length,
  };
}
