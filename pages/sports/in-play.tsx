"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import {
  MdSportsSoccer,
  MdOutlineSportsBasketball,
  MdOutlineSportsTennis,
  MdSportsEsports,
} from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const liveGames = {
  Football: [
    { id: 1, match: "Man City vs Arsenal", countryCode: "gb", timeElapsed: 37, odds: { home: "1.80", draw: "3.10", away: "4.50" } },
    { id: 2, match: "Real Madrid vs Barca", countryCode: "es", timeElapsed: 52, odds: { home: "2.20", draw: "2.90", away: "3.10" } },
    { id: 3, match: "PSG vs Marseille", countryCode: "fr", timeElapsed: 19, odds: { home: "1.95", draw: "3.20", away: "4.10" } },
  ],
  Basketball: [
    { id: 4, match: "Lakers vs Celtics", countryCode: "us", timeElapsed: 2, odds: { home: "1.50", away: "2.70" } },
    { id: 5, match: "Bulls vs Warriors", countryCode: "us", timeElapsed: 14, odds: { home: "2.10", away: "1.70" } },
  ],
  Tennis: [
    { id: 6, match: "Djokovic vs Nadal", countryCode: "rs", timeElapsed: 63, odds: { home: "1.85", away: "1.95" } },
    { id: 7, match: "Alcaraz vs Sinner", countryCode: "es", timeElapsed: 45, odds: { home: "2.05", away: "1.75" } },
  ],
  Esports: [
    { id: 10, match: "Team Liquid vs G2", countryCode: "eu", timeElapsed: 18, odds: { home: "1.65", away: "2.10" } },
    { id: 11, match: "Fnatic vs Cloud9", countryCode: "us", timeElapsed: 27, odds: { home: "1.75", away: "2.00" } },
  ],
};

const popularInPlayBets = [
  { title: "Man City vs Arsenal", market: "Next Goal: Arsenal", odds: "3.00" },
  { title: "Djokovic vs Nadal", market: "Over 4.5 Sets", odds: "2.20" },
  { title: "Lakers vs Celtics", market: "Total Points Over 210", odds: "1.80" },
];

export default function InPlayPage() {
  const [clock, setClock] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setClock(Date.now()), 30000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg border border-white shadow text-center">
          <h1 className="text-3xl font-bold">In-Play Sports Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
           In-Play From Around The World, Real-time odds, game momentum, and watch live action across sports.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
            <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular In-Play Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular In-Play Bets</h2>
          <Slider {...carouselSettings}>
            {popularInPlayBets.map((bet, index) => (
              <div key={index} className="p-2">
                <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                  <div className="font-semibold mb-1">{bet.title}</div>
                  <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                  <div className="font-bold text-lg">Odds: {bet.odds}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* In-Play Matches */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {Object.entries(liveGames).map(([sport, matches], i) => (
            <details key={i} className="border border-white rounded-lg bg-[#0a1024] mb-4 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                <span>{sport}</span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="px-4 py-4 space-y-3">
                {matches.map(({ id, match, countryCode, timeElapsed, odds }) => (
                  <div key={id} className="border border-white rounded bg-[#0a1024] px-4 py-3 flex flex-col md:flex-row justify-between items-center shadow">
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                      <div>
                        <h3 className="font-semibold">{match}</h3>
                        <p className="text-xs text-gray-400">Live – {timeElapsed}′</p>
                      </div>
                    </div>

                    <div className="flex gap-2 md:gap-4 mt-3 md:mt-0">
                      {Object.entries(odds).map(([type, value]) => (
                        <div key={type} className="text-center text-white text-sm border border-gray-500 rounded px-3 py-1 min-w-[60px]">
                          <div className="font-bold">{value}</div>
                          <div className="text-xs text-gray-400">
                            {type === "home" ? "Home" : type === "away" ? "Away" : "Draw"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
