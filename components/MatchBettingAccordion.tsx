// MatchBettingAccordion.tsx
import { useState } from "react";

export default function MatchBettingAccordion({ categories }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      {categories.map((cat, i) => (
        <div key={i} className="bg-deepBlue rounded-lg border border-[#2a2a3d]">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left p-4 text-white font-semibold flex justify-between items-center"
          >
            <span>{cat.name}</span>
            <span>{openIndex === i ? "▲" : "▼"}</span>
          </button>
          {openIndex === i && (
            <div className="p-4 text-sm text-gray-300 space-y-2">
              {cat.bets.map((bet, j) => (
                <div key={j} className="flex justify-between">
                  <span>{bet.label}</span>
                  <span className="text-green-400 font-medium">{bet.odds}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
