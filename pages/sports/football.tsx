"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MatchCard from "../../components/MatchCard";
import PopularFootballBetsCarousel from "../../components/PopularFootballBetsCarousel";

import premierLeague from "../../data/leagues/premier_league.json";
import championship from "../../data/leagues/championship.json";
import bundesliga from "../../data/leagues/bundesliga.json";
import laLiga from "../../data/leagues/la_liga.json";
import serieA from "../../data/leagues/serie_a.json";
import ligue1 from "../../data/leagues/ligue_1.json";
import brazilianseriea from "../../data/leagues/brazilian_serie_a.json";
import j1league from "../../data/leagues/j1_league.json";
import ligamx from "../../data/leagues/liga_mx.json";
import superlig from "../../data/leagues/super_lig.json";

const leagueInfo = [
  {
    name: "Premier League",
    logo: "/logos/premier_league.png",
    flag: "/flags/uk.png",
    matches: premierLeague,
  },
  {
    name: "Championship",
    logo: "/logos/championship.png",
    flag: "/flags/uk.png",
    matches: championship,
  },
  {
    name: "Bundesliga",
    logo: "/logos/bundesliga.png",
    flag: "/flags/germany.png",
    matches: bundesliga,
  },
  {
    name: "La Liga",
    logo: "/logos/la_liga.png",
    flag: "/flags/spain.png",
    matches: laLiga,
  },
  {
    name: "Serie A",
    logo: "/logos/serie_a.png",
    flag: "/flags/italy.png",
    matches: serieA,
  },
  {
    name: "Ligue 1",
    logo: "/logos/ligue_1.png",
    flag: "/flags/france.png",
    matches: ligue1,
  },
  {
    name: "Brazilian Série A",
    logo: "/logos/brazilian_serie_a.png",
    flag: "/flags/brazil.png",
    matches: brazilianseriea,
  },
  {
    name: "J1 League",
    logo: "/logos/j_1.png",
    flag: "/flags/japan.png",
    matches: j1league,
  },
  {
    name: "Liga MX",
    logo: "/logos/liga_mx.png",
    flag: "/flags/mexico.png",
    matches: ligamx,
  },
  {
    name: "Turkish Süper Lig",
    logo: "/logos/super_lig.png",
    flag: "/flags/turkey.png",
    matches: superlig,
  },
];

export default function FootballPage() {
  const [openLeagues, setOpenLeagues] = useState<{ [key: string]: boolean }>({});

  const toggleLeague = (name: string) => {
    setOpenLeagues((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <Head>
        <title>Football – OhMySportsbetting</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white">
        <Header />

        {/* Banner */}
        <div className="mx-4 mt-6 mb-8 p-6 rounded-xl bg-gradient-to-r from-[#0e1a2b] to-[#00324e] border border-cyan-700 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#00e5ff] tracking-wide animate-pulse drop-shadow-md">
            Leagues From Around The World
          </h1>
          <p className="text-sm sm:text-base text-softText mt-3 max-w-2xl mx-auto">
            Explore the biggest fixtures, fiercest rivalries, and Pi-powered betting action — all in one place.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          <PopularFootballBetsCarousel />
        </div>

        {/* Collapsible League Sections */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {leagueInfo.map((league) => (
            <div key={league.name} className="mb-6 border-b border-cyan-800 pb-4">
       <button
  onClick={() => toggleLeague(league.name)}
  className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full py-3 px-3 bg-cyan-900 hover:bg-cyan-800 transition rounded text-center"
  aria-expanded={!!openLeagues[league.name]}
  aria-controls={`${league.name}-matches`}
>
  <div className="flex-1 flex flex-col items-center justify-center">
    <div className="flex items-center space-x-3">
      <Image
        src={league.flag}
        alt={`${league.name} flag`}
        width={20}
        height={20}
        loading="lazy"
        className="rounded-sm"
      />
      <Image
        src={league.logo}
        alt={`${league.name} logo`}
        width={32}
        height={32}
        loading="lazy"
        className="object-contain"
      />
      <h2 className="text-lg font-bold text-cyan-300 whitespace-nowrap">{league.name}</h2>
    </div>
  </div>
  <span className="text-yellow-300 text-xl mt-2 sm:mt-0 flex items-center">
    {openLeagues[league.name] ? "−" : "+"}
  </span>
</button>

{openLeagues[league.name] && (
  <div
    id={`${league.name}-matches`}
    role="region"
    aria-labelledby={`${league.name}-header`}
    className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
  >
    {league.matches.map((match, idx) => (
      <MatchCard key={match.slug ?? idx} match={match} />
    ))}
  </div>
              )}
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
