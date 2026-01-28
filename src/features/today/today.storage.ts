import AsyncStorage from "@react-native-async-storage/async-storage";
import { Place } from "@/domain/entities/Place";

const TODAY_KEY = "@today_place";
const DATE_KEY = "@today_date";

export async function saveToday(place: Place) {
  await AsyncStorage.multiSet([
    [TODAY_KEY, JSON.stringify(place)],
    [DATE_KEY, new Date().toDateString()],
  ]);
}

export async function loadToday(): Promise<Place | null> {
  const [[, place], [, date]] = await AsyncStorage.multiGet([
    TODAY_KEY,
    DATE_KEY,
  ]);

  if (!place || !date) return null;

  if (date !== new Date().toDateString()) {
    await AsyncStorage.multiRemove([TODAY_KEY, DATE_KEY]);
    return null;
  }

  return JSON.parse(place);
}
