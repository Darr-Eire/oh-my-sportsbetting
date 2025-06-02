"use client";

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

import premierLeague from "../data/leagues/premier_league.json";
import laLiga from "../data/leagues/la_liga.json";
import bundesliga from "../data/leagues/bundesliga.json";
import serieA from "../data/leagues/serie_a.json";
import ligue1 from "../data/leagues/ligue_1.json";

// ✅ Types declared right here — correct placement
type Accumulator = {
  id: string;
  teams: string;
  odds: string;
};

type MatchSelection = {
  id: string;
  event: string;
  type: string;
  odds: number;
};

const todayMatches = [
  { league: "Premier League", countryCode: "gb", leagueLogo: "/logos/premier_league.png", matches: premierLeague },
  { league: "La Liga", countryCode: "es", leagueLogo: "/logos/la_liga.png", matches: laLiga },
  { league: "Bundesliga", countryCode: "de", leagueLogo: "/logos/bundesliga.png", matches: bundesliga },
  { league: "Serie A", countryCode: "it", leagueLogo: "/logos/serie_a.png", matches: serieA },
  { league: "Ligue 1", countryCode: "fr", leagueLogo: "/logos/ligue_1.png", matches: ligue1 }
];

export default function Home() {
  const [openLeague, setOpenLeague] = useState<string | null>(null);
  const [openHorseRacing, setOpenHorseRacing] = useState(false);
  const { selections, addSelection, removeSelection } = useBetSlip();

  const toggleLeague = (leagueName: string) => {
    setOpenLeague((prev) => (prev === leagueName ? null : leagueName));
  };

  const toggleHorseRacing = () => setOpenHorseRacing(prev => !prev);

  const accumulators: Accumulator[] = [
    { id: "acc1", teams: "Man City & Liverpool & Chelsea", odds: "6/1" },
    { id: "acc2", teams: "PSG & Barcelona & Real Madrid", odds: "15/2" },
    { id: "acc3", teams: "Bayern & Juventus & AC Milan", odds: "4/1" },
  ];

  const handleToggleAccumulator = (acc: Accumulator) => {
    const exists = selections.find(sel => sel.id === acc.id);
    if (exists) {
      removeSelection(acc.id);
    } else {
      addSelection({
        id: acc.id,
        event: acc.teams,
        type: "Accumulator",
        odds: fractionToDecimal(acc.odds),
      });
    }
  };

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
  const greyhoundRaces = [
  {
    track: "Shelbourne Park",
    raceTime: "18:45",
    raceName: "Sprint Stakes",
    runners: [
      { number: 1, name: "Rapid Bullet", form: "121", odds: "2/1" },
      { number: 2, name: "Speedster", form: "132", odds: "5/2" },
      { number: 3, name: "Lightning Dash", form: "213", odds: "3/1" },
      { number: 4, name: "Sonic Boom", form: "334", odds: "9/2" }
    ]
  },
  {
    track: "Romford",
    raceTime: "19:30",
    raceName: "Evening Chase",
    runners: [
      { number: 1, name: "Fast Rocket", form: "322", odds: "7/2" },
      { number: 2, name: "Night Fury", form: "413", odds: "4/1" },
      { number: 3, name: "Blazing Comet", form: "231", odds: "5/1" }
    ]
  }
];

  return (
    <>
      <Head><title>Oh My Sportsbets</title></Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <HeaderLayout />

        <main className="flex-1 px-4 py-4 pb-24 flex flex-col items-center text-center space-y-6 sm:space-y-8">

  <PromotionsBanner />


          <SportsCarousel />
          <PowerPriceCarousel />

          {/* Accumulators */}
          <section className="w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-6">
            <h2 className="text-lg font-bold text-white mb-4">Popular Accumulators</h2>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight className="text-center mx-auto max-w-md">
              {accumulators.map((acc, idx) => {
                const isSelected = selections.some(sel => sel.id === acc.id);
                return (
                  <div key={idx}
                    className={`p-6 rounded-lg border ${isSelected ? "border-[#00ffd5] shadow-neon" : "border-gray-700"} bg-gradient-to-tr from-[#1c2b4a] to-[#0b132b] cursor-pointer`}
                    onClick={() => handleToggleAccumulator(acc)}
                  >
                    <div className="text-lg font-semibold">{acc.teams}</div>
                    <div className="text-sm text-gray-400 mt-1">Odds: {acc.odds}</div>
                    {isSelected && <div className="mt-2 text-green-400 font-bold text-xs">Added to Bet Slip</div>}
                  </div>
                );
              })}
            </Slider>
          </section>

          {/* Today’s Football Matches */}
          <section className="w-full max-w-3xl space-y-4">
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
                                <button
                               onClick={() => handleToggleFootball(betId, teams, String(price))}

                                  className={`px-3 py-1 rounded border ${selected ? "border-[#00ffd5] bg-white text-black" : "border-white bg-gray-900 text-white hover:bg-white hover:text-black"}`}
                                >
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
              <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-cyan-400 hover:text-black transition">
                View More Football Matches
              </button>
            </div>
          </section>

          <BetBuilderCarousel />
          <LiveGamesFeed />
          {/* Popular Horse Racing Bets */}
          <section className="w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-6">
            <h2 className="text-lg font-bold text-white mb-4">Popular Horse Racing Bets</h2>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} adaptiveHeight className="text-center mx-auto max-w-md">
              {[
                { id: "horse1", race: "Cheltenham 3:15", horse: "Mighty Thunder", odds: "7/2" },
                { id: "horse2", race: "Aintree 4:00", horse: "Red Rum Jr", odds: "5/1" },
                { id: "horse3", race: "Ascot 2:45", horse: "Royal Glory", odds: "9/4" }
              ].map((bet, idx) => {
                const isSelected = selections.some(sel => sel.id === bet.id);
                return (
                  <div key={idx}
                    className={`p-6 rounded-lg border ${isSelected ? "border-[#00ffd5] shadow-neon" : "border-gray-700"} bg-gradient-to-tr from-[#1c2b4a] to-[#0b132b] cursor-pointer`}
                    onClick={() => handleToggleHorse(bet.id, bet.horse, bet.odds)}
                  >
                    <div className="text-lg font-semibold">{bet.horse}</div>
                    <div className="text-sm text-gray-400 mt-1">{bet.race}</div>
                    <div className="mt-3 text-lg font-bold">{bet.odds}</div>
                    {isSelected && <div className="mt-2 text-green-400 font-bold text-xs">Added to Bet Slip</div>}
                  </div>
                );
              })}
            </Slider>
          </section>

          {/* Horse Racing Full Course View */}
          <section className="w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg mt-10">
            <button onClick={toggleHorseRacing} className="flex items-center gap-3 w-full px-4 py-3 text-left font-semibold hover:bg-[#14215c] transition rounded-t-lg">
              <span>Horse Racing Courses</span>
              <svg className={`ml-auto h-5 w-5 transition-transform ${openHorseRacing ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openHorseRacing && (
              <div className="p-4 space-y-6 border-t border-gray-700">
                {Object.entries(
                  horseRaces.reduce((acc: Record<string, typeof horseRaces>, race) => {
                    if (!acc[race.track]) acc[race.track] = [];
                    acc[race.track].push(race);
                    return acc;
                  }, {})
                ).map(([track, races], i) => (
                  <details key={i} className="border border-gray-700 rounded-lg bg-[#0a1024]">
                    <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#14215c] transition">
                      <span>{track}</span>
                      <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>

                    <div className="space-y-6 px-4 py-4">
                      {races.map(({ raceTime, raceName, runners }, j) => (
                        <div key={j} className="border border-gray-700 rounded-lg bg-[#0a1024] p-4 space-y-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-white font-bold text-base">{raceName}</h3>
                            <span className="text-sm text-white font-medium">{raceTime}</span>
                          </div>

                          <div className="divide-y divide-gray-700">
                            {runners.map(({ number, name, jockey, trainer, form, odds }, idx) => (
                              <div key={idx} className="flex items-center py-3 text-sm">
                                <div className="flex items-center gap-3 w-10 font-bold text-white">
                                  <span>{number}</span>
                                  <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white font-semibold">{number}</div>
                                </div>

                                <div className="flex flex-col flex-grow ml-2 text-left">
                                  <span className="font-semibold text-white">{name}</span>
                                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-0.5">
                                    <span>J: {jockey}</span>
                                    <span>T: {trainer}</span>
                                    <span>F: {form}</span>
                                  </div>
                                </div>

                                <div className="ml-auto font-semibold text-green-400 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md">
                                  {odds}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
                <div className="mt-6 flex justify-center">
                  <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-cyan-400 hover:text-black transition">
                    View More Horse Races
                  </button>
                </div>
              </div>
            )}
          </section>
<section className="w-full max-w-3xl border border-white bg-[#0a1024] rounded-lg mt-10">
  <div className="flex items-center justify-between px-4 py-3 text-left font-semibold border-b border-white">
    <h2 className="text-2xl font-bold text-white">🐕 Greyhound Racing</h2>
  </div>

  <div className="p-4 space-y-6">
    {greyhoundRaces.map(({ track, raceTime, raceName, runners }, i) => (
      <div key={i} className="border border-white rounded-lg bg-[#0a1024] p-4 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-bold text-base">{track} - {raceName}</h3>
          <span className="text-sm text-white font-medium">{raceTime}</span>
        </div>

        <div className="divide-y divide-gray-700">
          {runners.map(({ number, name, form, odds }, idx) => (
            <div key={idx} className="flex items-center py-3 text-sm">
              <div className="flex items-center gap-3 w-10 font-bold text-white">
                <span>{number}</span>
                <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white font-semibold">{number}</div>
              </div>

              <div className="flex flex-col flex-grow ml-2 text-left">
                <span className="font-semibold text-white">{name}</span>
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-0.5">
                  <span>F: {form}</span>
                </div>
              </div>

              <div className="ml-auto font-semibold text-green-400 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md">
                {odds}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        </main>
        <Footer />
      </div>
    </>
  );
}
