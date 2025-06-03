"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useBetSlip } from "../context/BetSlipContext";

type PromoOffer = {
  match: string;
  promo: string;
  odds: string; // fractional odds as string
};

const promoOffers: PromoOffer[] = [
  { match: "Man City vs Arsenal", promo: "City Win + Haaland Goal", odds: "9/4" },
  { match: "Liverpool vs Chelsea", promo: "Liverpool Win & BTTS", odds: "7/2" },
  { match: "Real Madrid vs Barca", promo: "Bellingham Anytime", odds: "5/2" },
  { match: "Bayern vs Dortmund", promo: "Bayern Win & Over 3.5", odds: "3/1" },
];

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// helper to convert fractional odds to decimal
function fractionalToDecimal(fraction: string): number {
  const [numerator, denominator] = fraction.split('/').map(Number);
  return numerator / denominator + 1;
}

export default function PromoCarousel() {
  const { selections, addSelection, removeSelection } = useBetSlip();

  const handleToggle = (promo: PromoOffer) => {
    const id = `${promo.match}-${promo.promo}`;
    const exists = selections.find(sel => sel.id === id);

    if (exists) {
      removeSelection(id);
    } else {
      addSelection({
        id: id,
        event: promo.match,
        type: promo.promo,
        odds: fractionalToDecimal(promo.odds), // ✅ THIS IS THE KEY FIX
      });
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-8 border border-gray-700 rounded-lg bg-[#0a1024] p-6">
      <h2 className="text-lg font-bold text-white mb-4 text-center"> Promo Power Prices</h2>

      <Carousel 
        responsive={responsive} 
        infinite 
        arrows 
        autoPlay 
        autoPlaySpeed={7000} 
        containerClass="carousel-container" 
        itemClass="px-2"
      >
        {promoOffers.map((promo, idx) => {
          const id = `${promo.match}-${promo.promo}`;
          const isSelected = selections.some(sel => sel.id === id);

          return (
            <div
              key={idx}
              className={`bg-gradient-to-br from-[#1c2b4a] to-[#0b132b] border rounded-lg p-5 flex flex-col justify-center items-center text-center transition-shadow duration-300 cursor-pointer 
              ${isSelected ? "border-[#00ffd5] shadow-neon" : "border-white hover:shadow-neon"}`}
              onClick={() => handleToggle(promo)}
            >
              <div className="text-md font-bold text-white">{promo.match}</div>
              <div className="text-sm italic text-blue-400 mt-1">{promo.promo}</div>
              <div className="mt-3 text-white text-lg font-bold">{promo.odds}</div>
              {isSelected && <div className="mt-1 text-green-400 text-xs font-bold">Added to Bet Slip</div>}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
