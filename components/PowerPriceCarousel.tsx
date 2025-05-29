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

  const next = () => setIndex(prev => (prev + 1) % powerPrices.length);
  const prev = () => setIndex(prev => (prev - 1 + powerPrices.length) % powerPrices.length);
  const p = powerPrices[index];

  return (
   <section className="w-full max-w-3xl mx-auto mb-8">
  <h2 className="text-white font-semibold text-lg mb-4 text-center">🔥 Power Prices</h2>

  <div className="bg-[#0a1024] border border-gray-700 px-6 py-6 rounded-lg text-center relative shadow-lg">
    <div className="font-semibold text-base text-white mb-1">{p.match}</div>
    <div className="text-gray-400 text-sm mb-2">{p.description}</div>
    <div className="flex justify-center items-center gap-4 mt-3">
      <span className="text-white line-through text-base">{p.oldOdds}</span>
      <span className="bg-electricCyan text-white px-5 py-1.5 rounded-full text-base font-bold shadow">
        {p.newOdds}
      </span>
    </div>

    {/* Arrows */}
    <div className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer">
      <FaArrowLeft onClick={prev} className="text-white text-xl opacity-60 hover:opacity-100 transition" />
    </div>
    <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
      <FaArrowRight onClick={next} className="text-white text-xl opacity-60 hover:opacity-100 transition" />
    </div>
  </div>
</section>

  );
}
