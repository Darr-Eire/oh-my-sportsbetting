"use client";

import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// ✅ Full sports list (flat structure, A-Z)
const sportsData = [
  { sport: "American Football", link: "/sports/american-football" },
  { sport: "Australian Rules", link: "/sports/australian-rules" },
  { sport: "Baseball", link: "/sports/baseball" },
  { sport: "Basketball", link: "/sports/basketball" },
  { sport: "Boxing", link: "/sports/boxing" },
  { sport: "Cricket", link: "/sports/cricket" },
  { sport: "Darts", link: "/sports/darts" },
  { sport: "Esports", link: "/sports/esports" },
  { sport: "Football", link: "/sports/football" },
  { sport: "Gaelic Games", link: "/sports/gaelic-games" },
  { sport: "Golf", link: "/sports/golf" },
  { sport: "Greyhound Racing", link: "/sports/greyhound-racing" },
  { sport: "Handball", link: "/sports/handball" },
  { sport: "Horse Racing", link: "/sports/horse-racing" },
  { sport: "Ice Hockey", link: "/sports/ice-hockey" },
  { sport: "Motor Sport", link: "/sports/motor-sport" },
  { sport: "Snooker", link: "/sports/snooker" },
  { sport: "Table Tennis", link: "/sports/table-tennis" },
  { sport: "UFC", link: "/sports/ufc" },
  { sport: "Volleyball", link: "/sports/volleyball" },
];

// Sort alphabetically upfront
const sortedSports = sportsData.sort((a, b) => a.sport.localeCompare(b.sport));

export default function AllSportsDirectory() {
  const [search, setSearch] = useState("");

  const filteredData = sortedSports.filter((item) =>
    item.sport.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>All Sports Directory – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">All Sports</h1>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Search sport..."
              className="w-full md:w-96 px-4 py-2 rounded-lg border border-white bg-[#0a1024] text-white placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Directory Display */}
          <div className="space-y-4">
            {filteredData.map((item, idx) => (
              <Link key={idx} href={item.link} passHref legacyBehavior>
                <a className="block px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition text-lg font-semibold">
                  {item.sport}
                </a>
              </Link>
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
