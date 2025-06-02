"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import { basketballGames } from "../../data/basketballGames";
import { useBetSlip } from "../../context/BetSlipContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Convert fractional odds to decimal
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}


  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}


export default function BasketballPage() {
  const { addSelection, removeSelection, selections } = useBetSlip();

  const carouselSettings = {
    dots: false, infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  const [dates, setDates] = useState<Date[]>([]);
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  useEffect(() => {
    const today = new Date();
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d;
    });
    setDates(days);
    setActiveDate(today);
  }, []);

  const groupedGames = basketballGames.reduce((acc, game) => {
    acc[game.league] = acc[game.league] || [];
    acc[game.league].push(game);
    return acc;
  }, {} as Record<string, typeof basketballGames>);

  const toggleSelection = (id: string, event: string, type: string, odds: number) => {
    const exists = selections.some(sel => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({ id, event, type, odds });
    }
  };

  return (
    <>
      <Head><title>Basketball – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="mx-4 mb-8 p-4 rounded-lg bg-[#0a1024] shadow text-center">
            <h1 className="text-3xl font-semibold mb-2">Basketball</h1>
            <p className="text-sm text-white mb-4">NBA, EuroLeague & NCAA fixtures — odds updated for every tip-off.</p>
            <div className="flex justify-center gap-4">
              <Image src={`https://flagcdn.com/w40/us.png`} alt="USA" width={40} height={30} className="rounded shadow" />
              <Image src={`https://flagcdn.com/w40/eu.png`} alt="Europe" width={40} height={30} className="rounded shadow" />
            </div>
          </div>

          {/* Popular Bets Carousel */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Basketball Bets</h2>
            <Slider {...carouselSettings}>
              {popularBets.map((bet, i) => {
                const betId = `popular-${bet.title}`;
                const isSelected = selections.some(sel => sel.id === betId);
                const decimalOdds = fractionalToDecimal(bet.fractional);
                return (
                  <div key={i} className="p-2">
                    <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                      <div className="font-semibold text-white mb-1">{bet.title}</div>
                      <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                      <button
                        onClick={() => toggleSelection(betId, bet.title, bet.market, decimalOdds)}
                        className={`font-bold text-lg px-4 py-2 rounded border transition ${
                          isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                        }`}
                      >
                        {bet.fractional}
                      </button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* Date Tabs + Dropdown */}
          <div className="flex justify-center mt-6 mb-8">
            <div className="flex overflow-x-auto pl-4 pr-2 gap-3 max-w-full md:max-w-3xl scrollbar-hide">
              {dates.map((date, idx) => {
                let label = date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" });
                const today = new Date();
                const tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);

                const formatDate = (d: Date) => d.toISOString().slice(0, 10);
                if (formatDate(date) === formatDate(today)) label = "Today";
                else if (formatDate(date) === formatDate(tomorrow)) label = "Tomorrow";

                const isActive = activeDate && formatDate(activeDate) === formatDate(date);
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveDate(date)}
                    className={`min-w-[90px] flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm border ${
                      isActive ? "bg-white text-black border-white shadow-lg" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              {/* Dropdown for next 5 days */}
              {dates.length > 0 && (
                <select
                  className="min-w-[120px] px-4 py-2 rounded-full font-semibold text-sm border border-white bg-[#0a1024] text-white"
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    setActiveDate(selectedDate);
                  }}
                >
                  <option value="">More Dates</option>
                  {Array.from({ length: 5 }, (_, i) => {
                    const lastDate = dates[dates.length - 1];
                    const futureDate = new Date(lastDate);
                    futureDate.setDate(lastDate.getDate() + i + 1);
                    return (
                      <option key={i} value={futureDate.toISOString()}>
                        {futureDate.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>

          {/* League Matches */}
          {Object.entries(groupedGames).map(([league, matches], idx) => (
            <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <span className="text-lg">{league}</span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {matches.map((match, i) => (
                  <div key={i} className="bg-deepCard p-3 rounded-lg border border-white hover:scale-[1.01] transition-transform duration-150">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <div className="text-sm font-semibold text-white">{match.game}</div>
                        <div className="text-xs text-softText mt-0.5">Tip-off: {match.tipOff}</div>
                      </div>

                      <div className="flex gap-2 text-center text-xs">
                        {Object.entries(match.odds).map(([type, fractional]) => {
                          if (type === "draw") return null;
                          const selectionId = `${match.game}-${type}`;
                          const isSelected = selections.some(sel => sel.id === selectionId);
                          const decimal = fractionalToDecimal(fractional);
                          return (
                            <div key={type} className="flex flex-col items-center">
                              <button
                                onClick={() => toggleSelection(selectionId, match.game, type, decimal)}
                                className={`border px-3 py-1 rounded font-medium transition ${
                                  isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                                }`}
                              >
                                {fractional}
                              </button>
                              <span className="text-softText mt-1">{type === "home" ? "Home" : "Away"}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}

          <div className="flex justify-center mb-8">
            <Link href="/" className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Back to Home
            </Link>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

// Popular Basketball Bets
const popularBets = [
  { title: "Lakers vs Celtics", market: "Over 220.5", fractional: "4/1" },
  { title: "Warriors vs Suns", market: "Winning Margin: Warriors 6-10", fractional: "3/1" },
  { title: "Real Madrid vs Barcelona", market: "Both Teams 80+ Points", fractional: "10/3" },
];
