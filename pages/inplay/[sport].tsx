"use client";

import { useRouter } from "next/router";
import { liveGames } from "@/data/liveGames";
import { useBetSlip } from "@/context/BetSlipContext";
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

const fractionToDecimal = (fraction: string): number => {
  if (fraction.includes("/")) {
    const [num, denom] = fraction.split("/").map(Number);
    return num / denom + 1;
  }
  return parseFloat(fraction);
};

export default function InPlaySportPage() {
  const router = useRouter();
  const { sport } = router.query;

  const { selections, addSelection, removeSelection } = useBetSlip();

  const formattedSport = (sport as string)?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const sportGames = liveGames.filter(game => game.sport.toLowerCase() === formattedSport?.toLowerCase());

  if (!sportGames.length) {
    return (
      <div className="min-h-screen bg-[#0a1024] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">No Live {formattedSport} Games</h1>
        <Link href="/" className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          Back to In-Play Hub
        </Link>
      </div>
    );
  }

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
    <div className="min-h-screen bg-[#0a1024] text-white p-6">
      <h1 className="text-2xl font-bold text-center mb-8">In-Play: {formattedSport}</h1>

      {sportGames.map((game, idx) => (
        <div key={idx} className="bg-[#12182f] p-4 mb-6 rounded-lg border border-white">
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="font-semibold text-white">{game.match}</div>
              <div className="text-xs text-gray-400">Time: {game.time}&apos;</div>
            </div>

            <div className="flex gap-3 text-sm">
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

      <div className="flex justify-center mt-8">
        <Link href="/" className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          Back to In-Play Hub
        </Link>
      </div>
    </div>
  );
}
