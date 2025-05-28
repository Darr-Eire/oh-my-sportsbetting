import Head from "next/head";
import Image from "next/image";

import MatchCard from "../../components/MatchCard";

const matchesByDay = {
  "Saturday, May 25": [
    {
      slug: "manchester-city-vs-arsenal",
      teams: "Manchester City vs Arsenal",
      time: "12:30",
      odds: { home: 1.9, draw: 3.4, away: 3.8 },
    },
    {
      slug: "burnley-vs-west-ham",
      teams: "Burnley vs West Ham",
      time: "15:00",
      odds: { home: 3.1, draw: 3.2, away: 2.2 },
    },
    {
      slug: "brighton-vs-bournemouth",
      teams: "Brighton vs Bournemouth",
      time: "15:00",
      odds: { home: 2.05, draw: 3.3, away: 3.4 },
    },
    {
      slug: "liverpool-vs-tottenham",
      teams: "Liverpool vs Tottenham",
      time: "17:30",
      odds: { home: 1.75, draw: 3.8, away: 4.1 },
    },
    {
      slug: "crystal-palace-vs-wolves",
      teams: "Crystal Palace vs Wolves",
      time: "15:00",
      odds: { home: 2.5, draw: 3.0, away: 2.9 },
    },
    {
      slug: "sheffield-united-vs-nottingham-forest",
      teams: "Sheffield United vs Nottingham Forest",
      time: "15:00",
      odds: { home: 2.8, draw: 3.1, away: 2.6 },
    },
  ],
  "Sunday, May 26": [
    {
      slug: "aston-villa-vs-manchester-united",
      teams: "Aston Villa vs Manchester United",
      time: "14:00",
      odds: { home: 2.2, draw: 3.3, away: 3.1 },
    },
    {
      slug: "newcastle-vs-chelsea",
      teams: "Newcastle vs Chelsea",
      time: "16:30",
      odds: { home: 2.4, draw: 3.2, away: 2.9 },
    },
    {
      slug: "everton-vs-brentford",
      teams: "Everton vs Brentford",
      time: "18:00",
      odds: { home: 2.6, draw: 3.1, away: 2.8 },
    },
  ],
  "Monday, May 27": [
    {
      slug: "fulham-vs-leeds-united",
      teams: "Fulham vs Leeds United",
      time: "20:00",
      odds: { home: 2.5, draw: 3.0, away: 3.0 },
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
            <Image
              src="/premier-league-banner.jpg"
              alt="Premier League"
              className="rounded-lg shadow"
              width={1200} // adjust to your actual image width
              height={320} // adjust to your actual image height
              style={{ objectFit: "cover" }}
            />
          </div>

          <h1 className="text-2xl font-bold text-gold text-center">Premier League</h1>

          {Object.entries(matchesByDay).map(([day, matches]) => (
            <section key={day}>
              <h2 className="text-xl text-cyan-300 font-semibold mb-3 text-center">{day}</h2>
              <div className="space-y-4">
                {matches.map((match) => (
                  <MatchCard key={match.slug} {...match} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
