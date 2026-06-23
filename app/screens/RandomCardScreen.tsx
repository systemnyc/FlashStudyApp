import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FlipCard from "../components/FlipCard";
import { cards } from "../data/cards"; // temporary until SQLite engine is added
import { theme } from "../theme";

export default function RandomCardScreen() {
  const [currentCard, setCurrentCard] = useState(null);

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
  };

  useEffect(() => {
    getRandomCard();
  }, []);

  if (!currentCard) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Card</Text>

      <FlipCard
        front={currentCard.term}
        back={currentCard.answer}
      />

      <TouchableOpacity style={styles.button} onPress={getRandomCard}>
        <Text style={styles.buttonText}>Next Random Card</Text>
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
});
