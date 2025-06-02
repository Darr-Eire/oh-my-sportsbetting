"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { greyhoundRaces } from "../../data/greyhoundRaces";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trapColors = [
  "bg-white text-black",
  "bg-blue-600 text-white",
  "bg-red-600 text-white",
  "bg-black text-white",
  "bg-orange-400 text-black",
  "bg-[repeating-linear-gradient(45deg,_#000_0_10px,_#fff_10px_20px)] text-red-600",
];

export default function GreyhoundRacing() {
  const [selections, setSelections] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelections(prev =>
      prev.includes(id) ? prev.filter(sel => sel !== id) : [...prev, id]
    );
  };

  // Group the races by track
 const groupedRaces = greyhoundRaces.Today.reduce((acc, race) => {
  if (!acc[race.track]) acc[race.track] = [];
  acc[race.track].push(race);
  return acc;
}, {});


  const popularGreyhoundBets = [
    { title: "Towcester 19:45", market: "Trap 1 to Win", odds: "3/1" },
    { title: "Shelbourne 20:10", market: "Trap 3 Each Way", odds: "5/2" },
    { title: "Monmore 18:30", market: "Trap 5 Forecast", odds: "6/1" },
  ];

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
      <Head><title>Greyhound Racing – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg shadow text-center">
          <h1 className="text-3xl font-bold">Greyhound Racing</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Live races, trap stats, betting odds and results. All greyhound action in one place.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
            <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular Greyhound Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Greyhound Bets</h2>
          <Slider {...carouselSettings}>
            {popularGreyhoundBets.map(({ title, market, odds }, idx) => {
              const id = `${title}-${market}`;
              const isSelected = selections.includes(id);
              return (
                <div key={idx} className="p-2">
                  <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                    <div className="font-semibold mb-1">{title}</div>
                    <div className="text-sm text-blue-400 mb-3">{market}</div>
                    <button
                      onClick={() => toggleSelection(id)}
                      className={`font-bold text-lg px-4 py-2 rounded border transition ${isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"}`}
                    >
                      {odds}
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Race Groups */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {Object.entries(groupedRaces).map(([track, trackRaces]) => {
            const countryCode = trackRaces[0].countryCode;
            return (
              <details key={track} className="mb-8 border border-white rounded-lg bg-[#0a1024] shadow-md group">
                <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                  <div className="flex items-center gap-3">
                    <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                    {track}
                  </div>
                  <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                {trackRaces.map((race, i) => (
                  <div key={i} className="mb-4 p-4 border-t border-white bg-[#0a1024]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{race.raceName}</span>
                      <span className="text-sm text-gray-400">{race.raceTime}</span>
                    </div>

                    <div className="space-y-2">
                      {race.runners.map((dog, index) => {
                        const id = `${race.raceName}-${dog.name}`;
                        const isSelected = selections.includes(id);
                        return (
                          <div key={index} className="flex items-center justify-between border border-gray-700 rounded-md px-4 py-3 bg-[#10182f] shadow">
                            <div className={`w-10 h-10 flex items-center justify-center font-bold text-sm rounded-sm ${trapColors[index % trapColors.length]}`}>
                              {index + 1}
                            </div>
                            <div className="flex-1 px-4">
                              <p className="text-white font-semibold">{dog.name}</p>
                            </div>
                            <button
                              onClick={() => toggleSelection(id)}
                              className={`text-sm font-bold px-4 py-1 border rounded shadow transition ${isSelected ? "bg-white text-cyan-700 border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-cyan-700"}`}
                            >
                              {dog.odds}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </details>
            );
          })}
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="px-6 py-3 border border-white rounded-full text-white font-semibold transition hover:bg-white hover:text-black">
              Back to Home
            </a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
