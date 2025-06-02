"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Link from "next/link";
import Image from "next/image";
import MatchCard from "@/components/MatchCard";


// Type for odds conversion
type OddsKey = "home" | "away" | "draw";

interface MatchType {
  id: number;
  match: string;
  countryCode: string;
  timeElapsed: number;
  odds: Partial<Record<OddsKey, string>>;
  sport: string;
}

// Fractional odds converter
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}

// In-play game data
const liveGames: Record<string, {
  id: number;
  match: string;
  countryCode: string;
  timeElapsed: number;
  odds: Partial<Record<OddsKey, string>>;
}[]> = {
  Football: [
    { id: 1, match: "Man City vs Arsenal", countryCode: "gb", timeElapsed: 37, odds: { home: "4/5", draw: "21/10", away: "7/2" } },
    { id: 2, match: "Real Madrid vs Barca", countryCode: "es", timeElapsed: 52, odds: { home: "6/5", draw: "19/10", away: "21/10" } },
  ],
  Basketball: [
    { id: 4, match: "Lakers vs Celtics", countryCode: "us", timeElapsed: 2, odds: { home: "1/2", away: "17/10" } },
  ],
  Tennis: [
    { id: 6, match: "Djokovic vs Nadal", countryCode: "rs", timeElapsed: 63, odds: { home: "17/20", away: "19/20" } },
  ],
  Esports: [
    { id: 10, match: "Team Liquid vs G2", countryCode: "eu", timeElapsed: 18, odds: { home: "8/13", away: "11/10" } },
  ],
};

export default function InPlayPage() {
  const sportsList = ["All", ...Object.keys(liveGames)];
  const [activeSport, setActiveSport] = useState<string>("All");

  // Flattened games for "All" tab
  const allGames = Object.entries(liveGames).flatMap(([sport, matches]) =>
    matches.map(match => ({ ...match, sport }))
  );

  const displayGames: MatchType[] = activeSport === "All"
    ? allGames
    : liveGames[activeSport]?.map(match => ({ ...match, sport: activeSport })) ?? [];

  // Grouped display for dropdowns
  const groupedDisplay: [string, MatchType[]][] = activeSport === "All"
    ? Object.entries(
        allGames.reduce<Record<string, MatchType[]>>((acc, game) => {
          if (!acc[game.sport]) acc[game.sport] = [];
          acc[game.sport].push(game);
          return acc;
        }, {})
      )
    : [[activeSport, displayGames]];

  return (
    <>
      <Head><title>In-Play – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg shadow text-center">
          <h1 className="text-3xl font-bold">In-Play Sports Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Real-time odds, live action, and momentum swings across sports.
          </p>
          <div className="flex justify-center flex-wrap gap-3 mt-4">
            {["gb", "es", "it", "fr", "us", "jp", "br", "kr", "au"].map(code => (
              <Image key={code} src={`https://flagcdn.com/w40/${code}.png`} alt={code} width={40} height={30} className="rounded shadow" />
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {sportsList.map((sport) => (
              <button
                key={sport}
                onClick={() => setActiveSport(sport)}
                className={`px-4 py-2 text-sm font-semibold border rounded-full transition ${
                  activeSport === sport
                    ? "bg-white text-black border-white shadow"
                    : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-12">
          {groupedDisplay.map(([sport, matches], idx) => (
            <details key={idx} className="border border-white rounded-lg mb-6 group bg-[#0a1024]">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                <span>{sport}</span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {matches.map((match) => {
                  const convertedOdds = {
                    home: match.odds.home ? fractionalToDecimal(match.odds.home) : 0,
                    away: match.odds.away ? fractionalToDecimal(match.odds.away) : 0,
                    draw: match.odds.draw ? fractionalToDecimal(match.odds.draw) : 0,
                  };

                  return (
                    <div key={`${sport}-${match.id}`} className="border border-white rounded-lg p-4 bg-[#0a1024]">
                      <div className="flex justify-between items-center mb-3">
                        <div className="font-semibold text-white">{match.match}</div>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">LIVE</span>
                          <span className="text-xs text-softText">{match.timeElapsed}&apos;</span>
                        </div>
                      </div>

                      <MatchCard
                        match={{
                          slug: `${match.match}-${match.timeElapsed}`,
                          teams: match.match,
                          time: `Live ${match.timeElapsed}'`,
                          odds: convertedOdds,
                        }}
                      />
                    </div>
                  );
                })}
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
