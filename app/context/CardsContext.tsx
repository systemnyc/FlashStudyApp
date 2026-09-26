import React, { createContext, useContext, useMemo, useState } from "react";
import { Card, initialCards } from "../data/cards";

type NewCard = Omit<Card, "id">;

type CardsContextValue = {
  cards: Card[];
  addCard: (card: NewCard) => void;
};

const CardsContext = createContext<CardsContextValue | undefined>(undefined);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<Card[]>(initialCards);

  const addCard = (card: NewCard) => {
    setCards((prev) => {
      const nextId = prev.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      return [...prev, { ...card, id: nextId }];
    });
  };

  const value = useMemo(() => ({ cards, addCard }), [cards]);

  return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
}

export function useCards() {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
}
