import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PromoCarousel from "../components/PromoCarousel";
import PowerPriceCarousel from "../components/PowerPriceCarousel";
import BetBuilderCarousel from "../components/BetBuilderCarousel";
import SportsCarousel from "../components/SportsCarousel";
import { useState } from "react";

import {
  MdSportsSoccer,
  MdAccessTime,
  MdOutlineCasino,
  MdOutlineSportsGolf,
  MdOutlineSportsBasketball,
  MdOutlineSportsMma,
  MdSportsEsports,
  MdOutlineSportsTennis,
  MdOutlineSportsCricket,
  MdOutlineSportsVolleyball,
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
  { name: "Table Tennis", icon: MdOutlineSportsTennis, slug: "table-tennis" },
  { name: "Cricket", icon: MdOutlineSportsCricket, slug: "cricket" },
  { name: "Volleyball", icon: MdOutlineSportsVolleyball, slug: "volleyball" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

const todayMatches = [
  {
    league: "Premier League",
    matches: [
      { teams: "Manchester City vs Arsenal", time: "20:00", odds: { home: 1.85, draw: 3.4, away: 3.9 } },
      { teams: "Liverpool vs Chelsea", time: "18:30", odds: { home: 2.1, draw: 3.2, away: 3.5 } },
      { teams: "Tottenham vs Newcastle", time: "15:00", odds: { home: 2.0, draw: 3.3, away: 3.7 } },
    ],
  },
  {
    league: "La Liga",
    matches: [
      { teams: "Real Madrid vs Sevilla", time: "21:00", odds: { home: 1.95, draw: 3.5, away: 4.2 } },
      { teams: "Barcelona vs Villarreal", time: "19:00", odds: { home: 1.8, draw: 3.6, away: 4.5 } },
    ],
  },
  {
    league: "Serie A",
    matches: [
      { teams: "Juventus vs Napoli", time: "19:45", odds: { home: 2.1, draw: 3.3, away: 3.6 } },
      { teams: "AC Milan vs Roma", time: "21:00", odds: { home: 2.0, draw: 3.4, away: 3.8 } },
    ],
  },
  {
    league: "Bundesliga",
    matches: [
      { teams: "Bayern Munich vs Leipzig", time: "20:30", odds: { home: 1.75, draw: 3.6, away: 4.1 } },
      { teams: "Dortmund vs Stuttgart", time: "18:00", odds: { home: 1.9, draw: 3.4, away: 3.9 } },
    ],
  },
  {
    league: "Ligue 1",
    matches: [
      { teams: "PSG vs Lyon", time: "20:45", odds: { home: 1.55, draw: 4.0, away: 5.2 } },
      { teams: "Marseille vs Nice", time: "18:00", odds: { home: 2.2, draw: 3.1, away: 3.3 } },
    ],
  },
  {
    league: "Eredivisie",
    matches: [
      { teams: "Ajax vs Feyenoord", time: "18:30", odds: { home: 2.3, draw: 3.2, away: 2.9 } },
      { teams: "PSV vs AZ Alkmaar", time: "20:00", odds: { home: 1.9, draw: 3.3, away: 3.8 } },
    ],
  },
  {
    league: "MLS",
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Oh My Sportsbets</title>
        <meta name="description" content="Bet on sports using Pi Network" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">

        {/* Header */}
        <header className="w-full flex items-center justify-between px-4 py-3 border-b border-white">
          {/* Left – Menu Button */}
          <button
            className="text-2xl hover:text-electricCyan transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          {/* Center – Logo/Title */}
          <h1 className="text-lg font-bold font-futuristic tracking-wide">
            OhMySportsbetting
          </h1>

          {/* Right – Login */}
          <Link href="/login" passHref>
            <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full shadow hover:brightness-110 transition">
              Login
            </button>
          </Link>
        </header>

        {/* Dropdown Menu */}
        {menuOpen && (
          <nav
            className="absolute top-[60px] left-0 w-64 bg-[#12182f] z-50 shadow-lg border-r border-gray-700 rounded-br-lg"
            role="menu"
            aria-label="Main navigation"
          >
            <ul className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium text-white">
              <li>
                <Link href="/" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/sports" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>⚽ All Sports</a>
                </Link>
              </li>
              <li>
                <Link href="/in-play" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>📊 Live In-Play</a>
                </Link>
              </li>
              <li>
                <Link href="/fixtures" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>📅 Upcoming Fixtures</a>
                </Link>
              </li>
              <li>
                <Link href="/my-bets" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🧾 My Bets</a>
                </Link>
              </li>
              <li>
                <Link href="/competitions" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🏆 Competitions</a>
                </Link>
              </li>
              <li>
                <Link href="/power-prices" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🎯 Boosted Odds</a>
                </Link>
              </li>

              {/* My Account Dropdown */}
              <li>
                <details className="group" role="group" aria-label="My Account Options">
                  <summary className="cursor-pointer list-none flex justify-between items-center hover:text-electricCyan" tabIndex={0}>
                    👤 My Account
                    <span className="ml-auto transform group-open:rotate-90 transition-transform" aria-hidden="true">›</span>
                  </summary>
                  <div className="px-4 py-2 border-b border-gray-700">
                    <input
                      type="text"
                      placeholder="🔍 Search menu..."
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#1c1c2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electricCyan"
                      aria-label="Search menu"
                    />
                  </div>

                  <ul className="mt-2 ml-4 flex flex-col space-y-2">
                    <li>
                      <Link href="/wallet" legacyBehavior>
                        <a className="hover:text-electricCyan" role="menuitem" tabIndex={0}>💼 Wallet</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/rewards" legacyBehavior>
                        <a className="hover:text-electricCyan" role="menuitem" tabIndex={0}>🎁 Rewards</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/referrals" legacyBehavior>
                        <a className="hover:text-electricCyan" role="menuitem" tabIndex={0}>📥 Refer & Earn</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account-settings" legacyBehavior>
                        <a className="hover:text-electricCyan" role="menuitem" tabIndex={0}>⚙️ Settings</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/bet-history" legacyBehavior>
                        <a className="hover:text-electricCyan" role="menuitem" tabIndex={0}>🔄 Bet History</a>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link href="/tips" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>💡 Betting Tips</a>
                </Link>
              </li>
              <li>
                <Link href="/stats" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>📈 Stats Center</a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>❓ How to Bet</a>
                </Link>
              </li>
              <li>
                <Link href="/rules" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>📘 Rules</a>
                </Link>
              </li>
              <li>
                <Link href="/support" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>💬 Contact Support</a>
                </Link>
              </li>
              <li>
                <Link href="/faq" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>📄 FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gambling" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🔐 Responsible Gambling</a>
                </Link>
              </li>
              <li>
                <Link href="/terms" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>👨‍⚖️ Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🔒 Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:underline">About</a>
                </Link>
              </li>
              <li>
                <Link href="/roadmap" legacyBehavior>
                  <a role="menuitem" tabIndex={0}>🧭 Roadmap</a>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <main className="flex-1 px-4 py-6 pb-28 flex flex-col items-center text-center">
          <PromoCarousel />
          <SportsCarousel />

          <PowerPriceCarousel />

          {/* Basketball Section */}
          <section className="mt-12 w-full max-w-3xl">
            <h2 className="text-lg font-bold text-white mb-6">Today’s NBA Games</h2>
            {basketballMatches.map((block, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-gold font-semibold mb-4 text-lg">{block.league}</h3>
                <div className="space-y-3">
                  {block.matches.map((match, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center bg-deepBlue p-4 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
                    >
                      <div>
                        <div className="text-sm font-medium">{match.teams}</div>
                        <div className="text-xs text-gray-400">Tip-off: {match.time}</div>
                      </div>
                      <div className="flex gap-2 text-sm">
                        <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded shadow-neon">
                          Home {match.odds.home.toFixed(2)}
                        </button>
                        <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded shadow-neon">
                          Away {match.odds.away.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior>
                    <button className="text-sm text-electricCyan hover:underline font-medium">
                      View All Games
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* Today's Football Matches */}
          <section className="mt-10 w-full max-w-3xl">
            <h2 className="text-lg font-bold text-white mb-6">Today’s Football Matches</h2>
          {todayMatches.map((block, i) => (
  <div key={i} className="mb-8">
    <h3 className="text-gold font-semibold mb-4 text-lg">{block.league}</h3>
    <div>
      {block.matches.map((match, j) => {
        const teams = match.teams.split(" vs ");

        return (
          <div key={j} className="mb-6">
            <div className="bg-[#0a1024] p-4 rounded-lg border border-gray-700 hover:shadow-neon transition-shadow flex justify-between items-center text-left">
              <div>
                <div className="text-sm font-semibold text-white">{teams[0]}</div>
                <div className="text-sm font-semibold text-white">{teams[1]}</div>
                <div className="text-xs text-gray-400 mt-1">Kickoff: {match.time}</div>
              </div>

          <div className="flex gap-3 text-sm font-medium">
  <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
    {match.odds.home.toFixed(2)}
  </div>
  <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
    {match.odds.draw.toFixed(2)}
  </div>
  <div className="bg-gray-900 rounded px-3 py-1 text-white border border-white">
    {match.odds.away.toFixed(2)}
  </div>
</div>

            </div>

            <button className="flex items-center gap-2 text-xs mt-1 text-gray-500 hover:text-green-400">
              <span className="font-bold text-lg">+</span> Top Markets
            </button>
          </div>
        );
      })}
    </div>
    <div className="mt-4">
      <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`} legacyBehavior>
        <button className="text-sm text-electricCyan hover:underline font-medium">
          View All Matches
        </button>
      </Link>
    </div>
  </div>
))}
          </section>

          {/* Bet Builder Highlights */}
          <section className="mt-12 w-full max-w-3xl">
            <BetBuilderCarousel />
          </section>

          {/* Horse Racing */}
          <section className="mt-12 w-full max-w-3xl">
            <h2 className="text-lg font-bold text-white mb-4 text-center">
              🐎 Today’s Horse Racing – Monday, May 26
            </h2>

            <div className="space-y-8">
              {[{
                track: "Cheltenham",
                time: "14:30",
                race: "Novice Hurdle",
                favorites: ["Galloping Glory", "Storm Chaser", "Misty Valley"],
              }, {
                track: "Aintree",
                time: "15:10",
                race: "Handicap Chase",
                favorites: ["Iron Duke", "Whisper Wind", "Lucky Star"],
              }, {
                track: "Ascot",
                time: "16:05",
                race: "Class 2 Stakes",
                favorites: ["Crimson Jet", "Royal Flame", "Nightfall"],
              }, {
                track: "Newbury",
                time: "17:00",
                race: "Flat Handicap",
                favorites: ["Velvet Thunder", "Bright Banner", "Echo Raider"],
              }].map((race, idx) => {
                const slug = race.track.toLowerCase().replace(/\s+/g, "-");

                return (
                  <div key={idx} className="space-y-2">
                    <Link href={`/racing/${slug}`} legacyBehavior>
                      <a className="bg-[#0a1024] text-white p-4 rounded-xl border border-[#2a2a3d] hover:shadow-neon hover:bg-[#0f152e] transition-shadow cursor-pointer block">
                        <div className="font-semibold text-sm mb-1">
                          {race.track} – {race.time}
                        </div>
                        <div className="text-sm italic text-gray-300 mb-2">{race.race}</div>
                        <div className="text-sm">
                          Favorites:{" "}
                          <span className="text-electricCyan font-medium">
                            {race.favorites.join(", ")}
                          </span>
                        </div>
                      </a>
                    </Link>

                    <div className="text-center">
                      <Link href={`/racing/${slug}`} legacyBehavior>
                        <a className="mt-1 text-sm text-electricCyan hover:underline font-medium inline-block">
                          View All {race.track} Races
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
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
