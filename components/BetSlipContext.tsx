"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Type definitions
export interface Selection {
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

// Create context with initial undefined state for safety
const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

// Provider component
export const BetSlipProvider = ({ children }: { children: ReactNode }) => {
  const [selections, setSelections] = useState<Selection[]>([]);

  const addSelection = (selection: Selection) => {
    setSelections(prev => {
      // Prevent duplicates
      if (prev.some(s => s.id === selection.id)) return prev;
      return [...prev, selection];
    });
  };

  const removeSelection = (id: string) => {
    setSelections(prev => prev.filter(s => s.id !== id));
  };

  const clearSelections = () => {
    setSelections([]);
  };

  return (
    <BetSlipContext.Provider value={{ selections, addSelection, removeSelection, clearSelections }}>
      {children}
    </BetSlipContext.Provider>
  );
};

// Hook for using the context safely
export const useBetSlip = (): BetSlipContextType => {
  const context = useContext(BetSlipContext);
  if (!context) {
    throw new Error("useBetSlip must be used within a BetSlipProvider");
  }
  return context;
};
