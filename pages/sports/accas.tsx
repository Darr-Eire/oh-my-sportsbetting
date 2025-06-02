// /pages/sports/accas.tsx

"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { accaMatches } from "../../data/acca-data";

// Odds type safety
type OddsType = {
  winDrawWin: Record<"home" | "draw" | "away", string>;
  btts?: Partial<Record<"yes" | "no", string>>;
  overUnder?: Partial<Record<"over" | "under", string>>;
  correctScore?: Record<string, string>;
};

// Fractional Odds Converter
function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return denom ? num / denom + 1 : parseFloat(fraction);
}

// Bet Types Tabs
const betTypes = ["Win-Draw-Win", "BTTS", "Over/Under", "Correct Score"];

export default function AccaBuilderPage() {
  const [selectedBets, setSelectedBets] = useState<string[]>([]);
  const [activeBetType, setActiveBetType] = useState<string>("Win-Draw-Win");

  const toggleSelection = (id: string) => {
    setSelectedBets((prev) =>
      prev.includes(id) ? prev.filter((sel) => sel !== id) : [...prev, id]
    );
  };

  const renderOddsButtons = (odds: OddsType, matchId: string) => {
    if (activeBetType === "Win-Draw-Win") {
      return (
        <div className="flex gap-2">
          {(["home", "draw", "away"] as const).map((type) => {
            const id = `${matchId}-${type}`;
            const isSelected = selectedBets.includes(id);
            return (
              <button
                key={type}
                onClick={() => toggleSelection(id)}
                className={`border px-3 py-2 rounded font-semibold transition ${
                  isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {odds.winDrawWin[type]}
                <div className="text-xs text-center mt-1 capitalize">{type}</div>
              </button>
            );
          })}
        </div>
      );
    }

    if (activeBetType === "BTTS") {
      return (
        <div className="flex gap-2">
          {(["yes", "no"] as const).map((type) => {
            const id = `${matchId}-btts-${type}`;
            const isSelected = selectedBets.includes(id);
            return (
              <button
                key={type}
                onClick={() => toggleSelection(id)}
                className={`border px-4 py-2 rounded font-semibold transition ${
                  isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {odds.btts?.[type] ?? "-"}
                <div className="text-xs text-center mt-1 uppercase">{type}</div>
              </button>
            );
          })}
        </div>
      );
    }

    if (activeBetType === "Over/Under") {
      return (
        <div className="flex gap-2">
          {(["over", "under"] as const).map((type) => {
            const id = `${matchId}-ou-${type}`;
            const isSelected = selectedBets.includes(id);
            return (
              <button
                key={type}
                onClick={() => toggleSelection(id)}
                className={`border px-4 py-2 rounded font-semibold transition ${
                  isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {odds.overUnder?.[type] ?? "-"}
                <div className="text-xs text-center mt-1 capitalize">{type}</div>
              </button>
            );
          })}
        </div>
      );
    }

    if (activeBetType === "Correct Score") {
      return (
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(odds.correctScore ?? {}).map(([score, price]) => {
            const id = `${matchId}-cs-${score}`;
            const isSelected = selectedBets.includes(id);
            return (
              <button
                key={score}
                onClick={() => toggleSelection(id)}
                className={`border px-3 py-2 rounded font-semibold transition ${
                  isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {price}
                <div className="text-xs text-center mt-1">{score}</div>
              </button>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Head>
        <title>ACCA Builder – OhMySportsbetting</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold">ACCA BUILDER</h1>
          <p className="mt-2 text-gray-300">
            Build your ultimate accumulator across multiple leagues.
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-3">
          {betTypes.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveBetType(tab)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                activeBetType === tab ? "bg-white text-black border-white shadow" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-16">
          {Object.entries(accaMatches).map(([league, matches]) => (
            <details key={league} className="border border-white rounded-lg mb-6 group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3">
                  <Image src={`/logos/${league.toLowerCase().replace(/\s+/g, "_")}.png`} alt={league} width={30} height={30} />
                  {league}
                </div>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="space-y-4 px-4 py-3">
                {matches.map((match) => (
                  <div key={match.id} className="flex justify-between items-center border border-white rounded-lg p-4 bg-[#10182f]">
                    <div className="flex items-center gap-4">
                      <Image src={match.logo} alt="logo" width={40} height={40} />
                      <div>
                        <div className="font-semibold text-lg">{match.teams}</div>
                        <div className="text-sm text-gray-400">{match.time}</div>
                      </div>
                    </div>
                    <div>{renderOddsButtons(match.odds, match.id)}</div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <Link href="/" className="inline-block border border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition">
            Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
