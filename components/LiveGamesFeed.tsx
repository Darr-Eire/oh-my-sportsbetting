"use client";
import { useState } from "react";
import { liveGames } from "../data/liveGames";

// Emojis for known sports
const sportEmojis: Record<string, string> = {
  Football: "⚽",
  Basketball: "🏀",
  Tennis: "🎾",
  Baseball: "⚾",
  // Extend as needed
};

// Group live games by sport
const grouped = liveGames.reduce((acc, game) => {
  if (!acc[game.sport]) acc[game.sport] = [];
  acc[game.sport].push(game);
  return acc;
}, {} as Record<string, typeof liveGames>);

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
    <section className="w-full max-w-4xl mx-auto mb-10">
      <h2 className="text-white text-3xl font-bold mb-6 px-4">In-Play Sports</h2>

      {Object.entries(grouped).map(([sport, games]) => (
        <div key={sport} className="mb-8">
          <div className="bg-[#0a1024] rounded-lg border border-gray-700 shadow-sm overflow-hidden">
            {/* Toggle Header */}
            <button
              onClick={() => toggleSection(sport)}
              className="w-full px-4 py-3 flex justify-between items-center text-left bg-[#10182f] text-white font-semibold text-lg hover:bg-[#111c44] transition"
            >
              <span>{sportEmojis[sport] || "🎮"} {sport}</span>
              <span>{/* No icon per your request */}</span>
            </button>

            {/* Game Cards */}
            {openSections[sport] && (
              <div className="px-4 py-4 flex flex-col gap-4 bg-[#0a0a23]">
                {games.map((game, idx) => (
                  <div
                    key={idx}
                    className="bg-[#10182f] border border-gray-600 hover:border-electricCyan p-4 rounded-lg transition"
                  >
                    {/* Match Info */}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-medium">{game.match}</h4>
                      <span className="text-sm text-cyan-400">{game.time}</span>
                    </div>

                    {/* Odds Grid */}
                    <div className="grid grid-cols-3 gap-4 mt-2 text-center text-sm text-white font-semibold">
                      <div className="bg-[#0f1c34] py-2 rounded-lg border border-gray-700">
                        {game.odds?.home ?? "--"}
                        <div className="text-xs text-gray-400">Home</div>
                      </div>
                      <div className="bg-[#0f1c34] py-2 rounded-lg border border-gray-700">
                        {game.odds?.draw ?? "--"}
                        <div className="text-xs text-gray-400">Draw</div>
                      </div>
                      <div className="bg-[#0f1c34] py-2 rounded-lg border border-gray-700">
                        {game.odds?.away ?? "--"}
                        <div className="text-xs text-gray-400">Away</div>
                      </div>
                    </div>

                    {/* View More Bets */}
                    <div className="mt-4 flex justify-center">
                      <button className="px-5 py-2 rounded-full bg-[#0f1a3c] text-white text-sm font-medium border border-cyan-400 hover:bg-cyan-600 transition">
                        View More Bets
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
