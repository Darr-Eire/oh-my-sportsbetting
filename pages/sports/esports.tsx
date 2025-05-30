"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function EsportsPage() {
  const [activeTab, setActiveTab] = useState<"Today" | "Tomorrow">("Today");

  const esportsMatches = {
    Today: [
      {
        tournament: "CS:GO Major",
        countryCode: "eu",
        matchTime: "18:00",
        match: "NAVI vs FaZe",
        odds: { home: "1.80", away: "2.10" }
      },
      {
        tournament: "League of Legends Worlds",
        countryCode: "kr",
        matchTime: "20:00",
        match: "T1 vs G2 Esports",
        odds: { home: "1.50", away: "2.50" }
      },
    ],
    Tomorrow: [
      {
        tournament: "DOTA 2 The International",
        countryCode: "us",
        matchTime: "17:30",
        match: "Team Spirit vs EG",
        odds: { home: "1.90", away: "2.00" }
      },
      {
        tournament: "Valorant Champions",
        countryCode: "jp",
        matchTime: "19:00",
        match: "Fnatic vs Paper Rex",
        odds: { home: "1.70", away: "2.30" }
      },
    ]
  };

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
            Real-time odds for CS:GO, Dota2, LoL, Valorant and more.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["eu", "kr", "us", "jp"].map((code) => (
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
          {esportsMatches[activeTab].map((match, i) => (
            <div key={i} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md">
              <div className="flex justify-between items-center px-4 py-3 font-semibold bg-[#10182f] border-b border-white">
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://flagcdn.com/w20/${match.countryCode}.png`}
                    alt="flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                    unoptimized
                  />
                  <span>{match.tournament}</span>
                </div>
                <span className="text-sm text-gray-400">{match.matchTime}</span>
              </div>

              <div className="p-4 flex flex-col gap-4">
                <div className="text-center text-white text-lg font-bold">{match.match}</div>
                <div className="flex justify-center gap-8">
                  <div className="bg-green-900 text-green-300 text-sm font-bold py-2 px-4 rounded shadow border border-green-400 text-center">
                    Home: {match.odds.home}
                  </div>
                  <div className="bg-green-900 text-green-300 text-sm font-bold py-2 px-4 rounded shadow border border-green-400 text-center">
                    Away: {match.odds.away}
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
