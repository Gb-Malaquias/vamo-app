import { Text, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "@/shared/theme/theme";

export function DevResetButton() {
  async function handleReset() {
    Alert.alert(
      "Resetar dados",
      "Isso vai apagar TODOS os dados locais do app. Continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Resetar",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.clear();
            Alert.alert("Pronto", "AsyncStorage limpo. Reabra o app.");
          },
        },
      ]
    );
  }

  return (
    <Text style={styles.reset} onPress={handleReset}>
      Resetar dados (DEV)
    </Text>
  );
}

const styles = StyleSheet.create({
  reset: {
    marginTop: theme.spacing.lg,
    color: theme.colors.danger,
    textAlign: "center",
    fontSize: 12,
    opacity: 0.7,
  },
});
