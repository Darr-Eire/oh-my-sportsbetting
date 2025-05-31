"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBetSlip } from "../../context/BetSlipContext";
import { horseRaces } from "../../data/horseRaces"; // Assuming you store the data here

const popularHorseBets = [
  { race: "Cheltenham 13:30", bet: "Thunder Rock to Win", odds: "13/2" },
  { race: "Punchestown 15:20", bet: "Lucky Charm Each Way", odds: "9/4" },
  { race: "Leopardstown 16:45", bet: "Echo Flame Tricast", odds: "5/1" },
];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
};

export default function HorseRacingPage() {
  const groupedRaces = horseRaces.reduce((acc: Record<string, typeof horseRaces>, race) => {
    if (!acc[race.track]) acc[race.track] = [];
    acc[race.track].push(race);
    return acc;
  }, {});

  const { addSelection, removeSelection, selections } = useBetSlip();

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
      <Head><title>Horse Racing – OhMySportsbetting</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] shadow text-center">
          <h1 className="text-3xl sm:text-3xl font-semibold tracking-wide">Horse Racing</h1>
          <p className="text-sm sm:text-base mt-2 max-w-xl mx-auto">Explore the top races, Best Horses & Pi-powered action — all in one spot.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {["gb", "ie", "us"].map((code) => (
              <Image key={code} src={`https://flagcdn.com/w40/${code}.png`} alt={`${code} flag`} width={40} height={30} className="rounded shadow-md" />
            ))}
          </div>
        </div>

        {/* Popular Horse Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Horse Bets</h2>
          <Slider {...carouselSettings}>
            {popularHorseBets.map(({ race, bet, odds }, idx) => {
              const id = `popular-${race}-${bet}`;
              const decimalOdds = fractionalToDecimal(odds);
              const isSelected = selections.some(sel => sel.id === id);
              return (
                <div key={idx} className="p-2">
                  <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                    <div className="font-semibold mb-1">{bet}</div>
                    <div className="text-sm text-blue-400 mb-3">{race}</div>
                    <button
                      onClick={() => toggleSelection(id, race, bet, decimalOdds)}
                      className={`font-bold text-lg px-4 py-2 rounded border transition ${
                        isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                      }`}
                    >
                      {odds}
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Race Listings */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {Object.entries(groupedRaces).map(([track, races], i) => (
            <details key={i} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <span className="flex items-center gap-2 text-lg">
                  {track}
                  <Image src={`https://flagcdn.com/w20/${races[0].countryCode}.png`} alt="flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
                </span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-4 space-y-6">
                {races.map(({ raceTime, raceName, runners }, j) => (
                  <div key={j} className="border border-white rounded-md bg-[#0a1024] p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{raceName}</h3>
                      <span className="text-sm text-gray-300">{raceTime}</span>
                    </div>
                    <div className="divide-y divide-white/30">
                      {runners.map(({ number, name, jockey, trainer, form, odds }, idx) => {
                        const id = `${raceName}-${name}`;
                        const decimalOdds = fractionalToDecimal(odds);
                        const isSelected = selections.some(sel => sel.id === id);
                        return (
                          <div key={idx} className="flex items-center justify-between py-2 text-sm">
                            <div className="flex items-center gap-3">
                              <div className="font-bold w-6">{number}</div>
                              <div>
                                <div className="font-medium">{name}</div>
                                <div className="text-gray-400 text-xs">J: {jockey} | T: {trainer} | F: {form}</div>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleSelection(id, raceName, name, decimalOdds)}
                              className={`px-3 py-1 rounded font-semibold border text-sm ${
                                isSelected ? "bg-white text-cyan-700 border-white" : "bg-transparent border-white text-white hover:bg-white hover:text-black"
                              }`}
                            >
                              {odds}
                            </button>
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

// Helper: convert fraction to decimal odds
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}
