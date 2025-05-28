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
      <div className="cursor-pointer bg-deepCard p-4 rounded-xl border border-cyan-500 shadow-neon hover:scale-[1.02] transition-transform duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          {/* Match Info */}
          <div>
            <div className="text-base font-semibold text-white">{teams}</div>
            <div className="text-xs text-softText mt-1">
              Kickoff: {time || "TBD"}
            </div>
          </div>

          {/* Odds */}
          {odds?.home && odds?.draw && odds?.away ? (
  <div className="flex gap-2 flex-wrap">
  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition">
    Home {odds.home.toFixed(2)}
  </button>
  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition">
    Draw {odds.draw.toFixed(2)}
  </button>
  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition">
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
