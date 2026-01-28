import { createContext, useContext, useEffect, useState } from "react";
import { Place } from "@/domain/entities/Place";
import { load, save } from "@/infra/storage/storage";

const STORAGE_KEY = "visited_places";

type VisitedContextType = {
  visited: Place[];
  visit: (place: Place) => void;
  unvisit: (id: string) => void;
  isVisited: (id: string) => boolean;

  
  
};

const VisitedContext = createContext<VisitedContextType | null>(null);

export function VisitedProvider({ children }: { children: React.ReactNode }) {
  const [visited, setVisited] = useState<Place[]>([]);

  // 🔹 carregar do storage ao iniciar o app
  useEffect(() => {
    load<Place[]>(STORAGE_KEY).then((stored) => {
      if (stored) setVisited(stored);
    });
  }, []);

  // 🔹 salvar sempre que mudar
  useEffect(() => {
    save(STORAGE_KEY, visited);
  }, [visited]);

  function visit(place: Place) {
    setVisited((prev) => {
      if (prev.some((p) => p.id === place.id)) return prev;
      return [...prev, place];
    });
  }

  function unvisit(id: string) {
    setVisited((prev) => prev.filter((p) => p.id !== id));
  }

  function isVisited(id: string) {
    return visited.some((p) => p.id === id);
  }

  return (
    <VisitedContext.Provider value={{ visited, visit, unvisit, isVisited }}>
      {children}
    </VisitedContext.Provider>
  );
}

export function useVisited() {
  const ctx = useContext(VisitedContext);
  if (!ctx) {
    throw new Error("useVisited must be used inside VisitedProvider");
  }
  return ctx;
}
