import Head from "next/head";
import Sidebar from "../../components/Sidebar";

const matches = [
  { teams: "Leeds United vs West Brom", time: "Saturday, May 31 – 15:00", odds: { home: 2.0, draw: 3.1, away: 3.6 } },
  { teams: "Norwich City vs Sunderland", time: "Saturday, May 31 – 15:00", odds: { home: 1.9, draw: 3.0, away: 4.2 } },
  { teams: "Hull City vs Coventry City", time: "Saturday, May 31 – 15:00", odds: { home: 2.5, draw: 3.0, away: 2.9 } },
  { teams: "Blackburn Rovers vs QPR", time: "Saturday, May 31 – 15:00", odds: { home: 2.3, draw: 3.2, away: 3.0 } },
  { teams: "Bristol City vs Huddersfield", time: "Saturday, May 31 – 15:00", odds: { home: 2.0, draw: 3.3, away: 3.7 } },
  { teams: "Millwall vs Stoke City", time: "Saturday, May 31 – 15:00", odds: { home: 2.4, draw: 3.0, away: 2.8 } },
  { teams: "Cardiff City vs Plymouth", time: "Saturday, May 31 – 15:00", odds: { home: 2.1, draw: 3.0, away: 3.2 } },
  { teams: "Rotherham vs Middlesbrough", time: "Saturday, May 31 – 15:00", odds: { home: 2.7, draw: 3.1, away: 2.6 } },
  { teams: "Birmingham vs Swansea", time: "Saturday, May 31 – 15:00", odds: { home: 2.6, draw: 3.0, away: 2.9 } },
];

export default function Championship() {
  return (
    <>
      <Head>
        <title>Championship – All Matches</title>
      </Head>
      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gold">Championship</h1>

          <h2 className="text-xl text-cyan-300 font-semibold mb-3">Saturday, May 31 – All Matches Kick Off at 15:00</h2>
          <div className="space-y-4">
            {matches.map((match, idx) => (
              <MatchCard key={idx} {...match} />
            ))}
          </div>
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
