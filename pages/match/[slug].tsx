import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import Lineups from "../../components/Lineups";
import PitchView from "../../components/PitchView";
import Footer from "../../components/Footer";

const dummyMatchData = {
  // Your full dummy match data here
};

export default function MatchDetail() {
  const router = useRouter();
  const { slug } = router.query; // Warning: slug is assigned but unused, keep if needed later

  const match = dummyMatchData;

  const [activeMarket, setActiveMarket] = useState<string>("");
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
            <Image src={match.homeIcon} alt={`${match.homeTeam} logo`} width={48} height={48} />
            <div className="text-center">
              <h1 className="text-xl font-bold text-gold">{match.teams}</h1>
              <p className="text-sm text-gray-400">{match.date} – {match.time}</p>
              <p className="text-sm text-gray-500">{match.stadium}</p>
            </div>
            <Image src={match.awayIcon} alt={`${match.awayTeam} logo`} width={48} height={48} />
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
                onClick={() => setView(tab as "markets" | "lineups" | "pitch")}
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
                          {label} <span className="font-bold">{Number(odd).toFixed(2)}</span>
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

        <Footer />
      </div>
    </>
  );
}
