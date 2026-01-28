export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;

  condition: {
    type: "VISITED_PLACES" | "LIKED_PLACES";
    amount: number;
  };
}
