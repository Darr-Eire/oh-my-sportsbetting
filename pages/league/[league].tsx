import { useRouter } from "next/router";
import Head from "next/head";


const allMatches = [
  {
    leagueSlug: "premier-league",
    league: "Premier League",
    teams: "Manchester City vs Arsenal",
    time: "May 26, 18:30",
    odds: { home: 1.90, away: 4.00 },
  },
  {
    leagueSlug: "premier-league",
    league: "Premier League",
    teams: "Chelsea vs Liverpool",
    time: "May 27, 20:00",
    odds: { home: 2.40, away: 2.80 },
  },
  {
    leagueSlug: "la-liga",
    league: "La Liga",
    teams: "Real Madrid vs Barcelona",
    time: "May 28, 21:00",
    odds: { home: 2.00, away: 3.50 },
  },
];

export default function LeaguePage() {
  const router = useRouter();
  const { league } = router.query;

  if (!league) {
    return null; // Prevent undefined error during SSR hydration
  }

  const filteredMatches = allMatches.filter(
    (match) => match.leagueSlug === league
  );

  const leagueTitle = filteredMatches.length > 0
    ? filteredMatches[0].league
    : decodeURIComponent(league as string);

  return (
    <>
      <Head>
        <title>{leagueTitle} – All Matches</title>
      </Head>

      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />

        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gold mb-4">
            {leagueTitle} – All Matches
          </h1>

          {filteredMatches.length === 0 ? (
            <p className="text-sm text-gray-400">No matches found for this league.</p>
          ) : (
            filteredMatches.map((match, i) => (
              <div
                key={i}
                className="bg-deepBlue p-4 rounded-lg border border-[#2a2a3d] shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold">{match.teams}</div>
                    <div className="text-sm text-gray-400">{match.time}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <button className="bg-blue-600 px-3 py-1 rounded">
                      Home {match.odds.home.toFixed(2)}
                    </button>
                    <button className="bg-red-600 px-3 py-1 rounded">
                      Away {match.odds.away.toFixed(2)}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
    </>
  );
}
