"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

  const next = () => setIndex((prev) => (prev + 1) % betBuilders.length);
  const prev = () => setIndex((prev) => (prev - 1 + betBuilders.length) % betBuilders.length);
  const current = betBuilders[index];

  return (
    <section className="w-full max-w-3xl mx-auto mt-6 mb-6 border border-gray-700 rounded-lg bg-[#0a1024] p-6">
      <h2 className="text-white font-bold text-lg mb-4 text-center">Most Popular Bet Builders</h2>

      <div className="relative bg-[#0a1024] p-4 rounded-lg text-white text-center shadow-lg border border-[#2a2a3d]">
        <h3 className="font-bold mb-2 text-base">{current.title}</h3>

        <ul className="text-sm text-white mb-3 space-y-1">
          {current.options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ul>

        <div>
          <span className="bg-electricCyan text-white px-4 py-1 rounded-full text-sm font-bold shadow">
            {current.odds}
          </span>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer">
          <FaArrowLeft onClick={prev} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
          <FaArrowRight onClick={next} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
        </div>
      </div>
    </section>
  );
}
