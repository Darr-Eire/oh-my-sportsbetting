import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PromoCarousel from "../components/PromoCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import { useState } from "react";
import Slider from "react-slick";

import {
  MdSportsSoccer,
  MdAccessTime,
  MdOutlineCasino,
  MdOutlineSportsGolf,
  MdOutlineSportsBasketball,
  MdOutlineSportsMma,
  MdSportsEsports,
  MdOutlineSportsTennis,
  MdOutlineListAlt,
} from "react-icons/md";
import { FaHorse, FaDog } from "react-icons/fa";

const sports = [
  { name: "Football", icon: MdSportsSoccer, slug: "football" },
  { name: "Horse Racing", icon: FaHorse, slug: "horse-racing" },
  { name: "In-Play", icon: MdAccessTime, slug: "in-play" },
  { name: "Lotteries", icon: MdOutlineCasino, slug: "lotteries" },
  { name: "Greyhound Racing", icon: FaDog, slug: "greyhound-racing" },
  { name: "Golf", icon: MdOutlineSportsGolf, slug: "golf" },
  { name: "Basketball", icon: MdOutlineSportsBasketball, slug: "basketball" },
  { name: "UFC", icon: MdOutlineSportsMma, slug: "ufc" },
  { name: "eSports", icon: MdSportsEsports, slug: "esports" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

interface Match {
  teams: string;
  time: string;
  odds: {
    home: number;
    draw?: number;
    away: number;
  };
}

interface LeagueMatches {
  league: string;
  countryCode?: string;
  leagueLogo?: string;
  matches: Match[];
}

export default function Home({
  todayMatches,
  basketballMatches,
}: {
  todayMatches: LeagueMatches[];
  basketballMatches: LeagueMatches[];
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
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 py-3 border-b border-white bg-[#0a1024]">
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
            className="absolute top-full left-0 w-64 bg-[#12182f] z-50 shadow-lg border-r border-gray-700 rounded-br-lg"
            role="menu"
            aria-label="Main navigation"
          >
            {/* Insert your dropdown menu items here */}
          </nav>
        )}

        {/* Main content - add padding top so not hidden behind sticky header */}
        <main className="flex-1 px-4 py-2 pt-[72px] pb-28 flex flex-col items-center text-center">
<PromoCarousel />

          <SportsCarousel />
          <PowerPriceCarousel />

          {/* Basketball Section */}
          <section className="w-full max-w-3xl border border-white rounded-lg">
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
                <span>Today’s NBA Games</span>
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
                className="mt-3 space-y-3 px-4 pb-4 border-t border-white rounded-b-lg"
              >
                {basketballMatches.map((block, i) => (
                  <div key={i}>
                    <h3 className="text-gold font-semibold mb-3 text-lg">{block.league}</h3>
                    <div className="space-y-3">
                      {block.matches.map((match, j) => (
                        <div
                          key={j}
                          className="flex justify-between items-center bg-[#12182f] p-4 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
                        >
                          <div>
                            <div className="text-sm font-semibold">{match.teams}</div>
                            <div className="text-xs text-gray-400">Tip-off: {match.time}</div>
                          </div>
                          <div className="flex gap-3 text-sm font-medium">
                            <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                              {match.odds.home.toFixed(2)}
                            </div>
                            <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                              {match.odds.away.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior>
                        <button className="text-sm text-electricCyan hover:underline font-medium">
                          View All Games
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
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
  className="flex items-center gap-3 w-full px-4 py-2 text-left text-white font-semibold hover:bg-[#14215c] transition"
  aria-expanded={openLeague === league}
  aria-controls={`${league}-matches`}
>
  {leagueLogo && (
    <Image
      src={leagueLogo}
      alt={`${league} logo`}
      width={32}
      height={32}
      className="object-contain"
      unoptimized
    />
  )}
  <span className="flex items-center gap-2">
    <span>{league}</span>
    <Image
      src={`https://flagcdn.com/w20/${countryCode}.png`}
      alt={`${countryCode} flag`}
      width={20}
      height={14}
      className="object-contain rounded-sm"
      unoptimized
    />
  </span>
</button>


                  {openLeague === league && (
                    <div
                      id={`${league}-matches`}
                      className="px-4 pb-4 space-y-3"
                    >
                      {matches.map(({ teams, time, odds }, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
                        >
                          <div>
                            <div className="text-sm font-semibold">{teams}</div>
                            <div className="text-xs text-gray-400">Kickoff: {time}</div>
                          </div>
                          <div className="flex gap-3 text-sm font-medium">
                            <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                              {odds.home.toFixed(2)}
                            </div>
                            <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                              {odds.draw.toFixed(2)}
                            </div>
                            <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
                              {odds.away.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Bet Builder Highlights */}
          <section className="mt-8 w-full max-w-3xl mx-auto">
            <div className="max-w-md mx-auto">
              <BetBuilderCarousel />
            </div>
          </section>

          {/* Popular Accumulators */}
          <section className="mt-8 w-full max-w-3xl mx-auto">
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
                  className="bg-[#12182f] p-6 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300 max-w-md mx-auto"
                >
                  <div className="text-lg font-semibold">{teams}</div>
                  <div className="text-sm text-gray-400 mt-1">Odds: {odds}</div>
                </div>
              ))}
            </Slider>
          </section>

          {/* Horse Racing Section */}
          <section className="mt-8 w-full max-w-3xl border border-white rounded-lg">
            <button
              onClick={toggleHorseRacing}
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
              aria-expanded={openHorseRacing}
              aria-controls="horse-racing-races"
            >
              <span className="flex items-center gap-2">
                <span>Today’s Horse Racing</span>
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
                className={`ml-auto h-5 w-5 transition-transform ${
                  openHorseRacing ? "rotate-180" : ""
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

            {openHorseRacing && (
              <div
                id="horse-racing-races"
                className="mt-4 space-y-6 px-4 pb-4 border-t border-white rounded-b-lg"
              >
                {[
                  {
                    track: "Cheltenham",
                    countryCode: "gb",
                    raceTime: "14:30",
                    raceName: "Novice Hurdle",
                    favorites: ["Galloping Glory", "Storm Chaser", "Misty Valley"],
                    logo: "/logos/cheltenham.png",
                  },
                  {
                    track: "Aintree",
                    countryCode: "gb",
                    raceTime: "15:10",
                    raceName: "Handicap Chase",
                    favorites: ["Iron Duke", "Whisper Wind", "Lucky Star"],
                    logo: "/logos/aintree.png",
                  },
                  {
                    track: "Ascot",
                    countryCode: "gb",
                    raceTime: "16:05",
                    raceName: "Class 2 Stakes",
                    favorites: ["Crimson Jet", "Royal Flame", "Nightfall"],
                    logo: "/logos/ascot.png",
                  },
                  {
                    track: "Down Royal",
                    countryCode: "ie",
                    raceTime: "17:00",
                    raceName: "Flat Handicap",
                    favorites: ["Velvet Thunder", "Bright Banner", "Echo Raider"],
                    logo: "/logos/down_royal.png",
                  },
                ].map(({ track, countryCode, raceTime, raceName, favorites, logo }, i) => (
                  <div key={i} className="border border-gray-700 rounded-lg bg-[#0a1024] p-4">
                    <div className="flex items-center gap-3 mb-2">
                      {logo && (
                        <Image
                          src={logo}
                          alt={`${track} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                          unoptimized
                        />
                      )}
                      <span className="text-white font-semibold text-lg">{track}</span>
                      <Image
                        src={`https://flagcdn.com/w20/${countryCode}.png`}
                        alt={`${countryCode} flag`}
                        width={20}
                        height={14}
                        className="object-contain rounded-sm"
                        unoptimized
                      />
                      <span className="ml-auto text-gray-400">{raceTime}</span>
                    </div>
                    <div className="text-sm italic text-gray-300 mb-2">{raceName}</div>
                    <div className="text-sm text-electricCyan font-medium">
                      Favorites: {favorites.join(", ")}
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
      league: "MLS",
      countryCode: "us",
      leagueLogo: "/logos/mls.png",
      matches: [
        { teams: "LA Galaxy vs Inter Miami", time: "03:00", odds: { home: 2.4, draw: 3.3, away: 2.8 } },
        { teams: "New York City vs Atlanta United", time: "01:30", odds: { home: 2.1, draw: 3.2, away: 3.5 } },
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
