"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Selection {
  id: string;
  event: string;
  type: string;
  odds: number;
}

interface BetSlipContextType {
  selections: Selection[];
  addSelection: (selection: Selection) => void;
  removeSelection: (id: string) => void;
  clearSelections: () => void;
}

const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

export const BetSlipProvider = ({ children }: { children: ReactNode }) => {
  const [selections, setSelections] = useState<Selection[]>([]);

  const addSelection = (selection: Selection) => {
    setSelections((prev) => {
      if (prev.find((s) => s.id === selection.id)) return prev; // prevent duplicate selections
      return [...prev, selection];
    });
  };

  const removeSelection = (id: string) => {
    setSelections((prev) => prev.filter((s) => s.id !== id));
  };

  const clearSelections = () => setSelections([]);

  return (
    <BetSlipContext.Provider value={{ selections, addSelection, removeSelection, clearSelections }}>
      {children}
    </BetSlipContext.Provider>
  );
};

export const useBetSlip = () => {
  const context = useContext(BetSlipContext);
  if (!context) {
    throw new Error("useBetSlip must be used within a BetSlipProvider");
  }
  return context;
};
