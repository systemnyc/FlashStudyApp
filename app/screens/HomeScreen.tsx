import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Cards</Text>
      <Text style={styles.subtitle}>Learn faster. Remember longer.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RandomCard")}
      >
        <Text style={styles.buttonText}>Study Random Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Categories")}
      >
        <Text style={styles.buttonText}>Choose by Category</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("AddCard")}
      >
        <Text style={styles.secondaryButtonText}>Add New Cards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.l,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xl,
  },
  button: {
    backgroundColor: theme.colors.button,
    padding: theme.spacing.m,
    borderRadius: theme.radius.m,
    marginBottom: theme.spacing.m,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#E8ECF5",
  },
  secondaryButtonText: {
    color: theme.colors.accent,
    fontSize: 18,
    fontWeight: "600",
  },
});
