"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SelectionType = {
  id: string;
  event: string;
  type: string;
  odds: number;
};

// Utility
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}

const liveGames = {
  Football: [
    { id: 1, match: "Man City vs Arsenal", countryCode: "gb", timeElapsed: 37, odds: { home: "4/5", draw: "21/10", away: "7/2" } },
    { id: 2, match: "Real Madrid vs Barca", countryCode: "es", timeElapsed: 52, odds: { home: "6/5", draw: "19/10", away: "21/10" } },
    { id: 3, match: "PSG vs Marseille", countryCode: "fr", timeElapsed: 19, odds: { home: "10/11", draw: "11/5", away: "31/10" } },
  ],
  Basketball: [
    { id: 4, match: "Lakers vs Celtics", countryCode: "us", timeElapsed: 2, odds: { home: "1/2", away: "17/10" } },
    { id: 5, match: "Bulls vs Warriors", countryCode: "us", timeElapsed: 14, odds: { home: "11/10", away: "7/10" } },
  ],
  Tennis: [
    { id: 6, match: "Djokovic vs Nadal", countryCode: "rs", timeElapsed: 63, odds: { home: "17/20", away: "19/20" } },
    { id: 7, match: "Alcaraz vs Sinner", countryCode: "es", timeElapsed: 45, odds: { home: "21/10", away: "3/4" } },
  ],
  Esports: [
    { id: 10, match: "Team Liquid vs G2", countryCode: "eu", timeElapsed: 18, odds: { home: "8/13", away: "11/10" } },
    { id: 11, match: "Fnatic vs Cloud9", countryCode: "us", timeElapsed: 27, odds: { home: "3/4", away: "1/1" } },
  ],
};

const popularInPlayBets = [
  { title: "Man City vs Arsenal", market: "Next Goal: Arsenal", odds: "2/1" },
  { title: "Djokovic vs Nadal", market: "Over 4.5 Sets", odds: "6/5" },
  { title: "Lakers vs Celtics", market: "Total Points Over 210", odds: "4/5" },
];

export default function InPlayPage() {
  const [selections, setSelections] = useState<SelectionType[]>([]);

  const toggleSelection = (id: string, event: string, type: string, fractionalOdds: string) => {
    const exists = selections.some(sel => sel.id === id);
    const decimalOdds = fractionalToDecimal(fractionalOdds);
    if (exists) {
      setSelections(selections.filter(sel => sel.id !== id));
    } else {
      setSelections([...selections, { id, event, type, odds: decimalOdds }]);
    }
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
      <Head><title>In-Play – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg border border-white shadow text-center">
          <h1 className="text-3xl font-bold">In-Play Sports Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            In-Play From Around The World, Real-time odds, game momentum, and watch live action across sports.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular In-Play Bets</h2>
          <Slider {...carouselSettings}>
            {popularInPlayBets.map((bet, index) => (
              <div key={index} className="p-2">
                <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                  <div className="font-semibold mb-1">{bet.title}</div>
                  <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                  <div className="font-bold text-lg border border-white px-4 py-2 rounded">{bet.odds}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-12">
          {Object.entries(liveGames).map(([sport, matches], i) => (
            <details key={i} className="border border-white rounded-lg bg-[#0a1024] mb-4 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                <span>{sport}</span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="px-4 py-4 space-y-4">
                {matches.map(({ id, match, countryCode, timeElapsed, odds }) => (
                  <div key={id} className="bg-deepCard p-3 rounded-lg border border-white hover:scale-[1.01] transition-transform duration-150">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                        <span className="font-semibold">{match}</span>
                      </div>
                      <span className="text-xs text-gray-400">Live {timeElapsed}'</span>
                    </div>

                    <div className="flex gap-2 text-center text-xs">
                      {Object.entries(odds).map(([type, fractional]) => {
                        const selectionId = `${match}-${type}`;
                        const isSelected = selections.some(sel => sel.id === selectionId);
                        return (
                          <div key={type} className="flex flex-col items-center">
                            <button
                              onClick={() => toggleSelection(selectionId, match, type, fractional)}
                              className={`border px-3 py-1 rounded font-medium transition ${
                                isSelected
                                  ? "bg-white text-cyan-700 border-white"
                                  : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                              }`}
                            >
                              {fractional}
                            </button>
                            <span className="text-softText mt-1">
                              {type === "home" ? "Home" : type === "away" ? "Away" : "Draw"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Back to Home
            </a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
