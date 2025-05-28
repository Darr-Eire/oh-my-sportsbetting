import Head from "next/head";
import Sidebar from "../components/Sidebar";
import LiveBadge from "../components/LiveBadge";

const events = [
  {
    fighters: "Jon Jones vs Stipe Miocic",
    time: "May 31, 2025 – 10:00 PM ET",
    venue: "T-Mobile Arena, Las Vegas",
    logo: "/logos/jones-miocic.png",
    odds: {
      jon: 1.65,
      stipe: 2.35,
      method: {
        ko: 2.2,
        submission: 3.4,
        decision: 4.8,
      },
    },
    status: "live",
  },
  {
    fighters: "Sean O'Malley vs Merab Dvalishvili",
    time: "June 7, 2025 – 9:00 PM ET",
    venue: "Barclays Center, Brooklyn",
    logo: "/logos/omalley-merab.png",
    odds: {
      sean: 1.85,
      merab: 1.95,
      method: {
        ko: 2.8,
        submission: 3.2,
        decision: 2.9,
      },
    },
    status: "upcoming",
  },
];

export default function UFC() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – UFC</title>
      </Head>

      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-pink-400 mb-6 font-orbitron">
            🥋 UFC – Upcoming Fights
          </h1>

          <div className="space-y-6">
            {events.map((event, i) => {
              const [fighter1, fighter2] = event.fighters.split(" vs ");
              return (
                <div
                  key={i}
                  className="bg-[#12122b] p-5 rounded-xl border border-[#1f1f40] shadow-md hover:shadow-pink-500/10 transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <img
                        src={event.logo}
                        alt={event.fighters}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div>
                        <div className="text-lg font-semibold">{event.fighters}</div>
                        <div className="text-sm text-gray-400">🕒 {event.time}</div>
                        <div className="text-sm text-gray-400">🏟️ {event.venue}</div>
                      </div>
                    </div>
                    <div>
                      {event.status === "live" ? (
                        <LiveBadge />
                      ) : (
                        <div className="text-xs bg-yellow-400 text-black px-2 py-1 rounded uppercase font-semibold">
                          Upcoming
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Odds Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5 text-sm">
                    <button className="border border-blue-400 text-blue-300 px-3 py-2 rounded hover:bg-blue-400 hover:text-black">
                      🧠 {fighter1} {event.odds?.jon?.toFixed?.(2) || "—"}
                    </button>
                    <button className="border border-red-400 text-red-300 px-3 py-2 rounded hover:bg-red-400 hover:text-black">
                      💥 {fighter2} {event.odds?.stipe?.toFixed?.(2) || "—"}
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-gray-300 font-semibold col-span-2 sm:col-span-1">
                      ➕ Add to Bet Slip
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                    <button className="border border-purple-400 text-purple-300 px-3 py-2 rounded hover:bg-purple-500 hover:text-black">
                      KO/TKO {event.odds?.method?.ko?.toFixed?.(2) || "—"}
                    </button>
                    <button className="border border-indigo-400 text-indigo-300 px-3 py-2 rounded hover:bg-indigo-500 hover:text-black">
                      Submission {event.odds?.method?.submission?.toFixed?.(2) || "—"}
                    </button>
                    <button className="border border-teal-400 text-teal-300 px-3 py-2 rounded hover:bg-teal-500 hover:text-black">
                      Decision {event.odds?.method?.decision?.toFixed?.(2) || "—"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
