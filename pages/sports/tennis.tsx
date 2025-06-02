"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { tennisEvents } from "../../data/tennis";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBetSlip } from "../../context/BetSlipContext";

// Fractional to decimal converter
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}

const competitions = [
  "Australian Open", "French Open", "Wimbledon", "US Open",
  "ATP 1000", "ATP 500", "ATP 250", "WTA 1000",
  "WTA 500", "Challenger", "ITF Futures"
] as const;

type Competition = typeof competitions[number];

const popularTennisBets = [
  { title: "Djokovic vs Alcaraz", market: "Total Sets Over 3.5", fractional: "2/1" },
  { title: "Swiatek vs Sabalenka", market: "Swiatek 2-0 Correct Score", fractional: "3/1" },
  { title: "Medvedev vs Zverev", market: "Both Players Win A Set", fractional: "5/2" },
];

export default function TennisPage() {
  const { addSelection, removeSelection, selections } = useBetSlip();

  const carouselSettings = {
    dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ],
  };

  const [dates, setDates] = useState<Date[]>([]);
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  useEffect(() => {
    const today = new Date();
    const dateArray = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d;
    });
    setDates(dateArray);
    setActiveDate(today);
  }, []);

  const toggleSelection = (id: string, event: string, type: string, odds: number) => {
    const exists = selections.some((sel) => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({ id, event, type, odds });
    }
  };

  return (
    <>
      <Head><title>Tennis – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Header Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] shadow text-center">
          <h1 className="text-3xl font-bold">Tennis Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Tennis Competitions From Around The World — Grand Slams, ATP, WTA, Challenger & Futures
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
            <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular Tennis Bets Carousel */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Tennis Bets</h2>
          <Slider {...carouselSettings}>
            {popularTennisBets.map((bet, i) => {
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

        {/* Date Tabs */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="flex overflow-x-auto pl-4 pr-2 gap-3 scroll-smooth">
            {dates.map((date, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDate(date)}
                className={`min-w-[90px] px-4 py-2 rounded-full font-semibold text-sm border ${
                  activeDate?.toDateString() === date.toDateString()
                    ? "bg-white text-black border-white shadow-lg"
                    : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black transition"
                }`}
              >
                {date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
              </button>
            ))}
          </div>
        </div>

        {/* Competitions Section */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {competitions.map((comp) => (
            <details key={comp} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                <span>{comp}</span>
                <svg className="ml-auto h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {(tennisEvents[comp as Competition] || []).map((event, idx) => {
                const homeId = `${event.match}-home`;
                const awayId = `${event.match}-away`;
                const homeSelected = selections.some(sel => sel.id === homeId);
                const awaySelected = selections.some(sel => sel.id === awayId);

                return (
                  <div key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-2 px-4 py-3 flex items-center justify-between shadow">
                    <div className="flex-1">
                      <div className="font-semibold text-white">{event.match}</div>
                      <div className="text-sm text-gray-400">Start: {event.startTime}</div>
                    </div>

                    <div className="flex justify-end items-center gap-2">
                      <button
                        className={`border px-3 py-2 rounded font-semibold ${
                          homeSelected ? "bg-white text-cyan-700 border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                        }`}
                        onClick={() => toggleSelection(homeId, event.match, "Home", fractionalToDecimal(event.odds.home))}
                      >
                        {event.odds.home}
                        <div className="text-xs text-gray-400">Home</div>
                      </button>

                      <button
                        className={`border px-3 py-2 rounded font-semibold ${
                          awaySelected ? "bg-white text-cyan-700 border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                        }`}
                        onClick={() => toggleSelection(awayId, event.match, "Away", fractionalToDecimal(event.odds.away))}
                      >
                        {event.odds.away}
                        <div className="text-xs text-gray-400">Away</div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </details>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
            Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
