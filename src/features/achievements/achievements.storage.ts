import { load, save } from "@/infra/storage/storage";

const STORAGE_KEY = "unlocked_achievements";

export async function loadUnlockedAchievements(): Promise<string[]> {
  const data = await load<string[]>(STORAGE_KEY);
  return data ?? [];
}

export async function saveUnlockedAchievements(ids: string[]) {
  await save(STORAGE_KEY, ids);
}
