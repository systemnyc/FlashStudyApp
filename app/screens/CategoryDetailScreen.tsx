import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useCards } from "../context/CardsContext";
import FlipCard from "../components/FlipCard";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "CategoryDetail">;

export default function CategoryDetailScreen({ route }: Props) {
  const { category, startIndex } = route.params;
  const { cards } = useCards();

  const filtered = cards.filter((c) => c.category === category);

  const initialIndex = filtered.length === 0 ? 0 : Math.min(startIndex ?? 0, filtered.length - 1);
  const [index, setIndex] = useState(initialIndex);

  const next = () => {
    if (filtered.length === 0) return;
    setIndex((prevIndex) => (prevIndex + 1) % filtered.length);
  };

  const randomFromCategory = () => {
    if (filtered.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setIndex(randomIndex);
  };

  if (filtered.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{category}</Text>
        <Text style={styles.emptyText}>No cards available for this category.</Text>
      </View>
    );
  }

  const currentCard = filtered[index];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      <FlipCard
        front={currentCard.term}
        back={currentCard.answer}
      />

      <TouchableOpacity style={styles.button} onPress={next}>
        <Text style={styles.buttonText}>Next Card</Text>
      </TouchableOpacity>

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
  emptyText: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    textAlign: "center",
    marginTop: theme.spacing.m,
  },
});
