import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PromoCarousel from "../components/PromoCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import { useState } from "react";
import Slider from "react-slick";
import { horseRaces } from "../data/horseRaces";
import LiveGamesFeed from "../components/LiveGamesFeed";

import {
  FaFutbol,
  FaHorseHead,
  FaStopwatch,
  FaTicketAlt,
  FaDog,
  FaGolfBall,
  FaBasketballBall,
  FaUserNinja,
  FaGamepad,
  FaThList
} from "react-icons/fa";

const sports = [
  { name: "Football", icon: FaFutbol, slug: "football" },
  { name: "Horse Racing", icon: FaHorseHead, slug: "horse-racing" },
  { name: "In-Play", icon: FaStopwatch, slug: "in-play" },
  { name: "Lotteries", icon: FaTicketAlt, slug: "lotteries" },
  { name: "Greyhound Racing", icon: FaDog, slug: "greyhound-racing" },
  { name: "Golf", icon: FaGolfBall, slug: "golf" },
  { name: "Basketball", icon: FaBasketballBall, slug: "basketball" },
  { name: "UFC", icon: FaUserNinja, slug: "ufc" },
  { name: "eSports", icon: FaGamepad, slug: "esports" },
  { name: "A–Z", icon: FaThList, slug: "all-sports" },
];




type Match = {
  teams: string;
  time: string;
  odds: {
    home: number;
    draw?: number;
    away: number;
  };
};

type LeagueBlock = {
  league: string;
  countryCode: string;
  leagueLogo: string;
  matches: Match[];
};

type BasketballBlock = {
  league: string;
  matches: Match[];
};

