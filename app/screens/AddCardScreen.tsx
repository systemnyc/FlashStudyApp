import { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCards } from "../context/CardsContext";
import { theme } from "../theme";

export default function AddCardScreen() {
  const { cards, addCard } = useCards();
  const existingCategories = useMemo(
    () => [...new Set(cards.map((c) => c.category))],
    [cards]
  );

  const [term, setTerm] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const canSave = term.trim().length > 0 && answer.trim().length > 0 && category.trim().length > 0;

  const handleSave = () => {
    if (!canSave) {
      Alert.alert("Missing information", "Please fill in the term, answer, and category before saving.");
      return;
    }

    addCard({
      term: term.trim(),
      answer: answer.trim(),
      category: category.trim(),
    });

    setSavedMessage(`Saved "${term.trim()}" to ${category.trim()}.`);
    setTerm("");
    setAnswer("");
    setCategory("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Add New Card</Text>
        <Text style={styles.subtitle}>Create a flashcard for any category.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Term</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Mitochondria"
            value={term}
            onChangeText={setTerm}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            placeholder="e.g. The powerhouse of the cell"
            value={answer}
            onChangeText={setAnswer}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Biology"
            value={category}
            onChangeText={setCategory}
          />
          {existingCategories.length > 0 && (
            <View style={styles.chipRow}>
              {existingCategories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[styles.chip, category === cat && styles.chipActive]}
                  onPress={() => setCategory(cat)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      category === cat && styles.chipTextActive,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, !canSave && styles.buttonDisabled]}
          onPress={handleSave}
          disabled={!canSave}
        >
          <Text style={styles.buttonText}>Save Card</Text>
        </TouchableOpacity>

        {savedMessage.length > 0 && <Text style={styles.savedMessage}>{savedMessage}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.l,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.s,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  formGroup: {
    marginBottom: theme.spacing.l,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
  input: {
    backgroundColor: theme.colors.cardFront,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.s,
    padding: theme.spacing.m,
    fontSize: 16,
    color: theme.colors.textPrimary,
  },
  multiline: {
    minHeight: 96,
    textAlignVertical: "top",
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: theme.spacing.s,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: theme.radius.l,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.cardFront,
  },
  chipActive: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.accent,
  },
  chipText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  chipTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  button: {
    backgroundColor: theme.colors.button,
    padding: theme.spacing.m,
    borderRadius: theme.radius.m,
    alignItems: "center",
    marginTop: theme.spacing.s,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: "600",
  },
  savedMessage: {
    marginTop: theme.spacing.m,
    color: theme.colors.accent,
    fontSize: 14,
    textAlign: "center",
  },
});
