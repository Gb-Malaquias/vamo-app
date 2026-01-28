
export type PlaceCategory =
  | "RESTAURANT"
  | "BAR"
  | "TOURIST_SPOT"
  | "CAFE"
  | "EVENT";


 export type PriceRange = "FREE" | "LOW" | "MEDIUM" | "HIGH";





export interface Place {
  id: string;
  name: string;
  description: string;

  category: PlaceCategory;
  priceRange: PriceRange;

  location: {
    latitude: number;
    longitude: number;
    city: string;
  };

  validated: boolean; // validação antifraude
}