export default function Home({
  todayMatches,
  basketballMatches,
}: {
  todayMatches: LeagueBlock[];
  basketballMatches: BasketballBlock[];
}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [openLeague, setOpenLeague] = useState<string | null>(null);
  const [openBasketball, setOpenBasketball] = useState(false);
  const [openHorseRacing, setOpenHorseRacing] = useState(false);

  const toggleLeague = (leagueName: string) => {
    setOpenLeague((prev) => (prev === leagueName ? null : leagueName));
  };

  const toggleHorseRacing = () => setOpenHorseRacing((prev) => !prev);

  return (
    <>
      <Head>
        <title>Oh My Sportsbets</title>
        <meta name="description" content="Bet on sports using Pi Network" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        {/* Header */}
        <header className="w-full flex items-center justify-between px-4 py-2 border-b border-white">
          <button
            className="text-2xl hover:text-electricCyan transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <h1 className="text-lg font-bold font-futuristic tracking-wide">
            OhMySportsbetting
          </h1>

          <Link href="/login" passHref>
            <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full shadow hover:brightness-110 transition">
              Login
            </button>
          </Link>
        </header>

        {/* Dropdown Menu */}
        {menuOpen && (
          <nav
            className="absolute top-[56px] left-0 w-64 bg-[#12182f] z-50 shadow-lg border-r border-gray-700 rounded-br-lg"
            role="menu"
            aria-label="Main navigation"
          >
            {/* Your dropdown menu JSX here */}
          </nav>
        )}

        <main className="flex-1 px-4 py-4 pb-24 flex flex-col items-center text-center space-y-6 sm:space-y-8">
<PromoCarousel />


     

          <SportsCarousel />
          <PowerPriceCarousel /> 
        

          {/* Basketball Section */}
 <h2 className="text-lg font-bold text-white mb-3 mt-8">Today’s Basketball Games</h2>

<section className="w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
  <button
    onClick={() => setOpenBasketball(!openBasketball)}
    className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
    aria-expanded={openBasketball}
    aria-controls="basketball-matches"
  >
    <Image
      src="/logos/nba.png"
      alt="NBA Logo"
      width={32}
      height={32}
      className="object-contain"
      unoptimized
    />
    <span className="flex items-center gap-2">
      <span>NBA Games</span>
      <Image
        src="https://flagcdn.com/w20/us.png"
        alt="USA Flag"
        width={20}
        height={14}
        className="object-contain rounded-sm"
        unoptimized
      />
    </span>
    <svg
      className={`ml-auto h-5 w-5 transition-transform ${
        openBasketball ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {openBasketball && (
    <div
      id="basketball-matches"
      className="mt-3 space-y-4 px-4 pb-6 border-t border-gray-700 rounded-b-lg"
    >
      {basketballMatches.map((block, i) => (
        <div key={i}>
          <h3 className="text-gold font-semibold mb-3 text-lg">{block.league}</h3>
          <div className="space-y-3">
            {block.matches.map((match, j) => (
              <div
                key={j}
                className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold text-white">{match.teams}</div>
                    <div className="text-xs text-gray-400">Tip-off: {match.time}</div>
                  </div>
                  <div className="flex gap-4 text-sm font-medium text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                        {match.odds?.home?.toFixed(2) ?? "—"}
                      </div>
                      <span className="text-xs text-softText mt-1">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                        {match.odds?.away?.toFixed(2) ?? "—"}
                      </div>
                      <span className="text-xs text-softText mt-1">Away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View League Matches Button */}
        <div className="pt-3 text-center">
  <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior>
    <a className="text-sm text-electricCyan hover:underline font-medium">
      View All Matches
    </a>
  </Link>
</div>

        </div>
      ))}

      {/* Centered Global Basketball Link */}
      <div className="pt-6 flex justify-center">
        <Link href="/basketball" legacyBehavior>
          <a className="text-sm px-5 py-2 border border-white
 rounded-full text-white hover:bg-cyan-600 transition font-medium">
            View All Basketball Games
          </a>
        </Link>
      </div>
    </div>
  )}
</section>





          {/* Today's Football Matches */}
 <section className="w-full max-w-3xl space-y-4">
  <h2 className="text-lg font-bold text-white mb-3">Today’s Football Matches</h2>

  <div className="space-y-3 w-full">
    {todayMatches.map(({ league, countryCode, leagueLogo, matches }) => (
      <div key={league} className="border border-gray-700 rounded-lg bg-[#0a1024]">
        <button
          onClick={() => toggleLeague(league)}
          className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
          aria-expanded={openLeague === league}
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
          <svg
            className={`ml-auto h-5 w-5 transition-transform ${
              openLeague === league ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {openLeague === league && (
          <div
            id={`${league}-matches`}
            className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-700 rounded-b-lg"
          >
            {matches.map(({ teams, time, odds }, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold">{teams}</div>
                    <div className="text-xs text-gray-400">Kickoff: {time}</div>
                  </div>
                  <div className="flex gap-3 text-sm font-medium text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                        {odds?.home?.toFixed(2) ?? "—"}
                      </div>
                      <span className="text-xs text-softText mt-1">Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                        {odds?.draw?.toFixed(2) ?? "—"}
                      </div>
                      <span className="text-xs text-softText mt-1">Draw</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                        {odds?.away?.toFixed(2) ?? "—"}
                      </div>
                      <span className="text-xs text-softText mt-1">Away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Per-League View Button */}
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

  {/* Global "View All Football M" Button */}
  <div className="pt-4 flex justify-center">
    <Link href="/football" legacyBehavior>
      <a className="text-sm px-5 py-2 border border-white
 rounded-full text-white hover:bg-cyan-600 transition font-medium">
        View All Football Leagues
      </a>
    </Link>
  </div>
</section>





         {/* Bet Builder Highlights */}
<section className="mt-12 w-full max-w-3xl mx-auto border border-gray-700 rounded-lg bg-[#0a1024] p-6">
  <div className="max-w-sm mx-auto">
    <BetBuilderCarousel />
  </div>
</section>


{/* Popular Accumulators */}
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
      </div>
    ))}
  </Slider>
</section>
       <LiveGamesFeed />

{/* Horse Racing Section */}
<h2 className="text-lg font-bold text-white mb-3 mt-8">Today’s Horse Racing</h2>

<section className="mt-12 w-full max-w-3xl border border-gray-700 bg-[#0a1024] rounded-lg">
  <button
    onClick={toggleHorseRacing}
    className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
    aria-expanded={openHorseRacing}
    aria-controls="horse-racing-races"
  >
    <span className="flex items-center gap-2">
      <span>Horse Racing Courses</span>
      <Image
        src="https://flagcdn.com/w20/gb.png"
        alt="UK Flag"
        width={20}
        height={14}
        className="object-contain rounded-sm"
        unoptimized
      />
      <Image
        src="https://flagcdn.com/w20/ie.png"
        alt="Ireland Flag"
        width={20}
        height={14}
        className="object-contain rounded-sm"
        unoptimized
      />
    </span>
    <svg
      className={`ml-auto h-5 w-5 transition-transform ${openHorseRacing ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {openHorseRacing && (
    <div
      id="horse-racing-races"
      className="mt-4 space-y-6 px-4 pb-4 border-t border-gray-700 rounded-b-lg"
    >
      {horseRaces.map(({ track, countryCode, raceTime, raceName, runners }, i) => (
        <div key={i} className="border border-gray-700 rounded-lg bg-[#0a1024] p-4 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-bold text-base">{track}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white font-medium">{raceTime}</span>
              <Image
                src={`https://flagcdn.com/w20/${countryCode}.png`}
                alt={`${countryCode} flag`}
                width={20}
                height={14}
                className="object-contain rounded-sm"
                unoptimized
              />
            </div>
          </div>

          <div className="text-sm italic text-gray-300">{raceName}</div>

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

                <div className="ml-auto font-semibold text-green-500 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md">
                  {odds}
                </div>
              </div>
            ))}
          </div>

          {/* View More Horses per Race */}
          <div className="pt-2 text-center">
            <button className="border border-gray-700 text-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition text-sm">
              View More Horses
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</section>






        </main>

        {/* Footer */}
        <footer className="bg-[#0a1024] text-white text-sm px-6 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Company</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a className="hover:underline">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" legacyBehavior>
                    <a className="hover:underline">Roadmap</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    <a className="hover:underline">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Support</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/how-to-play" legacyBehavior>
                    <a className="hover:underline">How to Bet with Pi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" legacyBehavior>
                    <a className="hover:underline">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support" legacyBehavior>
                    <a className="hover:underline">Contact Support</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/terms" legacyBehavior>
                    <a className="hover:underline">Terms of Use</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" legacyBehavior>
                    <a className="hover:underline">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gambling" legacyBehavior>
                    <a className="hover:underline">Responsible Gambling</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Powered by Pi</h4>
              <p className="text-gray-300 text-sm mb-3">100% Pi-based betting — no fiat, no banks.</p>
              <div className="flex gap-3">
                <a href="https://x.com" className="hover:text-electricCyan">
                  Twitter
                </a>
                <a href="https://t.me" className="hover:text-electricCyan">
                  Telegram
                </a>
                <a href="https://discord.gg" className="hover:text-electricCyan">
                  Discord
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image src="/pi-logo.png" alt="Pi Network" width={32} height={32} />
              <span className="text-gray-300">Transactions powered by the Pi SDK</span>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/18plus.png" alt="18+" width={24} height={24} />
              <Image src="/responsible.png" alt="Responsible" width={24} height={24} />
            </div>
          </div>

          <div className="text-center text-xs mt-8 text-gray-400">
            © {new Date().getFullYear()} OhMySports. Built for Pioneers. Play smart. Bet responsibly.
          </div>
        </footer>
      </div>
    </>
  );
}

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
