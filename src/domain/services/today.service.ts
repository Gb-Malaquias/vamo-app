// domain/services/today.service.ts

import { useEffect, useState } from "react";
import { Place } from "@/domain/entities/Place";
import { load, save } from "@/infra/storage/storage";

/**
 * 🔹 Chaves de storage
 */
const STORAGE_DATE = "@vamo:today:date";
const STORAGE_TODAY = "@vamo:today:place";
const STORAGE_YESTERDAY = "@vamo:today:yesterday";

type Params = {
  places: Place[];
  likedIds: string[];
  visitedIds: string[];
  likedCategories: string[];
  visitedCategories: string[];
};

type TodayResult = {
  place: Place | null;
  reason?: string;
  isSurprise: boolean;
  yesterday?: Place | null;
};

export function useToday({
  places,
  likedIds,
  visitedIds,
  likedCategories,
  visitedCategories,
}: Params): TodayResult {
  const [result, setResult] = useState<TodayResult>({
    place: null,
    isSurprise: false,
  });

  useEffect(() => {
    async function resolveToday() {
      const today = new Date().toISOString().split("T")[0];

      const storedDate = await load<string>(STORAGE_DATE);
      const storedPlaceId = await load<string>(STORAGE_TODAY);
      const storedYesterdayId = await load<string>(STORAGE_YESTERDAY);

      /**
       * 🔹 REUSO DA SUGESTÃO DO DIA
       */
      if (storedDate === today && storedPlaceId) {
        setResult({
          place: places.find(p => p.id === storedPlaceId) ?? null,
          yesterday: places.find(p => p.id === storedYesterdayId) ?? null,
          isSurprise: false,
        });
        return;
      }

      /**
       * 🔹 EXCLUSÕES
       */
      const excludedIds = new Set([...likedIds, ...visitedIds]);

      const available = places.filter(
        p => !excludedIds.has(p.id)
      );

      if (available.length === 0) {
        setResult({
          place: null,
          reason: "NO_AVAILABLE_PLACES",
          isSurprise: false,
        });
        return;
      }

      /**
       * 🔹 NOVO — cálculo de pesos por categoria
       * ALTERADO: agora o sorteio considera preferência do usuário
       */
      const categoryWeight = new Map<string, number>();

      likedCategories.forEach(cat => {
        categoryWeight.set(cat, (categoryWeight.get(cat) ?? 0) + 2);
      });

      visitedCategories.forEach(cat => {
        categoryWeight.set(cat, (categoryWeight.get(cat) ?? 0) + 3);
      });

      /**
       * 🔹 Lista expandida para sorteio ponderado
       */
      const weightedPool: Place[] = [];

      available.forEach(place => {
        const weight = categoryWeight.get(place.category) ?? 1;
        for (let i = 0; i < weight; i++) {
          weightedPool.push(place);
        }
      });

      /**
       * 🔹 Sorteio final
       */
      const selected =
        weightedPool[Math.floor(Math.random() * weightedPool.length)];

      /**
       * 🔹 Surprise (continua raro)
       */
      const isSurprise = Math.random() < 0.15;

      /**
       * 🔹 Persistência
       */
      await save(STORAGE_DATE, today);
      await save(STORAGE_TODAY, selected.id);
      await save(STORAGE_YESTERDAY, storedPlaceId ?? null);

      setResult({
        place: selected,
        yesterday: places.find(p => p.id === storedPlaceId) ?? null, 
        isSurprise, 
        reason: isSurprise 
          ? "SURPRISE_PICK"
          : "SMART_DAILY_PICK", // ⬅️ ALTERADO
      });
    }

    resolveToday();
  }, [
    places,
    likedIds,
    visitedIds,
    likedCategories,
    visitedCategories,
  ]);

  return result;
}
