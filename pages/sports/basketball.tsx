"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { basketballGames } from "../../data/basketballGames";

export default function BasketballPage() {
  const [activeTab, setActiveTab] = useState<"Today" | "Tomorrow">("Today");

  const leagueLogos: Record<string, string> = {
    NBA: "/leagues/nba.png",
    EuroLeague: "/leagues/euroleague.png",
    EuroCup: "/leagues/eurocup.png",
    NCAA: "/leagues/ncaa.png"
  };

  const groupedGames = basketballGames[activeTab].reduce((acc, match) => {
    if (!acc[match.league]) acc[match.league] = [];
    acc[match.league].push(match);
    return acc;
  }, {} as Record<string, typeof basketballGames.Today>);

  return (
    <>
      <Head>
        <title>Basketball – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-3xl font-bold">Basketball Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            NBA, EuroLeague & NCAA fixtures — odds updated for every tip-off.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["us", "eu"].map((code) => (
              <Image
                key={code}
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={`${code} flag`}
                width={40}
                height={30}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          {["Today", "Tomorrow"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Today" | "Tomorrow")}
              className={`px-4 py-2 rounded-md font-semibold ${
                activeTab === tab ? "bg-yellow-400 text-black" : "bg-[#1a1a3d] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* League Dropdowns */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {Object.entries(groupedGames).map(([league, matches], idx) => (
            <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md overflow-hidden group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3 text-lg">
                  <Image
                    src={leagueLogos[league] || "/leagues/default.png"}
                    alt={`${league} logo`}
                    width={30}
                    height={30}
                    className="rounded"
                  />
                  <span>{league}</span>
                  <Image
                    src={`https://flagcdn.com/w20/${matches[0].countryCode}.png`}
                    alt="flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                    unoptimized
                  />
                </div>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {matches.map((match, i) => (
                  <div key={i} className="border border-white rounded-md bg-[#10182f] px-4 py-4 flex flex-col gap-4 shadow">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center gap-2 font-semibold text-white">
                        <Image
                          src={`https://flagcdn.com/w20/${match.countryCode}.png`}
                          alt="flag"
                          width={20}
                          height={14}
                          className="rounded-sm"
                          unoptimized
                        />
                        {match.game}
                      </div>
                      <div>{match.tipOff}</div>
                    </div>

                    <div className="flex justify-center gap-8">
                      <div className="bg-green-900 text-green-300 text-sm font-bold py-2 px-4 rounded shadow border border-green-400 text-center">
                        Home: {match.odds.home}
                      </div>
                      <div className="bg-green-900 text-green-300 text-sm font-bold py-2 px-4 rounded shadow border border-green-400 text-center">
                        Away: {match.odds.away}
                      </div>
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

