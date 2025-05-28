import Head from "next/head";
import Link from "next/link";

type Odds = {
  home: number;
  draw: number;
  away: number;
};

type Match = {
  slug: string;
  teams: string;
  time: string;
  odds: Odds;
};

const matchesByDay: Record<string, Match[]> = {
  "Friday, May 24": [
    {
      slug: "bayern-munich-vs-dortmund",
      teams: "Bayern Munich vs Dortmund",
      time: "20:30",
      odds: { home: 1.65, draw: 3.5, away: 4.2 },
    },
  ],
  "Saturday, May 25": [
    {
      slug: "leipzig-vs-frankfurt",
      teams: "RB Leipzig vs Eintracht Frankfurt",
      time: "15:30",
      odds: { home: 2.0, draw: 3.1, away: 3.6 },
    },
    {
      slug: "stuttgart-vs-hoffenheim",
      teams: "Stuttgart vs Hoffenheim",
      time: "15:30",
      odds: { home: 2.4, draw: 3.2, away: 2.9 },
    },
    {
      slug: "union-berlin-vs-mainz",
      teams: "Union Berlin vs Mainz",
      time: "15:30",
      odds: { home: 2.1, draw: 3.3, away: 3.2 },
    },
    {
      slug: "wolfsburg-vs-augsburg",
      teams: "Wolfsburg vs Augsburg",
      time: "15:30",
      odds: { home: 2.2, draw: 3.0, away: 3.4 },
    },
    {
      slug: "freiburg-vs-werder-bremen",
      teams: "Freiburg vs Werder Bremen",
      time: "18:30",
      odds: { home: 2.0, draw: 3.0, away: 3.9 },
    },
  ],
  "Sunday, May 26": [
    {
      slug: "leverkusen-vs-schalke",
      teams: "Bayer Leverkusen vs Schalke 04",
      time: "15:30",
      odds: { home: 1.7, draw: 3.5, away: 4.5 },
    },
    {
      slug: "bochum-vs-koln",
      teams: "Bochum vs Köln",
      time: "17:30",
      odds: { home: 2.6, draw: 3.0, away: 2.7 },
    },
    {
      slug: "gladbach-vs-heidenheim",
      teams: "Gladbach vs Heidenheim",
      time: "17:30",
      odds: { home: 2.3, draw: 3.2, away: 3.0 },
    },
  ],
};

export default function Bundesliga() {
  return (
    <>
      <Head>
        <title>Bundesliga – All Matches</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white p-6 space-y-10">
        <h1 className="text-2xl font-bold text-gold">Bundesliga</h1>

        {Object.entries(matchesByDay).map(([day, matches]) => (
          <section key={day}>
            <h2 className="text-xl text-cyan-300 font-semibold mb-3">{day}</h2>
            <div className="space-y-4">
              {matches.map((match) => (
                <MatchCard key={match.slug} {...match} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function MatchCard({ teams, time, odds, slug }: Match) {
  return (
    <Link href={`/match/${slug}`} passHref>
      <div className="bg-deepBlue p-4 rounded-lg border border-[#2a2a3d] hover:shadow-lg transition cursor-pointer">
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
    </Link>
  );
}
