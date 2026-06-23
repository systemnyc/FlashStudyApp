import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { cards } from "../data/cards";
import { theme } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "Categories">;

export default function CategoriesScreen({ navigation }: Props) {
  const categories = [...new Set(cards.map((c) => c.category))];

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (cat: string) => {
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const getCardsForCategory = (cat: string) =>
    cards.filter((c) => c.category === cat);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      {/* ⭐ SCROLLVIEW ADDED HERE */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map((cat) => {
          const isOpen = expanded[cat];
          const catCards = getCardsForCategory(cat);

          return (
            <View key={cat} style={styles.categoryContainer}>
              {/* Category Header */}
              <TouchableOpacity
                style={styles.categoryHeader}
                onPress={() => toggleCategory(cat)}
              >
                <Text style={styles.categoryTitle}>{cat}</Text>
                <Text style={styles.chevron}>{isOpen ? "▲" : "▼"}</Text>
              </TouchableOpacity>

              {/* Expanded Card List */}
              {isOpen && (
                <View style={styles.cardList}>
                  {catCards.map((card, idx) => (
                    <TouchableOpacity
                      key={card.id}
                      style={styles.cardItem}
                      onPress={() =>
                        navigation.navigate("CategoryDetail", {
                          category: cat,
                          startIndex: idx,
                        })
                      }
                    >
                      <Text style={styles.cardTerm}>{card.term}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      {/* ⭐ END SCROLLVIEW */}
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
  categoryContainer: {
    marginBottom: theme.spacing.m,
    backgroundColor: theme.colors.cardFront,
    borderRadius: theme.radius.m,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.m,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.colors.textPrimary,
  },
  chevron: {
    fontSize: 18,
    color: theme.colors.textSecondary,
  },
  cardList: {
    paddingHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.m,
  },
  cardItem: {
    paddingVertical: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  cardTerm: {
    fontSize: 18,
    color: theme.colors.textSecondary,
  },
});
