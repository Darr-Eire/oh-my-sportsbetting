import Head from "next/head";
import Sidebar from "../../components/Sidebar";

const matchesByDay = {
  "Saturday, May 25": [
    { teams: "Real Madrid vs Barcelona", time: "21:00", odds: { home: 2.10, draw: 3.00, away: 3.50 } },
    { teams: "Atletico Madrid vs Valencia", time: "18:30", odds: { home: 1.85, draw: 3.20, away: 4.00 } },
  ],
  "Sunday, May 26": [
    { teams: "Sevilla vs Real Betis", time: "16:15", odds: { home: 2.20, draw: 3.40, away: 3.10 } },
    { teams: "Villarreal vs Getafe", time: "14:00", odds: { home: 2.50, draw: 3.10, away: 2.90 } },
    { teams: "Osasuna vs Celta Vigo", time: "18:30", odds: { home: 2.30, draw: 3.10, away: 3.20 } },
  ],
  "Monday, May 27": [
    { teams: "Granada vs Mallorca", time: "21:00", odds: { home: 2.60, draw: 3.20, away: 2.80 } },
  ],
};

export default function LaLiga() {
  return (
    <>
      <Head>
        <title>La Liga – All Matches</title>
      </Head>
      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />
        <main className="flex-1 p-6 space-y-10">
          <h1 className="text-2xl font-bold text-gold">La Liga</h1>

          {Object.entries(matchesByDay).map(([day, matches]) => (
            <section key={day}>
              <h2 className="text-xl text-cyan-300 font-semibold mb-3">{day}</h2>
              <div className="space-y-4">
                {matches.map((match, idx) => (
                  <MatchCard key={idx} {...match} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

function MatchCard({ teams, time, odds }) {
  return (
    <div className="bg-deepBlue p-4 rounded-lg border border-[#2a2a3d] hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-md font-semibold">{teams}</div>
          <div className="text-sm text-gray-400">Kickoff: {time}</div>
        </div>
        <div className="flex gap-2 text-sm">
          <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded">
            Home {odds.home.toFixed(2)}
          </button>
          <button className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">
            Draw {odds.draw.toFixed(2)}
          </button>
          <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded">
            Away {odds.away.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
