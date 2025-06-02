"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useBetSlip } from "../context/BetSlipContext";

const betBuilders = [
  {
    title: "Man City vs Arsenal",
    options: ["Both Teams to Score", "Over 2.5 Goals", "Haaland to Score"],
    odds: "7/2",
  },
  {
    title: "Liverpool vs Chelsea",
    options: ["Liverpool Win", "Salah to Assist", "Over 1.5 Corners Each Half"],
    odds: "5/1",
  },
  {
    title: "Real Madrid vs Sevilla",
    options: ["Madrid Win", "Bellingham to Score", "BTTS"],
    odds: "4/1",
  },
];

export default function BetBuilderCarousel() {
  const [index, setIndex] = useState(0);
  const { addSelection, removeSelection, selections } = useBetSlip();

  const next = () => setIndex((prev) => (prev + 1) % betBuilders.length);
  const prev = () => setIndex((prev) => (prev - 1 + betBuilders.length) % betBuilders.length);
  const current = betBuilders[index];

  const selectionId = `${current.title}-${current.odds}`;
  const isSelected = selections.some((sel) => sel.id === selectionId);

  // Fractional to decimal converter
  const fractionalToDecimal = (fraction: string): number => {
    const [numerator, denominator] = fraction.split("/").map(Number);
    return numerator / denominator + 1;
  };

  const toggleSelection = () => {
    const decimalOdds = fractionalToDecimal(current.odds);
    if (isSelected) {
      removeSelection(selectionId);
    } else {
      addSelection({
        id: selectionId,
        event: `${current.title} (${current.options.join(", ")})`,
        type: "Bet Builder",
        odds: decimalOdds,
      });
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-6 mb-6 border border-gray-700 rounded-lg bg-[#0a1024] p-6">
      <h2 className="text-white font-bold text-lg mb-4 text-center">Most Popular Bet Builders</h2>

      <div className="relative bg-gradient-to-br from-[#1c2b4a] to-[#0b132b] p-5 rounded-lg text-white text-center shadow-lg border border-[#00c6ff]">
        <h3 className="font-bold mb-2 text-base">{current.title}</h3>

        <ul className="text-sm text-white mb-3 space-y-1">
          {current.options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ul>

        <div className="mb-4">
          <button
            onClick={toggleSelection}
            className={`px-6 py-2 text-sm font-bold shadow border rounded-xl transition duration-200 
              ${isSelected ? "bg-white text-[#00c6ff] border-white" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-[#00c6ff]"}`}
          >
            {current.odds}
          </button>
          {isSelected && (
            <div className="mt-2 text-green-400 font-bold text-xs">Added to Bet Slip</div>
          )}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer">
          <FaArrowLeft onClick={prev} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
        </div>
        <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
          <FaArrowRight onClick={next} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
        </div>
      </div>
    </section>
  );
}
