import Link from "next/link";

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

  return (
    <Link href={`/match/${slug || ""}`}>
      <div className="cursor-pointer bg-deepCard p-3 rounded-lg border border-white hover:scale-[1.01] transition-transform duration-150">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          {/* Match Info */}
          <div>
            <div className="text-sm font-semibold text-white">{teams}</div>
            <div className="text-xs text-softText mt-0.5">
              Kickoff: {time || "TBD"}
            </div>
          </div>

          {/* Odds */}
          {odds?.home && odds?.draw && odds?.away ? (
            <div className="flex gap-1 flex-wrap">
              <button className="border border-white text-white bg-transparent hover:bg-white hover:text-cyan-700 px-3 py-1 rounded text-xs font-medium transition">
                Home {odds.home.toFixed(2)}
              </button>
              <button className="border border-white text-white bg-transparent hover:bg-white hover:text-cyan-700 px-3 py-1 rounded text-xs font-medium transition">
                Draw {odds.draw.toFixed(2)}
              </button>
              <button className="border border-white text-white bg-transparent hover:bg-white hover:text-cyan-700 px-3 py-1 rounded text-xs font-medium transition">
                Away {odds.away.toFixed(2)}
              </button>
            </div>
          ) : (
            <div className="text-softText italic">Odds unavailable</div>
          )}
        </div>
      </div>
    </Link>
  );
}
