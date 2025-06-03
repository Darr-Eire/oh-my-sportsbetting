"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { fractionToDecimal } from "@/utils/odds";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import LiveGamesFeed from "../components/LiveGamesFeed";
import HeaderLayout from "../components/Header";
import Footer from "../components/Footer";
import { horseRaces } from "../data/horseRaces";
import { useBetSlip } from "../context/BetSlipContext";
import PromotionsBanner from "../components/PromotionsBanner";
import HorseRacingSection from "@/components/HorseRacingSection";
import GreyhoundRacingSection from "@/components/GreyHoundRacingSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import premierLeague from "../data/leagues/premier_league.json";
import laLiga from "../data/leagues/la_liga.json";
import bundesliga from "../data/leagues/bundesliga.json";
import serieA from "../data/leagues/serie_a.json";
import ligue1 from "../data/leagues/ligue_1.json";

// Types
type Accumulator = {
  id: string;
  teams: string;
  legs: string[];
  odds: string;
};

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
  const toggleLeague = (leagueName: string) => {
    setOpenLeague((prev) => (prev === leagueName ? null : leagueName));
  };

  const accumulators: Accumulator[] = [
    {
      id: "acc1",
      teams: "Man City & Liverpool & Chelsea",
      legs: ["Man City to Win", "Liverpool BTTS", "Chelsea Clean Sheet"],
      odds: "6/1",
    },
    {
      id: "acc2",
      teams: "PSG & Barcelona & Real Madrid",
      legs: ["PSG Handicap -1", "Barcelona Over 2.5", "Real Madrid Both Teams To Score"],
      odds: "15/2",
    },
    {
      id: "acc3",
      teams: "Bayern & Juventus & AC Milan",
      legs: ["Bayern Win + Over 3.5", "Juventus Draw No Bet", "AC Milan BTTS"],
      odds: "4/1",
    }
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

  const next = () => setCurrentIndex((prev) => (prev + 1) % accumulators.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + accumulators.length) % accumulators.length);

  const handleToggleFootball = (matchId: string, team: string, odds: string) => {
    const exists = selections.find((sel) => sel.id === matchId);
    if (exists) {
      removeSelection(matchId);
    } else {
      const decimalOdds = fractionToDecimal(odds);
      addSelection({
        id: matchId,
        event: team,
        type: "Match Odds",
        odds: decimalOdds,
      });
    }
  };

  const handleToggleHorse = (id: string, horseName: string, odds: string) => {
    const exists = selections.find(sel => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({
        id,
        event: horseName,
        type: "Horse Racing",
        odds: fractionToDecimal(odds),
      });
    }
  };
return (
  <>
    <Head><title>Oh My Sportsbets</title></Head>

    <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
      <HeaderLayout />
      
      <main className="flex-1 px-4 py-6 pb-24 flex flex-col text-center space-y-8">

        <section>
          <PromotionsBanner />
        </section>

        <section>
          <SportsCarousel />
        </section>

        <section>
          <PowerPriceCarousel />
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3">Today’s Football Matches</h2>
          {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
            <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024]">
              <button onClick={() => toggleLeague(league)} className="flex items-center gap-3 w-full px-4 py-2 text-left font-semibold hover:bg-[#14215c] transition rounded-t-lg">
                <Image src={leagueLogo} alt={`${league} logo`} width={32} height={32} unoptimized />
                <span className="flex items-center gap-2">{league}
                  <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                </span>
                <svg className={`ml-auto h-5 w-5 transition-transform ${openLeague === league ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openLeague === league && (
                <div className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-700 rounded-b-lg">
                  {matches.map(({ teams, time, odds }, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white">
                      <div>
                        <div className="text-sm font-semibold">{teams}</div>
                        <div className="text-xs text-gray-400">Kickoff: {time}</div>
                      </div>
                      <div className="flex gap-3 text-sm text-center">
                        {(["home", "draw", "away"] as const).map(type => {
                          const price = odds[type] || "—";
                          const betId = `${teams}-${type}`;
                          const selected = selections.some(sel => sel.id === betId);
                          return (
                            <div key={type} className="flex flex-col items-center">
                              <button onClick={() => handleToggleFootball(betId, teams, String(price))}
                                className={`px-3 py-1 rounded border ${selected ? "border-[#00ffd5] bg-white text-black" : "border-white bg-gray-900 text-white hover:bg-white hover:text-black"}`}>
                                {price}
                              </button>
                              <span className="text-xs mt-1">{type === "draw" ? "Draw" : type.charAt(0).toUpperCase() + type.slice(1)}</span>
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
          <h2 className="text-white font-bold text-lg mb-4 text-center">Popular Accumulators</h2>
          <div className="relative bg-gradient-to-br from-[#1c2b4a] to-[#0b132b] p-5 rounded-lg text-white text-center shadow-lg border border-[#00c6ff]">
            <h3 className="font-bold mb-2 text-base">{currentAcc.teams}</h3>
            <ul className="text-sm text-white mb-3 space-y-1">
              {currentAcc.legs.map((leg, i) => (<li key={i}>{leg}</li>))}
            </ul>
            <div className="mb-4">
              <button onClick={toggleSelection}
                className={`px-6 py-2 text-sm font-bold shadow border rounded-xl transition duration-200 
                  ${isSelected ? "bg-white text-[#00c6ff] border-white" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-[#00c6ff]"}`}>
                {currentAcc.odds}
              </button>
              {isSelected && (<div className="mt-2 text-green-400 font-bold text-xs">Added to Bet Slip</div>)}
            </div>
            <div className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer">
              <FaArrowLeft onClick={prev} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
            </div>
            <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
              <FaArrowRight onClick={next} className="text-white opacity-60 hover:opacity-100 text-lg transition" />
            </div>
          </div>
        </section>

        <section>
          <LiveGamesFeed />
        </section>

        <section>
          <BetBuilderCarousel />
        </section>

        <section>
          <HorseRacingSection />
        </section>

        <section>
          <GreyhoundRacingSection />
        </section>

      </main>

      <Footer />
    </div>
  </>
);

