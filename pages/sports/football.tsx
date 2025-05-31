"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MatchCard from "../../components/MatchCard";
import Slider from "react-slick";

// IMPORTING ALL YOUR LEAGUES AS BEFORE:
import serieB from "../../data/leagues/serie_b.json";
import coppaItalia from "../../data/leagues/coppa_italia.json";
import ligue2 from "../../data/leagues/ligue_2.json";
import coupeDeFrance from "../../data/leagues/coupe_de_france.json";
import dfbPokal from "../../data/leagues/dfb_pokal.json";
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
import eflLeagueOne from "../../data/leagues/efl_league_one.json";
import eflLeagueTwo from "../../data/leagues/efl_league_two.json";
import footballLeagueFirstDivision from "../../data/leagues/football_league_first_division.json";
import faCup from "../../data/leagues/fa_cup.json";
import eflCup from "../../data/leagues/efl_cup.json";
import copaDelRey from "../../data/leagues/copa_del_rey.json";
import supercopaDeEspana from "../../data/leagues/supercopa_de_espana.json";
import laLiga2 from "../../data/leagues/la_liga_2.json";

// YOUR FULL LEAGUE GROUPS STAYS EXACTLY AS IT WAS:
const leagueGroups = [
  { country: "England", flag: "/flags/uk.png", leagues: [
      { name: "Premier League", logo: "/logos/premier_league.png", matches: premierLeague },
      { name: "Championship", logo: "/logos/championship.png", matches: championship },
      { name: "EFL League One", logo: "/logos/efl1.png", matches: eflLeagueOne },
      { name: "EFL League Two", logo: "/logos/efl2.png", matches: eflLeagueTwo },
      { name: "Football League First Division", logo: "/logos/footballleague.png", matches: footballLeagueFirstDivision },
      { name: "FA Cup", logo: "/logos/facup.png", matches: faCup },
      { name: "EFL Cup", logo: "/logos/eflcup.png", matches: eflCup },
  ]},
  { country: "Germany", flag: "/flags/germany.png", leagues: [
      { name: "Bundesliga", logo: "/logos/bundesliga.png", matches: bundesliga },
      { name: "DFB-Pokal", logo: "/logos/dfb.png", matches: dfbPokal }
  ]},
  { country: "Spain", flag: "/flags/spain.png", leagues: [
      { name: "La Liga", logo: "/logos/la_liga.png", matches: laLiga },
      { name: "La Liga 2", logo: "/logos/laliga2.png", matches: laLiga2 },
      { name: "Copa del Rey", logo: "/logos/copadelrey.png", matches: copaDelRey },
      { name: "Supercopa de España", logo: "/logos/supercopadeespana.png", matches: supercopaDeEspana }
  ]},
  { country: "Italy", flag: "/flags/italy.png", leagues: [
      { name: "Serie A", logo: "/logos/serie_a.png", matches: serieA },
      { name: "Serie B", logo: "/logos/serieb.png", matches: serieB },
      { name: "Coppa Italia", logo: "/logos/coppaitalia.png", matches: coppaItalia }
  ]},
  { country: "France", flag: "/flags/france.png", leagues: [
      { name: "Ligue 1", logo: "/logos/ligue_1.png", matches: ligue1 },
      { name: "Ligue 2", logo: "/logos/ligue2.png", matches: ligue2 },
      { name: "Coupe de France", logo: "/logos/coupedefrance.png", matches: coupeDeFrance }
  ]},
  { country: "Ireland", flag: "/flags/ireland.png", leagues: [
      { name: "League of Ireland Premier Division", logo: "/logos/league_of_ireland.png", matches: league_of_ireland }
  ]},
  { country: "Brazil", flag: "/flags/brazil.png", leagues: [
      { name: "Brazilian Série A", logo: "/logos/Brazilian_Serie_A.png", matches: brazilianseriea }
  ]},
  { country: "Japan", flag: "/flags/japan.png", leagues: [
      { name: "J1 League", logo: "/logos/j_1.png", matches: j1league }
  ]},
  { country: "Mexico", flag: "/flags/mexico.png", leagues: [
      { name: "Liga MX", logo: "/logos/liga_mx.png", matches: ligamx }
  ]},
  { country: "Turkey", flag: "/flags/turkey.png", leagues: [
      { name: "Turkish Süper Lig", logo: "/logos/super_lig.png", matches: superlig }
  ]},
  { country: "USA", flag: "/logos/usa.png", leagues: [
      { name: "Major League Soccer", logo: "/logos/mls.png", matches: mls }
  ]},
];

