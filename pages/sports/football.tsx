"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
import league_of_ireland from "../../data/leagues/league_of_ireland.json";
import mls from "../../data/leagues/mls.json";



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
    logo: "/bundesliga.png",
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
    logo: "/logos/Brazilian_Serie_A.png",
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
{
  name: "Major League Soccer",
  logo: "/logos/mls.png",
  flag: "/logos/usa.png",
  matches: mls
},
{
  name: "League of Ireland Premier Division",
  logo: "/logos/league_of_ireland.png",
  flag: "/flags/ireland.png",
  matches: league_of_ireland
}


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

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Compact Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
            Leagues From Around The World
          </h1>
          <p className="text-sm sm:text-base text-white mt-2 max-w-xl mx-auto">
            Explore the top fixtures, fierce rivalries & Pi-powered action — all in one spot.
          </p>

          {/* League Logos Row */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <img src="/logos/premier_league.png" alt="Premier League" className="w-10 h-10 object-contain" />
            <img src="/logos/la_liga.png" alt="La Liga" className="w-10 h-10 object-contain" />
            <img src="/bundesliga.png" alt="Bundesliga" className="w-10 h-10 object-contain" />
            <img src="/logos/serie_a.png" alt="Serie A" className="w-10 h-10 object-contain" />
            <img src="/logos/ligue_1.png" alt="Ligue 1" className="w-10 h-10 object-contain" />
            <img src="/logos/Brazilian_Serie_A.png" alt="Brazilian Serie A" className="w-10 h-10 object-contain" />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-4 py-6">
          <PopularFootballBetsCarousel />
        </div>

        {/* League Dropdowns */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {leagueInfo.map((league) => (
            <div key={league.name} className="mb-6 border border-white rounded-lg">
              <button
                onClick={() => toggleLeague(league.name)}
                className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
                aria-expanded={!!openLeagues[league.name]}
                aria-controls={`${league.name}-matches`}
              >
                <div className="flex items-center gap-3">
                  <img src={league.logo} alt={`${league.name} logo`} className="w-6 h-6 object-contain" />
                  <span>{league.name}</span>
                  <img src={league.flag} alt={`${league.name} flag`} className="w-5 h-5 rounded-sm" />
                </div>
                <svg
                  className={`ml-auto h-5 w-5 transition-transform ${openLeagues[league.name] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openLeagues[league.name] && (
             <div className="grid gap-3">
  {league.matches.map((match, i) => (
    <MatchCard key={i} match={match} />
  ))}
</div>

              )}
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Back to Home
            </a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
