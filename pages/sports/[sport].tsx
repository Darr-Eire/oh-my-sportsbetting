"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// ✅ All sports, leagues and routes
const sportsData = [
  {
    sport: "Football",
    leagues: [
      { name: "Premier League", link: "/sports/football/premier-league" },
      { name: "Championship", link: "/sports/football/championship" },
      { name: "EFL League One", link: "/sports/football/efl-league-one" },
      { name: "EFL League Two", link: "/sports/football/efl-league-two" },
      { name: "FA Cup", link: "/sports/football/fa-cup" },
      { name: "EFL Cup", link: "/sports/football/efl-cup" },
    ],
  },
  {
    sport: "Basketball",
    leagues: [
      { name: "NBA", link: "/sports/basketball/nba" },
      { name: "EuroLeague", link: "/sports/basketball/euroleague" },
      { name: "EuroCup", link: "/sports/basketball/eurocup" },
    ],
  },
  {
    sport: "UFC",
    leagues: [
      { name: "Fight Night", link: "/sports/ufc/fight-night" },
      { name: "PPV Events", link: "/sports/ufc/ppv" },
    ],
  },
  {
    sport: "Horse Racing",
    leagues: [
      { name: "Cheltenham", link: "/sports/racing/cheltenham" },
      { name: "Aintree", link: "/sports/racing/aintree" },
    ],
  },
  {
    sport: "Greyhounds",
    leagues: [
      { name: "Shelbourne Park", link: "/sports/greyhounds/shelbourne" },
      { name: "Romford", link: "/sports/greyhounds/romford" },
    ],
  },
  {
    sport: "eSports",
    leagues: [
      { name: "CSGO", link: "/sports/esports/csgo" },
      { name: "League of Legends", link: "/sports/esports/lol" },
    ],
  },
];

export default function AllSportsDirectory() {
  const [search, setSearch] = useState("");
  const [openSports, setOpenSports] = useState<Record<string, boolean>>({});

  const handleToggle = (sport: string) => {
    setOpenSports((prev) => ({ ...prev, [sport]: !prev[sport] }));
  };

  const filteredData = sportsData.filter((sportItem) => {
    const lowerSearch = search.toLowerCase();
    const sportMatch = sportItem.sport.toLowerCase().includes(lowerSearch);
    const leagueMatch = sportItem.leagues.some((league) =>
      league.name.toLowerCase().includes(lowerSearch)
    );
    return sportMatch || leagueMatch;
  });

  return (
    <>
      <Head>
        <title>Sports Directory – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">All Sports & Leagues</h1>

          {/* Search bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search sport or league..."
              className="w-full md:w-96 px-4 py-2 rounded-lg border border-white bg-[#0a1024] text-white placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Directory */}
          <div className="space-y-6">
            {filteredData.map((sportItem, idx) => (
              <div key={idx} className="border border-white rounded-lg bg-[#0a1024]">
                <button
                  onClick={() => handleToggle(sportItem.sport)}
                  className="flex justify-between items-center px-4 py-3 w-full text-left text-white font-bold text-lg hover:bg-[#14215c] transition rounded-t-lg"
                >
                  <span>{sportItem.sport}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${openSports[sportItem.sport] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSports[sportItem.sport] && (
                  <div className="px-4 pb-4">
                    {sportItem.leagues
                      .filter((league) =>
                        league.name.toLowerCase().includes(search.toLowerCase()) ||
                        sportItem.sport.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((league, leagueIdx) => (
                        <Link key={leagueIdx} href={league.link} passHref legacyBehavior>
                          <a className="block px-4 py-2 my-1 border border-white rounded-lg hover:bg-white hover:text-black transition">
                            {league.name}
                          </a>
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-10">
            <Link href="/" passHref legacyBehavior>
              <a className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
                Back to Home
              </a>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
