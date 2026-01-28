import { useState } from "react";
import { Place } from "@/domain/entities/Place";

export function useSwipe(places: Place[]) {
  const [index, setIndex] = useState(0);

  const current = places[index];

  function next() {
    setIndex((prev) => prev + 1);
  }

  return {
    current,
    next,
  };
}
