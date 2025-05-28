import Head from "next/head";

import MatchCard from "../../components/MatchCard";

const matchesByDay = {
  "Saturday, May 25": [
    {
      slug: "manchester-city-vs-arsenal",
      teams: "Manchester City vs Arsenal",
      time: "12:30",
      odds: { home: 1.90, draw: 3.40, away: 3.80 },
    },
    {
      slug: "burnley-vs-west-ham",
      teams: "Burnley vs West Ham",
      time: "15:00",
      odds: { home: 3.10, draw: 3.20, away: 2.20 },
    },
    {
      slug: "brighton-vs-bournemouth",
      teams: "Brighton vs Bournemouth",
      time: "15:00",
      odds: { home: 2.05, draw: 3.30, away: 3.40 },
    },
    {
      slug: "liverpool-vs-tottenham",
      teams: "Liverpool vs Tottenham",
      time: "17:30",
      odds: { home: 1.75, draw: 3.80, away: 4.10 },
    },
    {
      slug: "crystal-palace-vs-wolves",
      teams: "Crystal Palace vs Wolves",
      time: "15:00",
      odds: { home: 2.50, draw: 3.00, away: 2.90 },
    },
    {
      slug: "sheffield-united-vs-nottingham-forest",
      teams: "Sheffield United vs Nottingham Forest",
      time: "15:00",
      odds: { home: 2.80, draw: 3.10, away: 2.60 },
    },
  ],
  "Sunday, May 26": [
    {
      slug: "aston-villa-vs-manchester-united",
      teams: "Aston Villa vs Manchester United",
      time: "14:00",
      odds: { home: 2.20, draw: 3.30, away: 3.10 },
    },
    {
      slug: "newcastle-vs-chelsea",
      teams: "Newcastle vs Chelsea",
      time: "16:30",
      odds: { home: 2.40, draw: 3.20, away: 2.90 },
    },
    {
      slug: "everton-vs-brentford",
      teams: "Everton vs Brentford",
      time: "18:00",
      odds: { home: 2.60, draw: 3.10, away: 2.80 },
    },
  ],
  "Monday, May 27": [
    {
      slug: "fulham-vs-leeds-united",
      teams: "Fulham vs Leeds United",
      time: "20:00",
      odds: { home: 2.50, draw: 3.00, away: 3.00 },
    },
  ],
};

export default function PremierLeague() {
  return (
    <>
      <Head>
        <title>Premier League – All Matches</title>
      </Head>
      <div className="flex min-h-screen bg-[#0a0a23] text-white">

        <main className="flex-1 p-6 space-y-10">
          <div className="mb-4">
            <img
              src="/premier-league-banner.jpg"
              alt="Premier League"
              className="w-full max-h-32 object-cover rounded-lg shadow"
            />
          </div>

          <h1 className="text-2xl font-bold text-gold text-center">Premier League</h1>

          {Object.entries(matchesByDay).map(([day, matches]) => (
            <section key={day}>
              <h2 className="text-xl text-cyan-300 font-semibold mb-3 text-center">{day}</h2>
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
