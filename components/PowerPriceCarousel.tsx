"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const powerPrices = [
  {
    match: "New York Knicks @ Indiana Pacers",
    description: "Jalen Brunson & Haliburton to Score 25+ Each",
    oldOdds: "11/4",
    newOdds: "4/1",
  },
  {
    match: "Manchester City vs Arsenal",
    description: "Both Teams to Score & Over 2.5 Goals",
    oldOdds: "2/1",
    newOdds: "3/1",
  },
  {
    match: "Real Madrid vs Barcelona",
    description: "Bellingham to Score & Madrid to Win",
    oldOdds: "3/1",
    newOdds: "9/2",
  },
  {
    match: "UFC 302 – Main Event",
    description: "Jones to Win in Round 1 or 2",
    oldOdds: "5/1",
    newOdds: "7/1",
  },
];

export default function PowerPriceCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % powerPrices.length);
  const prev = () => setIndex((prev - 1 + powerPrices.length) % powerPrices.length);
  const p = powerPrices[index];

  return (
    <section className="relative mb-6">
      <h2 className="text-white font-semibold text-lg mb-3 text-center">🔥 Power Prices</h2>

      <div className="bg-[#0a1024] border border-[#2a2a3d] p-6 rounded-xl text-center relative shadow-lg">
        <div className="font-semibold text-sm text-white mb-1">{p.match}</div>
        <div className="text-gray-400 text-xs mb-2">{p.description}</div>
        <div className="flex justify-center items-center gap-4 mt-2">
          <span className="text-gray-500 line-through">{p.oldOdds}</span>
          <span className="bg-electricCyan text-black px-4 py-1 rounded-full text-sm font-bold shadow">
            {p.newOdds}
          </span>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer">
          <FaArrowLeft onClick={prev} className="text-white text-lg opacity-60 hover:opacity-100 transition" />
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
          <FaArrowRight onClick={next} className="text-white text-lg opacity-60 hover:opacity-100 transition" />
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {powerPrices.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-electricCyan" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
