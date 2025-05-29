// components/LiveInPlayTabs.tsx
"use client";
import { useState } from "react";

const sportsTabs = [
  { name: "All", icon: "⏱️" },
  { name: "Football", icon: "⚽" },
  { name: "Tennis", icon: "🎾" },
  { name: "Golf", icon: "🏌️" },
  { name: "Cricket", icon: "🏏" },
];

export default function LiveInPlayTabs({ selected, setSelected }: { selected: string, setSelected: (sport: string) => void }) {
  return (
    <div className="flex overflow-x-auto gap-3 px-4 py-2 bg-[#0a0a23] border-b border-gray-700">
      {sportsTabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setSelected(tab.name)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
            selected === tab.name ? "bg-electricCyan text-white border-electricCyan" : "bg-[#1a1a2e] text-gray-300 border-gray-600"
          }`}
        >
          <span>{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
}
