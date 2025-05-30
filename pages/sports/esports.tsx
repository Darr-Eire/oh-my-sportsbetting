"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

// Dummy eSports data structure (you can replace later)
const esportsGames = {
  Today: [
    {
      league: "CS:GO Blast Premier",
      countryCode: "eu",
      startTime: "16:00",
      match: "NAVI vs FaZe Clan",
      odds: { home: "1.80", away: "2.00" }
    },
    {
      league: "League of Legends LEC",
      countryCode: "eu",
      startTime: "18:00",
      match: "G2 Esports vs Fnatic",
      odds: { home: "1.70", away: "2.10" }
    },
    {
      league: "Dota 2 ESL One",
      countryCode: "us",
      startTime: "20:00",
      match: "Team Liquid vs Evil Geniuses",
      odds: { home: "1.65", away: "2.20" }
    }
  ],
  Tomorrow: [
    {
      league: "Valorant Masters",
      countryCode: "us",
      startTime: "17:00",
      match: "Sentinels vs Fnatic",
      odds: { home: "1.90", away: "1.95" }
    },
    {
      league: "Overwatch League",
      countryCode: "us",
      startTime: "19:00",
      match: "Dallas Fuel vs San Francisco Shock",
      odds: { home: "2.00", away: "1.80" }
    }
  ]
};

export default function eSportsPage() {
  const [activeTab, setActiveTab] = useState<"Today" | "Tomorrow">("Today");

  return (
    <>
      <Head>
        <title>eSports – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-3xl font-bold">eSports Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            CS:GO, LoL, Dota2, Valorant & more — live matches and odds.
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

        {/* Matches */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {esportsGames[activeTab].map((game, i) => (
            <div key={i} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md">
              <div className="flex justify-between items-center px-4 py-3 font-semibold bg-[#10182f] border-b border-white">
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://flagcdn.com/w20/${game.countryCode}.png`}
                    alt="flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                  <span>{game.league}</span>
                </div>
                <span className="text-sm text-gray-400">{game.startTime}</span>
              </div>

              <div className="p-4 flex flex-col gap-4">
                <div className="text-center text-white text-lg font-bold">{game.match}</div>
                <div className="flex justify-center gap-8">
                  <div className="bg-[#0a1024] text-white text-sm font-bold py-2 px-4 rounded shadow border border-white text-center">
                    Home: {game.odds.home}
                  </div>
                  <div className="bg-[#0a1024] text-white text-sm font-bold py-2 px-4 rounded shadow border border-white text-center">
                    Away: {game.odds.away}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
