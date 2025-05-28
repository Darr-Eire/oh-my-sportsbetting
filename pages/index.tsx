import Head from "next/head";
import Link from "next/link";
import BottomNav from "../components/BottomNav";
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
          >
            ☰
          </button>

          {/* Center – Logo/Title */}
          <h1 className="text-lg font-bold font-futuristic tracking-wide">
            OhMySportsbetting
          </h1>

          {/* Right – Login */}
          <a href="/login">
            <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full shadow hover:brightness-110 transition">
              Login
            </button>
          </a>
        </header>

        {/* Dropdown Menu */}
  {menuOpen && (
  <div className="absolute top-[60px] left-0 w-64 bg-[#12182f] z-50 shadow-lg border-r border-gray-700 rounded-br-lg">
 <ul className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium text-white">
  <li><a href="/">🏠 Home</a></li>
  <li><a href="/sports">⚽ All Sports</a></li>
  <li><a href="/in-play">📊 Live In-Play</a></li>
  <li><a href="/fixtures">📅 Upcoming Fixtures</a></li>
  <li><a href="/my-bets">🧾 My Bets</a></li>
  <li><a href="/competitions">🏆 Competitions</a></li>
  <li><a href="/power-prices">🎯 Boosted Odds</a></li>

  {/* My Account Dropdown */}
  <li>
    <details className="group">
      <summary className="cursor-pointer list-none flex justify-between items-center hover:text-electricCyan">
        👤 My Account
        <span className="ml-auto transform group-open:rotate-90 transition-transform">›</span>
      </summary>
      <div className="px-4 py-2 border-b border-gray-700">
  <input
    type="text"
    placeholder="🔍 Search menu..."
    className="w-full px-3 py-2 text-sm rounded-md bg-[#1c1c2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electricCyan"
  />
</div>

      <ul className="mt-2 ml-4 flex flex-col space-y-2">
        <li><a href="/wallet" className="hover:text-electricCyan">💼 Wallet</a></li>
        <li><a href="/rewards" className="hover:text-electricCyan">🎁 Rewards</a></li>
        <li><a href="/referrals" className="hover:text-electricCyan">📥 Refer & Earn</a></li>
        <li><a href="/account-settings" className="hover:text-electricCyan">⚙️ Settings</a></li>
        <li><a href="/bet-history" className="hover:text-electricCyan">🔄 Bet History</a></li>
      </ul>
    </details>
  </li>

  <li><a href="/tips">💡 Betting Tips</a></li>
  <li><a href="/stats">📈 Stats Center</a></li>
  <li><a href="/how-to-play">❓ How to Bet</a></li>
  <li><a href="/rules">📘 Rules</a></li>
  <li><a href="/support">💬 Contact Support</a></li>
  <li><a href="/faq">📄 FAQ</a></li>
  <li><a href="/responsible-gambling">🔐 Responsible Gambling</a></li>
  <li><a href="/terms">👨‍⚖️ Terms & Conditions</a></li>
  <li><a href="/privacy">🔒 Privacy Policy</a></li>
  <li><a href="/about">🙌 About</a></li>
  <li><a href="/roadmap">🧭 Roadmap</a></li>
</ul>

  </div>
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
                  <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`}>
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
                <div className="space-y-3">
                  {block.matches.map((match, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center bg-deepBlue p-4 rounded-lg border border-white hover:shadow-neon transition-shadow duration-300"
                    >
                      <div>
                        <div className="text-sm font-medium">{match.teams}</div>
                        <div className="text-xs text-gray-400">Kickoff: {match.time}</div>
                      </div>
                      <div className="flex gap-2 text-sm">
                        <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded shadow-neon">
                          Home {match.odds.home.toFixed(2)}
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded shadow-neon">
                          Draw {match.odds.draw.toFixed(2)}
                        </button>
                        <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded shadow-neon">
                          Away {match.odds.away.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href={`/league/${block.league.toLowerCase().replace(/\s+/g, "-")}`}>
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
    {[
      {
        track: "Cheltenham",
        time: "14:30",
        race: "Novice Hurdle",
        favorites: ["Galloping Glory", "Storm Chaser", "Misty Valley"],
      },
      {
        track: "Aintree",
        time: "15:10",
        race: "Handicap Chase",
        favorites: ["Iron Duke", "Whisper Wind", "Lucky Star"],
      },
      {
        track: "Ascot",
        time: "16:05",
        race: "Class 2 Stakes",
        favorites: ["Crimson Jet", "Royal Flame", "Nightfall"],
      },
      {
        track: "Newbury",
        time: "17:00",
        race: "Flat Handicap",
        favorites: ["Velvet Thunder", "Bright Banner", "Echo Raider"],
      },
    ].map((race, idx) => {
      const slug = race.track.toLowerCase().replace(/\s+/g, "-");

      return (
        <div key={idx} className="space-y-2">
          <Link href={`/racing/${slug}`}>
            <div className="bg-[#0a1024] text-white p-4 rounded-xl border border-[#2a2a3d] hover:shadow-neon hover:bg-[#0f152e] transition-shadow cursor-pointer">
              <div className="font-semibold text-sm mb-1">{race.track} – {race.time}</div>
              <div className="text-sm italic text-gray-300 mb-2">{race.race}</div>
              <div className="text-sm">
                Favorites:{" "}
                <span className="text-electricCyan font-medium">
                  {race.favorites.join(", ")}
                </span>
              </div>
            </div>
          </Link>

          <div className="text-center">
            <Link href={`/racing/${slug}`}>
              <button className="mt-1 text-sm text-electricCyan hover:underline font-medium">
                View All {race.track} Races
              </button>
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
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/roadmap" className="hover:underline">Roadmap</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Support</h4>
              <ul className="space-y-1">
                <li><a href="/how-to-play" className="hover:underline">How to Bet with Pi</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/support" className="hover:underline">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Legal</h4>
              <ul className="space-y-1">
                <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/responsible-gambling" className="hover:underline">Responsible Gambling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Powered by Pi</h4>
              <p className="text-gray-300 text-sm mb-3">100% Pi-based betting — no fiat, no banks.</p>
              <div className="flex gap-3">
                <a href="https://x.com" className="hover:text-electricCyan">Twitter</a>
                <a href="https://t.me" className="hover:text-electricCyan">Telegram</a>
                <a href="https://discord.gg" className="hover:text-electricCyan">Discord</a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/pi-logo.png" alt="Pi Network" className="h-8" />
              <span className="text-gray-300">Transactions powered by the Pi SDK</span>
            </div>
            <div className="flex gap-4 items-center">
              <img src="/18plus.png" alt="18+" className="h-6" />
              <img src="/responsible.png" alt="Responsible" className="h-6" />
            </div>
          </div>

          <div className="text-center text-xs mt-8 text-gray-400">
            © {new Date().getFullYear()} OhMySports. Built for Pioneers. Play smart. Bet responsibly.
          </div>
        </footer>

        <BottomNav />
      </div>
    </>
  );
}
   
