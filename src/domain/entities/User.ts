export type UserRole = "USER" | "PLACE_OWNER";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  visitedPlaces: string[]; // ids dos locais visitados
  likedPlaces: string[];   // swipe right

  achievements: string[];  // ids das conquistas
  createdAt: Date;
}
