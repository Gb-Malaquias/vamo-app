import { createContext, useContext, useEffect, useState } from "react";
import { Place } from "@/domain/entities/Place";
import { load, save } from "@/infra/storage/storage";

const STORAGE_KEY = "@vamo:likes";

type LikesContextType = {
  likes: Place[];
  like: (place: Place) => void;
  unlike: (id: string) => void;
  isLiked: (id: string) => boolean;
};

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState<Place[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 🔹 1. Carrega do storage ao iniciar o app
  useEffect(() => {
    async function loadLikes() {
      const stored = await load<Place[]>(STORAGE_KEY);
      if (stored) setLikes(stored);
      setLoaded(true);
    }

    loadLikes();
  }, []);

  // 🔹 2. Salva SOMENTE depois que os dados foram carregados
  useEffect(() => {
    if (!loaded) return;
    save(STORAGE_KEY, likes);
  }, [likes, loaded]);

  function like(place: Place) {
    setLikes((prev) => {
      if (prev.some((p) => p.id === place.id)) return prev;
      return [...prev, place];
    });
  }

  function unlike(id: string) {
    setLikes((prev) => prev.filter((p) => p.id !== id));
  }

  function isLiked(id: string) {
    return likes.some((p) => p.id === id);
  }

  return (
    <LikesContext.Provider value={{ likes, like, unlike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const ctx = useContext(LikesContext);
  if (!ctx) {
    throw new Error("useLikes must be used inside LikesProvider");
  }
  return ctx;
}
