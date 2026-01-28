import AsyncStorage from "@react-native-async-storage/async-storage";

export async function save<T>(key: string, value: T) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Storage save error:", key, err);
  }
}

export async function load<T>(key: string): Promise<T | null> {
  const data = await AsyncStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
}

export async function clear(key: string) {
  await AsyncStorage.removeItem(key);
}
