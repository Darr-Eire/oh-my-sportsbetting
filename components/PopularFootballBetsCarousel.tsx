"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useBetSlip } from "../context/BetSlipContext";
import { fractionToDecimal } from "@/utils/odds";

// Types
type PromoOffer = {
  id: string;
  match: string;
  promo: string;
  odds: string;
};

// Promo Offers - IDs are declared directly to match selections format
const promoOffers: PromoOffer[] = [
  { id: "promo1", match: "Man City vs Arsenal", promo: "City Win + Haaland Goal", odds: "9/4" },
  { id: "promo2", match: "Liverpool vs Chelsea", promo: "Liverpool Win & BTTS", odds: "7/2" },
  { id: "promo3", match: "Real Madrid vs Barca", promo: "Bellingham Anytime", odds: "5/2" },
  { id: "promo4", match: "Bayern vs Dortmund", promo: "Bayern Win & Over 3.5", odds: "3/1" },
];

// Responsive breakpoints for carousel
const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function PromoCarousel() {
  const { selections, addSelection, removeSelection } = useBetSlip();

  const handleToggle = (promo: PromoOffer) => {
    const exists = selections.find(sel => sel.id === promo.id);
    if (exists) {
      removeSelection(promo.id);
    } else {
      addSelection({
        id: promo.id,
        event: promo.match,
        type: promo.promo,
        odds: fractionToDecimal(promo.odds),
      });
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-8 border border-gray-700 rounded-lg bg-[#0a1024] p-6">
      <h2 className="text-lg font-bold text-white mb-4 text-center">Promo Power Prices</h2>

      <Carousel 
        responsive={responsive} 
        infinite 
        arrows 
        autoPlay 
        autoPlaySpeed={7000} 
        containerClass="carousel-container" 
        itemClass="px-2"
      >
        {promoOffers.map((promo) => {
          const isSelected = selections.some(sel => sel.id === promo.id);
          return (
            <div
              key={promo.id}
              className={`bg-gradient-to-br from-[#1c2b4a] to-[#0b132b] border rounded-lg p-5 flex flex-col justify-center items-center text-center transition-shadow duration-300 cursor-pointer 
              ${isSelected ? "border-[#00ffd5] shadow-neon" : "border-white hover:shadow-neon"}`}
              onClick={() => handleToggle(promo)}
            >
              <div className="text-md font-bold text-white">{promo.match}</div>
              <div className="text-sm italic text-blue-400 mt-1">{promo.promo}</div>
              <div className="mt-3 text-white text-lg font-bold">{promo.odds}</div>
              {isSelected && <div className="mt-1 text-green-400 text-xs font-bold">Added</div>}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
