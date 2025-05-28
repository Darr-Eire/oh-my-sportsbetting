import Head from "next/head";
import Sidebar from "../components/Sidebar";
import LiveBadge from "../components/LiveBadge";
import Image from "next/image";

const matches = [
  {
    league: "NBA Eastern Conference Finals",
    teams: "New York Knicks vs Indiana Pacers",
    time: "May 25, 2025 – 8:00 PM ET",
    venue: "Gainbridge Fieldhouse, Indianapolis",
    logo: "/logos/knicks-pacers.png",
    odds: { home: 1.85, away: 2.05 },
    status: "upcoming",
  },
  {
    league: "NBA Eastern Conference Finals",
    teams: "New York Knicks vs Indiana Pacers",
    time: "May 27, 2025 – 8:00 PM ET",
    venue: "Gainbridge Fieldhouse, Indianapolis",
    logo: "/logos/knicks-pacers.png",
    odds: { home: 1.90, away: 2.00 },
    status: "live",
  },
  {
    league: "NBA Eastern Conference Finals",
    teams: "Indiana Pacers vs New York Knicks",
    time: "May 29, 2025 – 8:00 PM ET",
    venue: "Madison Square Garden, New York",
    logo: "/logos/pacers-knicks.png",
    odds: { home: 1.95, away: 1.95 },
    status: "upcoming",
  },
];

export default function Basketball() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – NBA Playoffs</title>
      </Head>

      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />

        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-cyan-300 mb-6 font-orbitron">
            🏀 NBA Playoffs – Eastern Conference Finals
          </h1>

          {matches.map((match, i) => (
            <div
              key={i}
              className="bg-[#12122b] border border-[#1f1f40] p-5 rounded-xl shadow-md hover:shadow-cyan-500/10 transition-shadow duration-300 relative"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <Image
                    src={match.logo}
                    alt={match.teams}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="text-lg font-semibold">{match.teams}</div>
                    <div className="text-sm text-gray-400">{match.league}</div>
                    <div className="text-sm text-gray-400">🕒 {match.time}</div>
                    <div className="text-sm text-gray-400">🏟️ {match.venue}</div>
                  </div>
                </div>

                <div>
                  {match.status === "live" ? (
                    <LiveBadge />
                  ) : (
                    <div className="text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold uppercase">
                      Upcoming
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 text-sm">
                <button className="border border-cyan-400 text-cyan-300 px-3 py-2 rounded hover:bg-cyan-400 hover:text-black transition-all">
                  🏠 Home: {match.odds.home.toFixed(2)}
                </button>
                <button className="border border-purple-400 text-purple-300 px-3 py-2 rounded hover:bg-purple-400 hover:text-black transition-all">
                  🚩 Away: {match.odds.away.toFixed(2)}
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-gray-300 font-semibold">
                  ➕ Add to Bet Slip
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
