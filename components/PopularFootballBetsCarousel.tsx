import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const popularBets = [
  {
    match: "Manchester City vs Arsenal",
    bet: "Both Teams to Score",
    odds: "1.75",
  },
  {
    match: "Liverpool vs Chelsea",
    bet: "Over 2.5 Goals",
    odds: "1.90",
  },
  {
    match: "Real Madrid vs Barcelona",
    bet: "Bellingham to Score Anytime",
    odds: "2.60",
  },
  {
    match: "PSG vs Marseille",
    bet: "Mbappe to Score 2+ Goals",
    odds: "3.50",
  },
  {
    match: "Bayern vs Dortmund",
    bet: "BTTS & Over 2.5 Goals",
    odds: "2.10",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1535, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

export default function PopularFootballBetsCarousel() {
  return (
    <div>
  <h2 className="text-xl font-bold text-cyan-500 mb-4 text-center">
  Popular Football Bets
</h2>

      <Carousel
        responsive={responsive}
        infinite
        arrows
        autoPlay
        autoPlaySpeed={5000}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {popularBets.map((bet, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2e] border border-cyan-500 rounded-lg p-4 shadow-lg flex flex-col items-center justify-center h-40 hover:bg-[#222245] transition-all text-center"
          >
            <div className="text-sm text-cyan-300 font-semibold">{bet.match}</div>
            <div className="text-white text-md mt-2">{bet.bet}</div>
            <div className="mt-4 text-green-400 text-lg font-bold">
              Odds: {bet.odds}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

