import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { cards } from "../data/cards";
import FlipCard from "../components/FlipCard";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "CategoryDetail">;

export default function CategoryDetailScreen({ route }: Props) {

  // ⭐ 1. Pull BOTH params from navigation
  // category = which category we are viewing
  // startIndex = which card to start on (optional)
  const { category, startIndex } = route.params;

  // Filter cards for this category
  const filtered = cards.filter((c) => c.category === category);

  // ⭐ 2. State initialization
  // If startIndex exists, use it. Otherwise default to 0.
  const [index, setIndex] = useState(startIndex ?? 0);

  // Next card in order
  const next = () => setIndex((index + 1) % filtered.length);

  // ⭐ Random card from same category
  const randomFromCategory = () => {
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setIndex(randomIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      <FlipCard
        front={filtered[index].term}
        back={filtered[index].answer}
      />

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>

      {/* ⭐ New button */}
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={randomFromCategory}
      >
        <Text style={styles.secondaryButtonText}>Random From Category</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.l,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: theme.spacing.l,
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.button,
    padding: theme.spacing.m,
    borderRadius: theme.radius.m,
    marginTop: theme.spacing.l,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#E8ECF5",
    marginTop: theme.spacing.m,
  },
  secondaryButtonText: {
    color: theme.colors.accent,
    fontSize: 18,
    fontWeight: "600",
  },
});
