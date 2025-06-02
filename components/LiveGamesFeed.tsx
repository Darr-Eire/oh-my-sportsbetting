"use client";

import { useState } from "react";
import { liveGames } from "../data/liveGames";

type OddsType = {
  home: string;
  draw?: string;
  away: string;
};

type Game = {
  sport: string;
  match: string;
  time: string;
  status: string;
  odds?: OddsType;
};

const sportEmojis: Record<string, string> = {
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Baseball: "⚾",
  "Horse Racing": "🐎",
  eSports: "🎮",
  UFC: "🥊",
  "Greyhound Racing": "🐕",
  Boxing: "🥊",
  Cricket: "🏏",
  Rugby: "🏉",
  Formula1: "🏎️",
  Cycling: "🚴",
  "Table Tennis": "🏓",
  Volleyball: "🏐",
};

// Group the games by sport
const grouped = liveGames.reduce((acc: Record<string, Game[]>, game: Game) => {
  if (!acc[game.sport]) acc[game.sport] = [];
  acc[game.sport].push(game);
  return acc;
}, {});

export default function LiveGamesFeed() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(Object.keys(grouped).map((sport) => [sport, false]))
  );

  const toggleSection = (sport: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  return (
    <section className="w-full max-w-3xl mx-auto mb-10">
      <h2 className="text-white text-lg font-bold mb-3">In-Play Sports</h2>

      {Object.entries(grouped).map(([sport, games]) => (
        <div key={sport} className="mb-4 border border-gray-700 rounded-lg bg-[#0a1024]">
          <button
            onClick={() => toggleSection(sport)}
            className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
            aria-expanded={openSections[sport]}
            aria-controls={`live-${sport}`}
          >
            <span className="flex items-center gap-2">
              <span>{sportEmojis[sport] || "🎮"} {sport}</span>
            </span>
          </button>

          {openSections[sport] && (
            <div
              id={`live-${sport}`}
              className="px-4 pb-4 space-y-4 border-t border-gray-700 rounded-b-lg bg-[#0a1024]"
            >
              {games.map((game, idx) => (
                <div key={idx}>
                  <div className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-semibold text-white">{game.match}</div>
                        <div className="text-xs text-gray-400">Time: {game.time}&apos;</div>
                      </div>
                      <div className="flex gap-3 text-sm font-medium text-center">
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                            {game.odds?.home ?? "—"}
                          </div>
                          <span className="text-xs text-softText mt-1">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                            {game.odds?.draw ?? "—"}
                          </div>
                          <span className="text-xs text-softText mt-1">Draw</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                            {game.odds?.away ?? "—"}
                          </div>
                          <span className="text-xs text-softText mt-1">Away</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-center">
                    <button className="text-sm px-4 py-1 border border-white text-white rounded-full hover:bg-cyan-600 transition">
                      View More Bets
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="mt-6 flex justify-center">
        <button className="text-sm px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
          View All In-Play Markets
        </button>
      </div>
    </section>
  );
}
