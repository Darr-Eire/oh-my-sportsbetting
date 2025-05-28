// pages/match/[slug].tsx
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Lineups from "../../components/Lineups";
import PitchView from "../../components/PitchView";
import Footer from "../../components/Footer"; // ✅ IMPORT FOOTER

const dummyMatchData = {
  slug: "manchester-city-vs-arsenal",
  teams: "Manchester City vs Arsenal",
  homeTeam: "Manchester City",
  awayTeam: "Arsenal",
  time: "12:30",
  date: "Saturday, May 25",
  stadium: "Etihad Stadium",
  homeIcon: "/man-city.png",
  awayIcon: "/arsenal.png",
  odds: {
    "Full Time Result": { Home: 1.90, Draw: 3.40, Away: 3.80 },
    "Double Chance": { "Home or Draw": 1.25, "Draw or Away": 1.60, "Home or Away": 1.45 },
    "Both Teams To Score": { Yes: 1.75, No: 2.05 },
    "Total Goals Over/Under": {
      "Over 0.5": 1.10, "Under 0.5": 8.00,
      "Over 1.5": 1.30, "Under 1.5": 3.50,
      "Over 2.5": 1.85, "Under 2.5": 2.00,
      "Over 3.5": 2.75, "Under 3.5": 1.50,
      "Over 4.5": 4.50, "Under 4.5": 1.25,
    },
    "Correct Score": {
      "0-0": 9.0, "1-0": 7.0, "2-0": 8.0, "2-1": 8.5,
      "1-1": 6.5, "3-1": 14.0, "2-2": 10.0, "1-2": 12.0,
    },
    "Half Time Result": { Home: 2.20, Draw: 2.10, Away: 3.00 },
    "Half Time/Full Time": {
      "Home/Home": 2.90, "Draw/Home": 4.50, "Away/Home": 20.0,
      "Draw/Draw": 5.00, "Home/Draw": 12.0, "Away/Draw": 16.0,
    },
    "1st Goal": { "Home": 1.75, "Away": 2.10, "No Goal": 9.00 },
    "Clean Sheet": {
      "Home Team Clean Sheet": 2.10,
      "Away Team Clean Sheet": 2.30,
      "No Clean Sheet": 1.40,
    },
    "Both Teams To Score in 1st Half": { Yes: 3.60, No: 1.25 },
    "Winning Margin": {
      "Home by 1": 3.75, "Home by 2": 5.00, "Away by 1": 4.50, "Draw": 3.40,
    },
    "Exact Total Goals": {
      "0": 8.00, "1": 5.00, "2": 3.50, "3": 3.75, "4": 5.50, "5+": 8.50,
    },
    "Handicap Betting": {
      "Man City -1": 2.50, "Arsenal +1": 1.80,
      "Man City -1.5": 3.20, "Arsenal +1.5": 1.50,
    },
    "To Win Either Half": { "Man City": 1.45, "Arsenal": 2.05 },
    "To Score in Both Halves": { "Man City": 2.20, "Arsenal": 3.50 },
    "1st Half Over/Under": {
      "Over 0.5": 1.30, "Over 1.5": 2.50, "Under 1.5": 1.40,
    },
    "Total Corners": {
      "Over 8.5": 1.70, "Over 9.5": 1.95, "Over 10.5": 2.25,
      "Under 8.5": 2.10, "Under 9.5": 1.85, "Under 10.5": 1.60,
    },
    "Total Cards": {
      "Over 3.5": 1.60, "Over 4.5": 1.90, "Over 5.5": 2.40,
      "Under 3.5": 2.25,
    },
    "1st Half BTTS": { Yes: 3.25, No: 1.30 },
    "2nd Half BTTS": { Yes: 2.60, No: 1.50 },
    "Draw No Bet": { "Home": 1.60, "Away": 2.20 },
    "Team To Win To Nil": { "Man City": 3.10, "Arsenal": 4.60 },
  },
  previousMatches: [
    "Man City 3-1 Arsenal",
    "Arsenal 2-2 Man City",
    "Man City 2-0 Arsenal",
  ],
};

export default function MatchDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const match = dummyMatchData;
  const [activeMarket, setActiveMarket] = useState("");
  const [view, setView] = useState<"markets" | "lineups" | "pitch">("markets");

  const toggleAccordion = (key: string) => {
    setActiveMarket((prev) => (prev === key ? "" : key));
  };

  return (
    <>
      <Head>
        <title>{match.teams} – Match Details</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Match Header */}
          <div className="flex items-center justify-center gap-4">
            <img src={match.homeIcon} alt="Home" className="w-12 h-12" />
            <div className="text-center">
              <h1 className="text-xl font-bold text-gold">{match.teams}</h1>
              <p className="text-sm text-gray-400">{match.date} – {match.time}</p>
              <p className="text-sm text-gray-500">{match.stadium}</p>
            </div>
            <img src={match.awayIcon} alt="Away" className="w-12 h-12" />
          </div>

          {/* Previous Matches */}
          <div className="bg-[#12122b] border border-[#2a2a3d] rounded-xl p-4 shadow-inner">
            <h2 className="text-gold font-semibold text-lg text-center mb-3">Previous Meetings</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 text-center">
              {match.previousMatches.map((result, i) => {
                const [home, score, away] = result.split(/(\d+-\d+)/);
                return (
                  <div key={i} className="bg-[#1c1c3b] p-3 rounded-lg border border-[#2d2d4d]">
                    <div className="text-white font-semibold">{home.trim()}</div>
                    <div className="text-yellow-300 text-xl font-bold">{score}</div>
                    <div className="text-white font-semibold">{away.trim()}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tabs */}
          <div className="text-center mt-4 space-x-3">
            {["markets", "lineups", "pitch"].map((tab) => (
              <button
                key={tab}
                className={`text-sm px-4 py-2 rounded ${
                  view === tab ? "bg-cyan-500 text-white" : "text-cyan-300 border border-cyan-500"
                }`}
                onClick={() => setView(tab as any)}
              >
                {tab === "markets" ? "Betting Markets" : tab === "lineups" ? "View Lineups" : "Pitch View"}
              </button>
            ))}
          </div>

          {/* Content Views */}
          {view === "markets" && (
            <div>
              <h2 className="text-lg font-bold text-electricCyan mb-4 text-center">All Betting Markets</h2>
              {Object.entries(match.odds).map(([marketName, options], idx) => (
                <div key={idx} className="mb-4 bg-[#12122b] border border-[#2a2a3d] rounded-lg">
                  <button
                    className="w-full text-left px-4 py-3 font-semibold text-yellow-300 hover:bg-[#1c1c3b] transition"
                    onClick={() => toggleAccordion(marketName)}
                  >
                    {marketName}
                  </button>
                  {activeMarket === marketName && (
                    <div className="px-4 pb-4 grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(options).map(([label, odd], subIdx) => (
                        <button
                          key={subIdx}
                          className="bg-[#1e1e36] hover:bg-[#2a2a4a] text-sm px-4 py-2 rounded text-white border border-[#2a2a3d]"
                        >
                          {label}{" "}
                          <span className="font-bold">
                            {parseFloat(odd.toString()).toFixed(2)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {view === "lineups" && <Lineups homeTeam={match.homeTeam} awayTeam={match.awayTeam} />}
          {view === "pitch" && <PitchView />}
        </div>

        {/* ✅ FOOTER ADDED HERE */}
        <Footer />
      </div>
    </>
  );
}
