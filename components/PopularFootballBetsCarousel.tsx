import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const popularBets = [
  { match: "Manchester City vs Arsenal", bet: "Both Teams to Score", odds: "7/4" },
  { match: "Liverpool vs Chelsea", bet: "Over 2.5 Goals", odds: "10/11" },
  { match: "Real Madrid vs Barcelona", bet: "Bellingham to Score Anytime", odds: "8/5" },
  { match: "PSG vs Marseille", bet: "Mbappe to Score 2+ Goals", odds: "5/2" },
  { match: "Bayern vs Dortmund", bet: "BTTS & Over 2.5 Goals", odds: "11/10" },
  { match: "Juventus vs Inter", bet: "Over 1.5 Goals Each Half", odds: "6/4" },
  { match: "Napoli vs AC Milan", bet: "Osimhen to Score First", odds: "9/2" },
  { match: "Ajax vs PSV", bet: "Both Teams to Score & Draw", odds: "3/1" },
  { match: "Celtic vs Rangers", bet: "Red Card Shown", odds: "7/2" },
  { match: "Galatasaray vs Fenerbahçe", bet: "Over 3.5 Goals", odds: "15/8" },
  { match: "Benfica vs Porto", bet: "BTTS & Benfica Win", odds: "11/4" },
  { match: "Sporting vs Braga", bet: "Anytime Penalty Scored", odds: "2/1" },
  { match: "LA Galaxy vs Inter Miami", bet: "Messi to Score Anytime", odds: "7/5" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 3 },
  desktop: { breakpoint: { max: 1535, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1023, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 639, min: 0 }, items: 1 },
};

export default function PopularFootballBetsCarousel() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-12 border border-gray-700 rounded-lg bg-[#0a1024] p-6">
      <h2 className="text-lg font-bold text-white mb-4 text-center">Popular Football Bets</h2>

      <Carousel
        responsive={responsive}
        infinite
        arrows
        autoPlay
        autoPlaySpeed={6000}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {popularBets.map((bet, idx) => (
          <div
            key={idx}
            className="bg-[#0a1024] border border-white rounded-lg p-4 h-40 flex flex-col justify-center items-center text-center hover:shadow-neon transition-shadow duration-300"
          >
            <div className="text-sm text-white font-bold">{bet.match}</div>
            <div className="text-sm italic text-blue-400 mt-1">{bet.bet}</div>
            <div className="mt-3 text-white text-lg font-bold">Odds: {bet.odds}</div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
