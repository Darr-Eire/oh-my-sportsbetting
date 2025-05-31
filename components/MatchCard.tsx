"use client";

import Link from "next/link";
import { useBetSlip } from "../context/BetSlipContext";

type MatchCardProps = {
  slug: string;
  teams: string;
  time: string;
  odds?: {
    home: number;
    draw: number;
    away: number;
  };
};

export default function MatchCard({ match }: { match: MatchCardProps }) {
  const { slug, teams, time, odds } = match || {};
  const { addSelection, selections } = useBetSlip();

  const handleAdd = (type: string, oddsValue: number) => {
    const id = `${slug}-${type.toLowerCase()}`;
    addSelection({
      id,
      event: teams,
      type,
      odds: oddsValue,
    });
  };

  const isSelected = (type: string) =>
    selections.some(sel => sel.id === `${slug}-${type.toLowerCase()}`);

  return (
    <div className="cursor-pointer bg-deepCard p-3 rounded-lg border border-white hover:scale-[1.01] transition-transform duration-150">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div>
          <div className="text-sm font-semibold text-white">{teams}</div>
          <div className="text-xs text-softText mt-0.5">
            Kickoff: {time || "TBD"}
          </div>
        </div>

        {odds ? (
          <div className="flex gap-2 text-center text-xs">
            <OddsButton
              label="Home"
              odds={odds.home}
              onClick={() => handleAdd("Home", odds.home)}
              isSelected={isSelected("Home")}
            />
            <OddsButton
              label="Draw"
              odds={odds.draw}
              onClick={() => handleAdd("Draw", odds.draw)}
              isSelected={isSelected("Draw")}
            />
            <OddsButton
              label="Away"
              odds={odds.away}
              onClick={() => handleAdd("Away", odds.away)}
              isSelected={isSelected("Away")}
            />
          </div>
        ) : (
          <div className="text-softText italic">Odds unavailable</div>
        )}
      </div>

      <div className="mt-2 text-right">
        <Link href={`/match/${slug}`}>
          <span className="text-cyan-400 text-xs hover:underline">View Match</span>
        </Link>
      </div>
    </div>
  );
}

type OddsButtonProps = {
  label: string;
  odds: number;
  onClick: () => void;
  isSelected: boolean;
};

function OddsButton({ label, odds, onClick, isSelected }: OddsButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`border px-3 py-1 rounded font-medium transition ${
          isSelected
            ? "bg-white text-cyan-700 border-white"
            : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
        }`}
      >
        {odds.toFixed(2)}
      </button>
      <span className="text-softText mt-1">{label}</span>
    </div>
  );
}
