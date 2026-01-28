import { Achievement } from "@/domain/entities/Achievement";

export const achievementsCatalog: Achievement[] = [
  {
    id: "first-like",
    title: "Primeiro Match",
    description: "Curtiu seu primeiro lugar",
    icon: "❤️",
    condition: {
      type: "LIKED_PLACES",
      amount: 1,
    },
  },
  {
    id: "explorer-5",
    title: "Explorador",
    description: "Curtiu 5 lugares diferentes",
    icon: "🧭",
    condition: {
      type: "LIKED_PLACES",
      amount: 5,
    },
  },
  {
    id: "traveler-3",
    title: "Viajante",
    description: "Visitou 3 lugares",
    icon: "✈️",
    condition: {
      type: "VISITED_PLACES",
      amount: 3,
    },
  },
];
