import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [promotionsOpen, setPromotionsOpen] = useState(false);
  const [competitionsOpen, setCompetitionsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="bg-[#0a1024] border-b border-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl hover:text-electricCyan transition">☰</button>
        <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white font-futuristic">OhMySportsbetting</h1>
        <Link href="/login">
          <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full hover:brightness-110 transition">Login</button>
        </Link>
      </div>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-60 bg-[#12182f] border-r border-gray-700 shadow-lg rounded-br-lg p-4">

          <ul className="space-y-3">

            {/* Account */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setAccountOpen(!accountOpen)}>
                <span>Account</span> {accountOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {accountOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
                  <li><Link href="/my-bets" className="hover:text-electricCyan">📋 My Bets</Link></li>
                  <li><Link href="/deposit" className="hover:text-electricCyan">💰 Deposit</Link></li>
                  <li><Link href="/withdraw" className="hover:text-electricCyan">💸 Withdraw</Link></li>
                  <li><Link href="/history" className="hover:text-electricCyan">📊 Bet History</Link></li>
                  <li><Link href="/settings" className="hover:text-electricCyan">⚙️ Settings</Link></li>
                </ul>
              )}
            </li>

            {/* Sports */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setSportsOpen(!sportsOpen)}>
                <span>Sports</span> {sportsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            {sportsOpen && (

  <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
    <li><Link href="/sports/football" className="hover:text-electricCyan">⚽ Football</Link></li>
    <li><Link href="/sports/basketball" className="hover:text-electricCyan">🏀 Basketball</Link></li>
    <li><Link href="/sports/ufc" className="hover:text-electricCyan">🥊 UFC / MMA</Link></li>
    <li><Link href="/sports/tennis" className="hover:text-electricCyan">🎾 Tennis</Link></li>
    <li><Link href="/sports/esports" className="hover:text-electricCyan">🎮 eSports</Link></li>
    <li><Link href="/sports/golf" className="hover:text-electricCyan">⛳ Golf</Link></li>
    <li><Link href="/sports/greyhound-racing" className="hover:text-electricCyan">🐕 Greyhounds</Link></li>
    <li><Link href="/sports/horse-racing" className="hover:text-electricCyan">🏇 Horse Racing</Link></li>
    <li><Link href="/sports/in-play" className="hover:text-electricCyan">🎮 In-Play</Link></li>
  </ul>
)}


            </li>

            

            {/* Promotions */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setPromotionsOpen(!promotionsOpen)}>
                <span>Promotions</span> {promotionsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {promotionsOpen && (
                <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
                  <li><Link href="/promotions/welcome-offer" className="hover:text-electricCyan">🎁 Welcome Offer</Link></li>
                  <li><Link href="/promotions/free-bets" className="hover:text-electricCyan">🎯 Free Bets</Link></li>
                  <li><Link href="/promotions/cashback" className="hover:text-electricCyan">💸 Cashback Offers</Link></li>
                  <li><Link href="/promotions/boosts" className="hover:text-electricCyan">🚀 Odds Boosts</Link></li>
                  <li><Link href="/promotions/loyalty" className="hover:text-electricCyan">🎖 Loyalty Club</Link></li>
                </ul>
              )}
            </li>

            {/* Competitions & Leaderboards */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setCompetitionsOpen(!competitionsOpen)}>
                <span>Competitions</span> {competitionsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
             {competitionsOpen && (
  <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
    <li><Link href="/competitions/weekly-leaderboard" className="hover:text-electricCyan">🏅 Weekly Leaderboard</Link></li>
    <li><Link href="/competitions/monthly-jackpot" className="hover:text-electricCyan">💎 Monthly Jackpot</Link></li>
    <li><Link href="/competitions/free-to-play" className="hover:text-electricCyan">🎮 Free-to-Play Tournaments</Link></li>
    <li><Link href="/competitions/predictor-challenges" className="hover:text-electricCyan">📊 Predictor Challenges</Link></li>
  </ul>
)}

            </li>

            {/* Support */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setSupportOpen(!supportOpen)}>
                <span>Support</span> {supportOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            {supportOpen && (
  <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
    <li><Link href="/support/help" className="hover:text-electricCyan">🛠 Help Center</Link></li>
    <li><Link href="/support/contact" className="hover:text-electricCyan">💬 Contact Us</Link></li>
    <li><Link href="/support/faq" className="hover:text-electricCyan">❓ FAQs</Link></li>
    <li><Link href="/support/terms" className="hover:text-electricCyan">📄 Terms & Conditions</Link></li>
    <li><Link href="/support/privacy" className="hover:text-electricCyan">🔒 Privacy Policy</Link></li>
  </ul>
)}

            </li>

            {/* About */}
            <li>
              <div className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition" onClick={() => setAboutOpen(!aboutOpen)}>
                <span>About</span> {aboutOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
           {aboutOpen && (
  <ul className="mt-2 ml-3 space-y-2 text-sm text-gray-300">
    <li><Link href="/support/about-us" className="hover:text-electricCyan">ℹ️ About Us</Link></li>
    <li><Link href="/support/licensing" className="hover:text-electricCyan">📄 Licensing</Link></li>
    <li><Link href="/support/partners" className="hover:text-electricCyan">🤝 Partners</Link></li>
    <li><Link href="/support/affiliates" className="hover:text-electricCyan">💼 Affiliates</Link></li>
    <li><Link href="/support/developer" className="hover:text-electricCyan">🧩 Developer</Link></li>
  </ul>
)}

            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}
