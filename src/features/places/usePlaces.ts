import { Place } from "@/domain/entities/Place";
import { mockPlaces } from "./mockPlaces";

export function usePlaces(): Place[] {
  // no futuro:
  // - API
  // - cache
  // - filtros
  return mockPlaces;
}
