import { useState, useEffect, useRef } from "react";
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

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="bg-[#0a1024] border-b border-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white text-2xl hover:text-electricCyan transition"
        >
          ☰
        </button>

        <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white font-futuristic">
          OhMySportsbetting
        </h1>

        <Link href="/login">
          <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full hover:brightness-110 transition">
            Login
          </button>
        </Link>
      </div>

      {menuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-full left-0 w-48 bg-[#12182f] border-r border-gray-700 shadow-lg rounded-br-lg p-4"
        >
          <ul className="space-y-3">

            <li>
              <Link href="/" className="flex items-center hover:text-electricCyan transition">Home</Link>
            </li>

            {/* Account */}
            <Dropdown
              label="Account"
              open={accountOpen}
              setOpen={setAccountOpen}
              links={[
                { href: "/my-bets", label: "📋 My Bets" },
                { href: "/deposit", label: "💰 Deposit" },
                { href: "/withdraw", label: "💸 Withdraw" },
                { href: "/history", label: "📊 Bet History" },
                { href: "/settings", label: "⚙️ Settings" },
              ]}
            />

            {/* Sports */}
            <Dropdown
              label="Sports"
              open={sportsOpen}
              setOpen={setSportsOpen}
              links={[
                { href: "/sports/football", label: "⚽ Football" },
                { href: "/sports/basketball", label: "🏀 Basketball" },
                { href: "/sports/ufc", label: "🥊 UFC / MMA" },
                { href: "/sports/tennis", label: "🎾 Tennis" },
                { href: "/sports/esports", label: "🎮 eSports" },
                { href: "/sports/greyhound-racing", label: "🐕 Greyhounds" },
                { href: "/sports/horse-racing", label: "🏇 Horse Racing" },
                { href: "/sports/in-play", label: "🎮 In-Play" },
              ]}
            />

            {/* Promotions */}
            <Dropdown
              label="Promotions"
              open={promotionsOpen}
              setOpen={setPromotionsOpen}
              links={[
                { href: "/promotions/welcome", label: "🎁 Welcome Offer" },
                { href: "/promotions/free-bets", label: "🎯 Free Bets" },
                { href: "/promotions/cashback", label: "💸 Cashback Offers" },
                { href: "/promotions/odds-boosts", label: "🚀 Odds Boosts" },
                { href: "/promotions/loyalty", label: "🎖 Loyalty Club" },
              ]}
            />

            {/* Competitions */}
            <Dropdown
              label="Competitions"
              open={competitionsOpen}
              setOpen={setCompetitionsOpen}
              links={[
                { href: "/competitions/weekly-leaderboard", label: "🏅 Leaderboard" },
                { href: "/competitions/monthly-jackpot", label: "💎 Monthly Jackpot" },
                { href: "/competitions/free-to-play", label: "🎮 Free-to-Play " },
                { href: "/competitions/predictor-challenges", label: "📊 Predictor" },
              ]}
            />

            {/* Support */}
            <Dropdown
              label="Support"
              open={supportOpen}
              setOpen={setSupportOpen}
              links={[
                { href: "/support/help", label: "🛠 Help Center" },
                { href: "/support/contact", label: "💬 Contact Us" },
                { href: "/support/faq", label: "❓ FAQs" },
                { href: "/support/terms", label: "📄 Terms & Conditions" },
                { href: "/support/privacy", label: "🔒 Privacy Policy" },
              ]}
            />

            {/* About */}
            <Dropdown
              label="About"
              open={aboutOpen}
              setOpen={setAboutOpen}
              links={[
                { href: "/support/about-us", label: "ℹ️ About Us" },
                { href: "/support/licensing", label: "📄 Licensing" },
                { href: "/support/partners", label: "🤝 Partners" },
                { href: "/support/affiliates", label: "💼 Affiliates" },
                { href: "/support/developer", label: "🧩 Developer" },
              ]}
            />

          </ul>
        </nav>
      )}
    </header>
  );
}

function Dropdown({ label, open, setOpen, links }) {
  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer hover:text-electricCyan transition"
      >
        <span>{label}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <ul className="mt-2 ml-3 space-y-2 text-sm text-white">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} className="hover:text-electricCyan">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
