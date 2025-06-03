"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { fractionToDecimal } from "@/utils/odds";
import HeaderLayout from "../components/Header";
import Footer from "../components/Footer";
import PromotionsBanner from "../components/PromotionsBanner";
import SportsCarousel from "../components/SportsCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import LiveGamesFeed from "../components/LiveGamesFeed";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import HorseRacingSection from "@/components/HorseRacingSection";
import GreyhoundRacingSection from "@/components/GreyHoundRacingSection";
import { useBetSlip } from "../context/BetSlipContext";

import premierLeague from "../data/leagues/premier_league.json";
import laLiga from "../data/leagues/la_liga.json";
import bundesliga from "../data/leagues/bundesliga.json";
import serieA from "../data/leagues/serie_a.json";
import ligue1 from "../data/leagues/ligue_1.json";

// Types
type Accumulator = { id: string; teams: string; legs: string[]; odds: string };

const todayMatches = [
  { league: "Premier League", countryCode: "gb", leagueLogo: "/logos/premier_league.png", matches: premierLeague },
  { league: "La Liga", countryCode: "es", leagueLogo: "/logos/la_liga.png", matches: laLiga },
  { league: "Bundesliga", countryCode: "de", leagueLogo: "/logos/bundesliga.png", matches: bundesliga },
  { league: "Serie A", countryCode: "it", leagueLogo: "/logos/serie_a.png", matches: serieA },
  { league: "Ligue 1", countryCode: "fr", leagueLogo: "/logos/ligue_1.png", matches: ligue1 }
];

export default function Home() {
  const { selections, addSelection, removeSelection } = useBetSlip();

  const [openLeague, setOpenLeague] = useState<string | null>(null);
  const toggleLeague = (leagueName: string) => setOpenLeague(prev => (prev === leagueName ? null : leagueName));

  const accumulators: Accumulator[] = [
    { id: "acc1", teams: "Man City & Liverpool & Chelsea", legs: ["Man City to Win", "Liverpool BTTS", "Chelsea Clean Sheet"], odds: "6/1" },
    { id: "acc2", teams: "PSG & Barcelona & Real Madrid", legs: ["PSG Handicap -1", "Barcelona Over 2.5", "Real Madrid BTTS"], odds: "15/2" },
    { id: "acc3", teams: "Bayern & Juventus & AC Milan", legs: ["Bayern Win + Over 3.5", "Juventus Draw No Bet", "AC Milan BTTS"], odds: "4/1" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAcc = accumulators[currentIndex];
  const isSelected = selections.some(sel => sel.id === currentAcc.id);

  const toggleSelection = () => {
    if (isSelected) {
      removeSelection(currentAcc.id);
    } else {
      addSelection({
        id: currentAcc.id,
        event: currentAcc.teams,
        type: "Accumulator",
        odds: fractionToDecimal(currentAcc.odds),
      });
    }
  };

  const next = () => setCurrentIndex(prev => (prev + 1) % accumulators.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + accumulators.length) % accumulators.length);

  const handleToggleFootball = (matchId: string, team: string, odds: string) => {
    const exists = selections.find(sel => sel.id === matchId);
    if (exists) {
      removeSelection(matchId);
    } else {
      addSelection({ id: matchId, event: team, type: "Match Odds", odds: fractionToDecimal(odds) });
    }
  };

  return (
    <>
      <Head><title>Oh My Sportsbets</title></Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <HeaderLayout />

        <main className="flex-1 px-4 py-6 pb-24 flex flex-col text-center space-y-8">

          <section><PromotionsBanner /></section>

          <section><SportsCarousel /></section>

          <section><PowerPriceCarousel /></section>

        <section>
  <h2 className="text-lg font-bold mb-3">Today’s Football Matches</h2>

  {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
    <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024]">
      <button
        onClick={() => toggleLeague(league)}
        className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold hover:bg-[#14215c] transition rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          <Image src={leagueLogo} alt={`${league} logo`} width={32} height={32} unoptimized />
          <span className="flex items-center gap-2">{league}
            <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
          </span>
        </div>
        <svg className={`h-5 w-5 transition-transform ${openLeague === league ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {openLeague === league && (
        <div className="px-4 pb-4 pt-3 space-y-4 border-t border-gray-700 rounded-b-lg">
          {matches.map(({ teams, time, odds }, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:justify-between bg-[#12182f] p-4 rounded-lg border border-white gap-4">
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold">{teams}</div>
                <div className="text-xs text-gray-400 mt-1">Kickoff: {time}</div>
              </div>

              <div className="flex justify-center sm:justify-end gap-4 text-sm">
                {(["home", "draw", "away"] as const).map(type => {
                  const price = odds[type] || "—";
                  const betId = `${teams}-${type}`;
                  const selected = selections.some(sel => sel.id === betId);
                  return (
                    <div key={type} className="flex flex-col items-center gap-1">
                      <button
                        onClick={() => handleToggleFootball(betId, teams, String(price))}
                        className={`px-4 py-2 rounded border text-sm font-semibold transition ${
                          selected ? "border-[#00ffd5] bg-white text-black" : "border-white bg-gray-900 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {price}
                      </button>
                      <span className="text-xs">{type === "draw" ? "Draw" : type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}

  <div className="mt-6 flex justify-center">
    <Link href="/sports/football">
      <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
        View More Football Matches
      </button>
    </Link>
  </div>
</section>


        <section>
  <h2 className="text-lg font-bold mb-3">Today’s Football Matches</h2>

  {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
    <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024] mb-8">
      <button
        onClick={() => toggleLeague(league)}
        className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold hover:bg-[#14215c] transition rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          <Image src={leagueLogo} alt={`${league} logo`} width={32} height={32} unoptimized />
          <span className="flex items-center gap-2">{league}
            <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
          </span>
        </div>
        <svg className={`h-5 w-5 transition-transform ${openLeague === league ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {openLeague === league && (
        <div className="px-4 pb-6 pt-4 space-y-6 border-t border-gray-700 rounded-b-lg">
          {matches.map(({ teams, time, odds }, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:justify-between bg-[#12182f] p-5 rounded-lg border border-white gap-6">
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold">{teams}</div>
                <div className="text-xs text-gray-400 mt-1">Kickoff: {time}</div>
              </div>

              <div className="flex justify-center sm:justify-end gap-5 text-sm">
                {(["home", "draw", "away"] as const).map(type => {
                  const price = odds[type] || "—";
                  const betId = `${teams}-${type}`;
                  const selected = selections.some(sel => sel.id === betId);
                  return (
                    <div key={type} className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => handleToggleFootball(betId, teams, String(price))}
                        className={`px-5 py-2 rounded border text-sm font-semibold transition ${
                          selected ? "border-[#00ffd5] bg-white text-black" : "border-white bg-gray-900 text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {price}
                      </button>
                      <span className="text-xs">{type === "draw" ? "Draw" : type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}

  <div className="mt-8 flex justify-center">
    <Link href="/sports/football">
      <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
        View More Football Matches
      </button>
    </Link>
  </div>
</section>


          <section><LiveGamesFeed /></section>
          <section><BetBuilderCarousel /></section>
          <section><HorseRacingSection /></section>
          <section><GreyhoundRacingSection /></section>

        </main>

        <Footer />
      </div>
    </>
  );
}
