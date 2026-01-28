import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="swipe" options={{ title: "Descobrir" }} />
      <Tabs.Screen name="today" options={{ title: "Hoje" }} />
      <Tabs.Screen name="liked" options={{ title: "Curtidos" }} />
      <Tabs.Screen name="visited" options={{ title: "Visitados" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
