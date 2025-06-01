"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

import PromoCarousel from "../components/PromoCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import LiveGamesFeed from "../components/LiveGamesFeed";
import HeaderLayout from "../components/Header";
import Footer from "../components/Footer";
import { horseRaces } from "../data/horseRaces";
import { useBetSlip } from "../context/BetSlipContext";

const betAccumulators = [
  { teams: "Manchester City & Liverpool & Chelsea", odds: 12.5 },
  { teams: "PSG & Barcelona & Real Madrid", odds: 15.2 },
  { teams: "Bayern Munich & Juventus & AC Milan", odds: 14.1 },
];

type Match = { teams: string; time: string; odds: { home: number; draw?: number; away: number } };
type LeagueBlock = { league: string; countryCode: string; leagueLogo: string; matches: Match[] };
type BasketballBlock = { league: string; matches: Match[] };

export default function Home({ todayMatches, basketballMatches }: { todayMatches: LeagueBlock[], basketballMatches: BasketballBlock[] }) {
  const [openLeague, setOpenLeague] = useState<string | null>(null);
  const [openBasketball, setOpenBasketball] = useState(false);
  const [openHorseRacing, setOpenHorseRacing] = useState(false);
  const { addSelection, removeSelection, selections } = useBetSlip();

  const toggleLeague = (leagueName: string) => {
    setOpenLeague((prev) => (prev === leagueName ? null : leagueName));
  };

  const toggleAccumulator = (id: string, teams: string, odds: number) => {
    const exists = selections.some((sel) => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({ id, event: teams, type: "Accumulator", odds });
    }
  };

  return (
    <>
      <Head><title>Oh My Sportsbets</title></Head>
      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <HeaderLayout />
        <main className="flex-1 px-4 py-4 pb-24 flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <PromoCarousel />
          <SportsCarousel />
          <PowerPriceCarousel />

          {/* BASKETBALL */}
          <section className="w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
            <button onClick={() => setOpenBasketball(!openBasketball)} className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg">
              <Image src="/leagues/nba.png" alt="NBA" width={32} height={32} className="object-contain" unoptimized />
              <span className="flex items-center gap-2">
                NBA Games <Image src="https://flagcdn.com/w20/us.png" alt="USA Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
              </span>
              <svg className={`ml-auto h-5 w-5 transition-transform ${openBasketball ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openBasketball && (
              <div id="basketball-matches" className="mt-3 space-y-4 px-4 pb-6 border-t border-gray-700 rounded-b-lg">
                {basketballMatches.map((block, i) => (
                  <div key={i}>
                    <h3 className="text-gold font-semibold mb-3 text-lg">{block.league}</h3>
                    <div className="space-y-3">
                      {block.matches.map((match, j) => (
                        <div key={j} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon">
                          <div>
                            <div className="text-sm font-semibold">{match.teams}</div>
                            <div className="text-xs text-gray-400">Tip-off: {match.time}</div>
                          </div>
                          <div className="flex gap-4">
                            <button onClick={() => addSelection({ id: `${match.teams}-home`, event: match.teams, type: "Home", odds: match.odds.home })}
                              className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-black">
                              {match.odds?.home?.toFixed(2) ?? "—"}
                            </button>
                            <button onClick={() => addSelection({ id: `${match.teams}-away`, event: match.teams, type: "Away", odds: match.odds.away })}
                              className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-black">
                              {match.odds?.away?.toFixed(2) ?? "—"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* FOOTBALL */}
          <section className="w-full max-w-3xl space-y-4">
            <h2 className="text-lg font-bold text-white mb-3">Today’s Football Matches</h2>
            <div className="space-y-3 w-full">
              {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
                <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024]">
                  <button onClick={() => toggleLeague(league)} className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg">
                    <Image src={leagueLogo} alt={`${league} logo`} width={32} height={32} className="object-contain" unoptimized />
                    <span className="flex items-center gap-2">{league}
                      <Image src={`https://flagcdn.com/w20/${countryCode}.png`} alt={`${countryCode} flag`} width={20} height={14} className="object-contain rounded-sm" unoptimized />
                    </span>
                    <svg className={`ml-auto h-5 w-5 transition-transform ${openLeague === league ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openLeague === league && (
                    <div id={`${league}-matches`} className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-700 rounded-b-lg">
                      {matches.map(({ teams, time, odds }, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon">
                          <div>
                            <div className="text-sm font-semibold">{teams}</div>
                            <div className="text-xs text-gray-400">Kickoff: {time}</div>
                          </div>
                          <div className="flex gap-3">
                            <button onClick={() => addSelection({ id: `${teams}-home`, event: teams, type: "Home", odds: odds.home })}
                              className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-black">
                              {odds?.home?.toFixed(2)}
                            </button>
                            <button onClick={() => addSelection({ id: `${teams}-draw`, event: teams, type: "Draw", odds: odds.draw! })}
                              className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-black">
                              {odds?.draw?.toFixed(2)}
                            </button>
                            <button onClick={() => addSelection({ id: `${teams}-away`, event: teams, type: "Away", odds: odds.away })}
                              className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-black">
                              {odds?.away?.toFixed(2)}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>






                  {/* BET BUILDER */}
          <section className="mt-6 w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-0">
            <div className="max-w-md mx-auto">
              <BetBuilderCarousel />
            </div>
          </section>

          {/* POPULAR ACCUMULATORS */}
          <section className="mt-12 w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-6">
            <h2 className="text-lg font-bold text-white mb-4">Popular Accumulators</h2>

            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              adaptiveHeight={true}
              className="text-center mx-auto max-w-md"
            >
              {betAccumulators.map(({ teams, odds }, idx) => {
                const isSelected = selections.some(sel => sel.id === teams);
                return (
                  <div
                    key={idx}
                    className="bg-[#0a1024] p-6 rounded-lg border border-gray-700 hover:shadow-neon transition-shadow duration-300 max-w-md mx-auto"
                  >
                    <div className="text-lg font-semibold text-white">{teams}</div>
                    <button
                      onClick={() => toggleAccumulator(teams, teams, odds)}
                      className={`mt-2 px-6 py-2 text-sm font-bold shadow border rounded 
                        ${isSelected ? "bg-white text-cyan-700 border-white" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-cyan-700 transition"}`}
                    >
                      Odds: {odds}
                    </button>
                  </div>
                );
              })}
            </Slider>
          </section>

          {/* LIVE GAMES FEED */}
          <LiveGamesFeed />

          {/* HORSE RACING */}
          <h2 className="text-lg font-bold text-white mb-3 mt-8">Today’s Horse Racing</h2>
          <section className="mt-12 w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
            <button onClick={() => setOpenHorseRacing(!openHorseRacing)}
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg">
              <span className="flex items-center gap-2">
                Horse Racing Courses
                <Image src="https://flagcdn.com/w20/gb.png" alt="UK Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
                <Image src="https://flagcdn.com/w20/ie.png" alt="Ireland Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
              </span>
              <svg className={`ml-auto h-5 w-5 transition-transform ${openHorseRacing ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openHorseRacing && (
              <div id="horse-racing-races" className="mt-4 space-y-6 px-4 pb-4 border-t border-gray-700 rounded-b-lg">
                {Object.entries(
                  horseRaces.reduce((acc: Record<string, typeof horseRaces>, race) => {
                    if (!acc[race.track]) acc[race.track] = [];
                    acc[race.track].push(race);
                    return acc;
                  }, {})
                ).map(([track, races], i) => (
                  <details key={i} className="border border-gray-700 rounded-lg bg-[#0a1024]">
                    <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg">
                      <span className="flex items-center gap-2">
                        {track}
                        <Image src={`https://flagcdn.com/w20/${races[0].countryCode}.png`} alt="flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
                      </span>
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
                                  <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white">{number}</div>
                                </div>

                                <div className="flex flex-col flex-grow ml-2 text-left">
                                  <span className="font-semibold text-white">{name}</span>
                                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-0.5">
                                    <span>J: {jockey}</span>
                                    <span>T: {trainer}</span>
                                    <span>F: {form}</span>
                                  </div>
                                  <button className="text-xs text-electricCyan mt-1 underline hover:text-white transition">
                                    More information
                                  </button>
                                </div>

                                <div className="ml-auto font-semibold text-green-500 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md">
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
              </div>
            )}
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