export default function FootballPage() {
  const [openCountries, setOpenCountries] = useState({});
  const [openLeagues, setOpenLeagues] = useState({});
  const [dates, setDates] = useState([]);
  const [activeDate, setActiveDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const dateArray = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d;
    });
    setDates(dateArray);
    setActiveDate(today);
  }, []);

  const toggleCountry = (country) => {
    setOpenCountries(prev => ({ ...prev, [country]: !prev[country] }));
  };

  const toggleLeague = (league) => {
    setOpenLeagues(prev => ({ ...prev, [league]: !prev[league] }));
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  const popularFootballBets = [
    { title: "Man City vs Arsenal", market: "Both Teams to Score: Yes", odds: "4/5" },
    { title: "Liverpool vs Chelsea", market: "Over 2.5 Goals", odds: "11/10" },
    { title: "Real Madrid vs Barcelona", market: "Correct Score: 2-1 Madrid", odds: "7/1" },
  ];

  return (
    <>
     <Head><title>Football – OhMySportsbetting</title></Head>
      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] shadow text-center">
          <h1 className="text-3xl font-semibold">Leagues From Around The World</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">Explore the top fixtures, fierce rivalries & Pi-powered action — all in one spot.</p>
          <div className="mt-4 flex justify-center flex-wrap gap-4">
            {["/flags/uk.png", "/flags/spain.png", "/flags/italy.png", "/flags/germany.png", "/flags/france.png"].map((flag, index) => (
              <div key={index}><img src={flag} alt="flag" className="w-12 h-12 object-contain" /></div>
            ))}
          </div>
        </div>

        {/* Popular Football Bets Carousel */}
    <div className="max-w-5xl mx-auto px-4 pb-10">
  <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Football Bets</h2>
  <Slider {...carouselSettings}>
    {popularFootballBets.map((bet, index) => (
      <div key={index} className="p-2">
        <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
          <div className="font-semibold text-white mb-1">{bet.title}</div>
          <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
          <button className="border border-white bg-[#0a1024] text-white px-4 py-2 rounded text-lg font-semibold hover:bg-white hover:text-black transition">
            {bet.odds}
          </button>
        </div>
      </div>
    ))}
  </Slider>
</div>


        {/* Date Selector */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="flex overflow-x-auto pl-4 pr-2 gap-3 max-w-full md:max-w-3xl scrollbar-hide">
            {dates.map((date, idx) => (
              <button key={idx} onClick={() => setActiveDate(date)} className={`min-w-[90px] flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm border ${
                activeDate?.toDateString() === date.toDateString() ? "bg-white text-black border-white shadow-lg" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black transition"
              }`}>
                {date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
              </button>
            ))}
          </div>
        </div>

        {/* LEAGUES */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {leagueGroups.map(group => (
            <div key={group.country} className="mb-8 border border-white rounded-lg">
              <button onClick={() => toggleCountry(group.country)} className="flex items-center gap-3 w-full px-4 py-3 text-left font-bold text-lg hover:bg-[#14215c] transition">
                <img src={group.flag} alt={`${group.country} flag`} className="w-6 h-6 object-contain" />
                {group.country}
                <svg className={`ml-auto h-5 w-5 transition-transform ${openCountries[group.country] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openCountries[group.country] && (
                <div className="px-4 pb-4">
                  {group.leagues.map(league => (
                    <div key={league.name} className="mb-4 border border-white rounded-lg">
                      <button onClick={() => toggleLeague(league.name)} className="flex items-center gap-3 w-full px-4 py-3 font-semibold hover:bg-[#203275] transition">
                        <img src={league.logo} alt={league.name} className="w-6 h-6 object-contain" />
                        {league.name}
                        <svg className={`ml-auto h-5 w-5 transition-transform ${openLeagues[league.name] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {openLeagues[league.name] && (
                        <div className="grid gap-3 p-3 bg-[#0a1024]">
                          {league.matches.map((match, i) => <MatchCard key={i} match={match} />)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

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
