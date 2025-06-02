"use client";

import { useState } from "react";
import { liveGames } from "../data/liveGames";
import { useBetSlip } from "../context/BetSlipContext";
import Link from "next/link";

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

const fractionToDecimal = (fraction: string): number => {
  if (fraction.includes("/")) {
    const [num, denom] = fraction.split("/").map(Number);
    return num / denom + 1;
  }
  return parseFloat(fraction);
};

// Group games by sport
const grouped = liveGames.reduce((acc: Record<string, Game[]>, game: Game) => {
  if (!acc[game.sport]) acc[game.sport] = [];
  acc[game.sport].push(game);
  return acc;
}, {});

export default function LiveGamesFeed() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(Object.keys(grouped).map((sport) => [sport, false]))
  );

  const { selections, addSelection, removeSelection } = useBetSlip();

  const toggleSection = (sport: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  const handleToggleBet = (id: string, event: string, type: string, odds: string) => {
    const exists = selections.find(sel => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({
        id,
        event,
        type,
        odds: fractionToDecimal(odds)
      });
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mb-10">
      <h2 className="text-white text-lg font-bold mb-3">In-Play Sports</h2>

      {Object.entries(grouped).map(([sport, games]) => (
        <div key={sport} className="mb-4 border border-gray-700 rounded-lg bg-[#0a1024]">
          <button
            onClick={() => toggleSection(sport)}
            className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
          >
            <span className="flex items-center gap-2">
              <span>{sportEmojis[sport] || "🎮"} {sport}</span>
            </span>
          </button>

          {openSections[sport] && (
            <div className="px-4 pb-4 space-y-4 border-t border-gray-700 rounded-b-lg bg-[#0a1024]">
              {games.map((game, idx) => (
                <div key={idx} className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-semibold text-white">{game.match}</div>
                      <div className="text-xs text-gray-400">Time: {game.time}&apos;</div>
                    </div>
                    <div className="flex gap-3 text-sm font-medium text-center">
                      {(["home", "draw", "away"] as const).map(type => {
                        const price = game.odds?.[type] ?? "—";
                        const id = `${game.match}-${type}`;
                        const selected = selections.some(sel => sel.id === id);
                        return (
                          <div key={type} className="flex flex-col items-center">
                            <button
                              onClick={() => handleToggleBet(id, game.match, type, price)}
                              className={`px-3 py-1 rounded border ${selected ? "border-[#00ffd5] bg-white text-black" : "border-white bg-gray-900 text-white hover:bg-white hover:text-black"}`}
                              disabled={price === "—"}
                            >
                              {price}
                            </button>
                            <span className="text-xs mt-1">{type === "draw" ? "Draw" : type.charAt(0).toUpperCase() + type.slice(1)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* ✅ View In-Play Button Per Sport */}
          <div className="pt-2 flex justify-center">
  <Link href={`/sports/inplay/${sport.toLowerCase().replace(/\s+/g, "-")}`}>
    <button className="text-sm px-4 py-1 border border-white text-white rounded-full hover:bg-cyan-600 transition">
      View In-Play {sport}
    </button>
  </Link>
</div>

            </div>
          )}
        </div>
      ))}

      <div className="mt-6 flex justify-center">
        <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          View All In-Play Markets
        </button>
      </div>
    </section>
  );
}
