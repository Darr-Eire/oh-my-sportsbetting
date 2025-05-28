import Head from "next/head";
import LiveBadge from "../components/LiveBadge";
import Image from "next/image";

const fighterKeyMap: Record<string, keyof typeof events[0]["odds"]> = {
  "Jon Jones": "jon",
  "Stipe Miocic": "stipe",
  "Sean O'Malley": "sean",
  "Merab Dvalishvili": "merab",
};

export default function UFC() {
  return (
    <>
      {/* ...head and container code unchanged... */}

      <div className="space-y-6">
        {events.map((event, i) => {
          const [fighter1, fighter2] = event.fighters.split(" vs ");

          const fighter1Key = fighterKeyMap[fighter1];
          const fighter2Key = fighterKeyMap[fighter2];

          return (
            <div key={i} className="bg-[#12122b] p-5 rounded-xl border border-[#1f1f40] shadow-md hover:shadow-pink-500/10 transition-shadow duration-300">
              {/* ...header and info unchanged... */}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5 text-sm">
                <button className="border border-blue-400 text-blue-300 px-3 py-2 rounded hover:bg-blue-400 hover:text-black">
                  🧠 {fighter1}{" "}
                  {fighter1Key && event.odds[fighter1Key] !== undefined
                    ? event.odds[fighter1Key].toFixed(2)
                    : "—"}
                </button>
                <button className="border border-red-400 text-red-300 px-3 py-2 rounded hover:bg-red-400 hover:text-black">
                  💥 {fighter2}{" "}
                  {fighter2Key && event.odds[fighter2Key] !== undefined
                    ? event.odds[fighter2Key].toFixed(2)
                    : "—"}
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-gray-300 font-semibold col-span-2 sm:col-span-1">
                  ➕ Add to Bet Slip
                </button>
              </div>

              {/* ...methods buttons unchanged... */}
            </div>
          );
        })}
      </div>

      {/* ...closing tags */}
    </>
  );
}
