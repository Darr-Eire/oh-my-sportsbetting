"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import { useBetSlip } from "../context/BetSlipContext";

import PromoCarousel from "../components/PromoCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import LiveGamesFeed from "../components/LiveGamesFeed";
import HeaderLayout from "../components/Header";
import Footer from "../components/Footer";

import { horseRaces } from "../data/horseRaces";

import {
  FaFutbol, FaHorseHead, FaStopwatch, FaTicketAlt, FaDog,
  FaBasketballBall, FaUserNinja, FaGamepad, FaThList
} from "react-icons/fa";

// Types
type Match = { teams: string; time: string; odds: { home: number; draw?: number; away: number } };
type LeagueBlock = { league: string; countryCode: string; leagueLogo: string; matches: Match[] };
type BasketballMatch = { teams: string; time: string; odds: { home: number; away: number } };
type BasketballBlock = { league: string; matches: BasketballMatch[] };

interface HomeProps {
  todayMatches: LeagueBlock[];
  basketballMatches: BasketballBlock[];
}


export default function Home({ todayMatches, basketballMatches }: HomeProps) {
  const [openLeagues, setOpenLeagues] = useState<string[]>([]);
  const [openBasketball, setOpenBasketball] = useState(false);
  const [openHorseRacing, setOpenHorseRacing] = useState(false);
  const { addSelection } = useBetSlip();

  const toggleLeague = (leagueName: string) => {
    setOpenLeagues((prev) =>
      prev.includes(leagueName)
        ? prev.filter((l) => l !== leagueName)
        : [...prev, leagueName]
    );
  };

  const toggleHorseRacing = () => setOpenHorseRacing(prev => !prev);
  const toggleBasketball = () => setOpenBasketball(prev => !prev);

  return (
    <>
      <Head><title>Oh My Sportsbets</title></Head>
      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <HeaderLayout />
        <main className="flex-1 px-4 py-4 pb-24 flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <PromoCarousel />
          <SportsCarousel />
          <PowerPriceCarousel />


                   <div className="w-full max-w-3xl space-y-10"></div>
          <h2 className="text-lg font-bold text-white mb-3 mt-8">Today’s Basketball Games</h2>

       <section className="w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
  <button
    onClick={toggleBasketball}
    className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
    aria-expanded={openBasketball}
    aria-controls="basketball-matches"
  >
    <Image src="/leagues/nba.png" alt="NBA Logo" width={32} height={32} className="object-contain" unoptimized />
    <span className="flex items-center gap-2">
      <span>NBA Games</span>
      <Image src="https://flagcdn.com/w20/us.png" alt="USA Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
    </span>
    <svg className={`ml-auto h-5 w-5 transition-transform ${openBasketball ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {openBasketball && (
    <div id="basketball-matches" className="mt-3 space-y-4 px-4 pb-6 border-t border-gray-700 rounded-b-lg">
      {basketballMatches.map((block, i) => (
        <div key={i}>
          <h3 className="text-gold font-semibold mb-3 text-lg">{block.league}</h3>
          <div className="space-y-3">
            {block.matches.map((match, j) => (
              <div key={j} className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold text-white">{match.teams}</div>
                    <div className="text-xs text-gray-400">Tip-off: {match.time}</div>
                  </div>
                  <div className="flex gap-4 text-sm font-medium text-center">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          addSelection({
                            id: `${match.teams}-home`,
                            event: match.teams,
                            type: "Home",
                            odds: match.odds.home,
                          })
                        }
                        className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-cyan-700 transition"
                      >
                        {match.odds?.home?.toFixed(2) ?? "—"}
                      </button>
                      <span className="text-xs text-softText mt-1">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          addSelection({
                            id: `${match.teams}-away`,
                            event: match.teams,
                            type: "Away",
                            odds: match.odds.away,
                          })
                        }
                        className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-cyan-700 transition"
                      >
                        {match.odds?.away?.toFixed(2) ?? "—"}
                      </button>
                      <span className="text-xs text-softText mt-1">Away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</section>


          <div className="pt-6 flex justify-center">
            <Link href="/basketball" legacyBehavior>
              <a className="text-sm font-normal px-5 py-2 border border-white rounded-full text-white hover:bg-cyan-600 transition">
                View All Basketball Games
              </a>
            </Link>
          </div>


                   {/* FOOTBALL SECTION */}
      <section className="w-full max-w-3xl space-y-4">
  <h2 className="text-lg font-bold text-white mb-3">Today’s Football Matches</h2>

  <div className="space-y-3 w-full">
    {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
      <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024]">
        <button
          onClick={() => toggleLeague(league)}
          className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
          aria-expanded={openLeagues.includes(league)}
          aria-controls={`${league}-matches`}
        >
          <Image
            src={leagueLogo}
            alt={`${league} logo`}
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
          <span className="flex items-center gap-2">
            {league}
            <Image
              src={`https://flagcdn.com/w20/${countryCode}.png`}
              alt={`${countryCode} flag`}
              width={20}
              height={14}
              className="object-contain rounded-sm"
              unoptimized
            />
          </span>
          <svg className={`ml-auto h-5 w-5 transition-transform ${openLeagues.includes(league) ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {openLeagues.includes(league) && (
          <div id={`${league}-matches`} className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-700 rounded-b-lg">
            {matches.map(({ teams, time, odds }, idx) => (
              <div key={idx} className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold">{teams}</div>
                    <div className="text-xs text-gray-400">Kickoff: {time}</div>
                  </div>
                  <div className="flex gap-3 text-sm font-medium text-center">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          addSelection({
                            id: `${teams}-home`,
                            event: teams,
                            type: "Home",
                            odds: odds.home,
                          })
                        }
                        className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-cyan-700 transition"
                      >
                        {odds?.home?.toFixed(2) ?? "—"}
                      </button>
                      <span className="text-xs text-softText mt-1">Home</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          addSelection({
                            id: `${teams}-draw`,
                            event: teams,
                            type: "Draw",
                            odds: odds.draw!,
                          })
                        }
                        className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-cyan-700 transition"
                      >
                        {odds?.draw?.toFixed(2) ?? "—"}
                      </button>
                      <span className="text-xs text-softText mt-1">Draw</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          addSelection({
                            id: `${teams}-away`,
                            event: teams,
                            type: "Away",
                            odds: odds.away,
                          })
                        }
                        className="bg-gray-900 rounded px-3 py-1 text-white border border-white hover:bg-white hover:text-cyan-700 transition"
                      >
                        {odds?.away?.toFixed(2) ?? "—"}
                      </button>
                      <span className="text-xs text-softText mt-1">Away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-3 text-center">
              <Link href={`/league/${league.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior>
                <a className="text-sm text-electricCyan hover:underline font-medium">
                  View All Matches
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>

  <div className="pt-4 flex justify-center">
    <Link href="/football" legacyBehavior>
      <a className="text-sm px-5 py-2 border border-white rounded-full text-white hover:bg-cyan-600 transition font-medium">
        View All Football Leagues
      </a>
    </Link>
  </div>
</section>

          {/* BET BUILDER HIGHLIGHTS */}
         <section className="mt-6 w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-0">
  <div className="max-w-md mx-auto">
    <BetBuilderCarousel />
  </div>
</section>


          {/* POPULAR ACCUMULATORS */}


<section className="mt-12 w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-6">
  <h2 className="text-lg font-bold text-white mb-4">Popular Accumulators</h2>

  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    arrows={true}
    adaptiveHeight={true}
    className="text-center mx-auto max-w-md"
  >
    {[
      { teams: "Manchester City & Liverpool & Chelsea", odds: 12.5 },
      { teams: "PSG & Barcelona & Real Madrid", odds: 15.2 },
      { teams: "Bayern Munich & Juventus & AC Milan", odds: 14.1 },
    ].map(({ teams, odds }, idx) => (
      <div
        key={idx}
        className="bg-[#0a1024] p-6 rounded-lg border border-gray-700 hover:shadow-neon transition-shadow duration-300 max-w-md mx-auto"
      >
        <div className="text-lg font-semibold text-white">{teams}</div>
        <div className="text-sm text-gray-400 mt-1">Odds: {odds}</div>

        <button
          onClick={() =>
            addSelection({
              id: `${teams}-${odds}`,
              event: teams,
              type: "Accumulator",
              odds: odds,
            })
          }
          className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Add To Bet Slip
        </button>
      </div>
    ))}
  </Slider>
</section>


          <LiveGamesFeed />


                 {/* HORSE RACING SECTION */}
          <h2 className="text-lg font-bold text-white mb-3 mt-8">Today’s Horse Racing</h2>

        import { useBetSlip } from "../context/BetSlipContext";

<section className="mt-12 w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
  <button
    onClick={toggleHorseRacing}
    className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
    aria-expanded={openHorseRacing}
    aria-controls="horse-racing-races"
  >
    <span className="flex items-center gap-2">
      <span>Horse Racing Courses</span>
      <Image src="https://flagcdn.com/w20/gb.png" alt="UK Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
      <Image src="https://flagcdn.com/w20/ie.png" alt="Ireland Flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
    </span>
    <svg className={`ml-auto h-5 w-5 transition-transform ${openHorseRacing ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {openHorseRacing && (
    <div id="horse-racing-races" className="mt-4 space-y-6 px-4 pb-4 border-t border-gray-700 rounded-b-lg">
      {Object.entries(
        horseRaces.reduce((acc: Record<string, typeof horseRaces>, race) => {
          if (!acc[race.track]) acc[race.track] = [];
          acc[race.track].push(race);
          return acc;
        }, {})
      ).map(([track, races], i) => (
        <details key={i} className="border border-gray-700 rounded-lg bg-[#0a1024]">
          <summary className="cursor-pointer list-none px-4 py-3 flex justify-between items-center text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg">
            <span className="flex items-center gap-2">
              {track}
              <Image src={`https://flagcdn.com/w20/${races[0].countryCode}.png`} alt="flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
            </span>
            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div className="space-y-6 px-4 py-4">
            {races.map(({ raceTime, raceName, runners }, j) => (
              <div key={j} className="border border-gray-700 rounded-lg bg-[#0a1024] p-4 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-base">{raceName}</h3>
                  <span className="text-sm text-white font-medium">{raceTime}</span>
                </div>

                <div className="divide-y divide-gray-700">
                  {runners.map(({ number, name, jockey, trainer, form, odds }, idx) => (
                    <div key={idx} className="flex items-center py-3 text-sm">
                      <div className="flex items-center gap-3 w-10 font-bold text-white">
                        <span>{number}</span>
                        <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white font-semibold select-none">
                          {number}
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow ml-2 text-left">
                        <span className="font-semibold text-white">{name}</span>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-0.5">
                          <span>J: {jockey}</span>
                          <span>T: {trainer}</span>
                          <span>F: {form}</span>
                        </div>
                        <button className="text-xs text-electricCyan mt-1 underline hover:text-white transition">
                          More information
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          addSelection({
                            id: `${name}-${odds}`,
                            event: `${track} - ${raceName} - ${name}`,
                            type: "Horse",
                            odds: parseFloat(odds),
                          })
                        }
                        className="ml-auto font-semibold text-green-500 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md hover:bg-green-700 transition"
                      >
                        {odds}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  )}
</section>

          {/* OUTSIDE BUTTON */}
          <div className="pt-6 flex justify-center">
            <Link href="/horse-racing" legacyBehavior>
              <a className="text-sm font-normal px-5 py-2 border border-white rounded-full text-white hover:bg-cyan-600 transition">
                View All Horse Racing
              </a>
            </Link>
          </div>

        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

// ✅ Server side data fetching
export async function getServerSideProps() {
  const todayMatches = [
 {
    league: "Premier League",
    countryCode: "gb",
    leagueLogo: "/logos/premier_league.png",
    matches: [
      { teams: "Manchester City vs Arsenal", time: "20:00", odds: { home: 1.85, draw: 3.4, away: 3.9 } },
      { teams: "Liverpool vs Chelsea", time: "18:30", odds: { home: 2.1, draw: 3.2, away: 3.5 } },
      { teams: "Tottenham vs Newcastle", time: "15:00", odds: { home: 2.0, draw: 3.3, away: 3.7 } },
    ],
  },
  {
    league: "Championship",
    countryCode: "gb",
    leagueLogo: "/logos/championship.png",
    matches: [
      { teams: "Leeds vs Sunderland", time: "15:00", odds: { home: 1.95, draw: 3.4, away: 3.9 } },
      { teams: "West Brom vs Norwich", time: "17:30", odds: { home: 2.05, draw: 3.2, away: 3.6 } },
    ],
  },
  {
    league: "La Liga",
    countryCode: "es",
    leagueLogo: "/logos/la_liga.png",
    matches: [
      { teams: "Real Madrid vs Sevilla", time: "21:00", odds: { home: 1.95, draw: 3.5, away: 4.2 } },
      { teams: "Barcelona vs Villarreal", time: "19:00", odds: { home: 1.8, draw: 3.6, away: 4.5 } },
    ],
  },
  {
    league: "Serie A",
    countryCode: "it",
    leagueLogo: "/logos/serie_a.png",
    matches: [
      { teams: "Juventus vs Napoli", time: "19:45", odds: { home: 2.1, draw: 3.3, away: 3.6 } },
      { teams: "AC Milan vs Roma", time: "21:00", odds: { home: 2.0, draw: 3.4, away: 3.8 } },
    ],
  },
  {
    league: "Bundesliga",
    countryCode: "de",
    leagueLogo: "/bundesliga.png",
    matches: [
      { teams: "Bayern Munich vs Leipzig", time: "20:30", odds: { home: 1.75, draw: 3.6, away: 4.1 } },
      { teams: "Dortmund vs Stuttgart", time: "18:00", odds: { home: 1.9, draw: 3.4, away: 3.9 } },
    ],
  },
  {
    league: "Ligue 1",
    countryCode: "fr",
    leagueLogo: "/logos/ligue_1.png",
    matches: [
      { teams: "PSG vs Lyon", time: "20:45", odds: { home: 1.55, draw: 4.0, away: 5.2 } },
      { teams: "Marseille vs Nice", time: "18:00", odds: { home: 2.2, draw: 3.1, away: 3.3 } },
    ],
  },
  {
    league: "Eredivisie",
    countryCode: "nl",
    leagueLogo: "/logos/eredivisie.png",
    matches: [
      { teams: "Ajax vs Feyenoord", time: "18:30", odds: { home: 2.3, draw: 3.2, away: 2.9 } },
      { teams: "PSV vs AZ Alkmaar", time: "20:00", odds: { home: 1.9, draw: 3.3, away: 3.8 } },
    ],
  },
  {
    league: "Brazilian Série A",
    countryCode: "br",
    leagueLogo: "/logos/Brazilian_Serie_A.png",
    matches: [
      { teams: "Flamengo vs Palmeiras", time: "22:00", odds: { home: 2.2, draw: 3.1, away: 3.4 } },
      { teams: "Corinthians vs Sao Paulo", time: "00:30", odds: { home: 2.4, draw: 3.0, away: 3.0 } },
    ],
  },
  {
    league: "J1 League",
    countryCode: "jp",
    leagueLogo: "/logos/j_1.png",
    matches: [
      { teams: "Kawasaki Frontale vs Gamba Osaka", time: "11:00", odds: { home: 2.0, draw: 3.3, away: 3.6 } },
      { teams: "Urawa Reds vs FC Tokyo", time: "13:00", odds: { home: 2.1, draw: 3.2, away: 3.4 } },
    ],
  },
  {
    league: "Liga MX",
    countryCode: "mx",
    leagueLogo: "/logos/liga_mx.png",
    matches: [
      { teams: "Club América vs Tigres UANL", time: "03:00", odds: { home: 1.9, draw: 3.4, away: 3.6 } },
      { teams: "Chivas Guadalajara vs Pumas", time: "01:00", odds: { home: 2.0, draw: 3.2, away: 3.5 } },
    ],
  },
  {
    league: "Turkish Süper Lig",
    countryCode: "tr",
    leagueLogo: "/logos/super_lig.png",
    matches: [
      { teams: "Galatasaray vs Fenerbahçe", time: "19:00", odds: { home: 2.1, draw: 3.2, away: 3.6 } },
      { teams: "Besiktas vs Trabzonspor", time: "17:00", odds: { home: 2.3, draw: 3.1, away: 3.2 } },
    ],
  },
  {
    league: "MLS",
    countryCode: "us",
    leagueLogo: "/logos/mls.png",
    matches: [
      { teams: "LA Galaxy vs Inter Miami", time: "03:00", odds: { home: 2.4, draw: 3.3, away: 2.8 } },
      { teams: "New York City vs Atlanta United", time: "01:30", odds: { home: 2.1, draw: 3.2, away: 3.5 } },
    ],
  },
  {
    league: "League of Ireland Premier Division",
    countryCode: "ie",
    leagueLogo: "/logos/league_of_ireland.png",
    matches: [
      { teams: "Shamrock Rovers vs Bohemians", time: "19:45", odds: { home: 1.8, draw: 3.5, away: 4.2 } },
    ],
  },
    // You can continue adding more leagues here...
  ];

  const basketballMatches = [
    {
      league: "NBA",
      matches: [
        { teams: "Lakers vs Celtics", time: "02:00", odds: { home: 2.1, away: 1.8 } },
        { teams: "Warriors vs Nuggets", time: "03:30", odds: { home: 2.3, away: 1.7 } },
        { teams: "Bucks vs Heat", time: "01:00", odds: { home: 1.9, away: 2.0 } },
      ],
    },
  ];

  return {
    props: {
      todayMatches,
      basketballMatches,
    },
  };
}
