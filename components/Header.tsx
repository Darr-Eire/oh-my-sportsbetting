import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
declare global {
  interface Window {
    Pi?: any; // or a more specific type if you have it
  }
}

// Add this import if you have a separate utility for Pi login
// import { getPiAccessToken } from 'path-to-pi-sdk-or-utils';

// Placeholder for getPiAccessToken — replace with actual Pi SDK login call
async function getPiAccessToken() {
  if (typeof window === "undefined" || !window.Pi) {
    console.error("Pi wallet not loaded");
    return null;
  }
  try {
    await window.Pi.wallet.requestAccess();
    const tokenResponse = await window.Pi.wallet.makePiNetworkRequest();
    return tokenResponse?.accessToken || null;
  } catch (err) {
    console.error("Pi wallet access error:", err);
    return null;
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [promotionsOpen, setPromotionsOpen] = useState(false);
  const [competitionsOpen, setCompetitionsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const [user, setUser] = useState(null); // Store logged-in user info
  const [loading, setLoading] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Check if user already logged in on mount
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  // Pi Login handler - replace with actual Pi SDK login flow
  async function handlePiLogin() {
    setLoading(true);
    try {
      // This example assumes you get accessToken from Pi SDK here
      const accessToken = await getPiAccessToken(); // Implement this function yourself

      if (!accessToken) throw new Error("No Pi access token");

      const res = await fetch("/api/auth/pi-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken }),
      });

      if (!res.ok) {
        throw new Error("Pi login failed");
      }

      const data = await res.json();
      setUser(data.user);
    } catch (error) {
      alert("Login failed: " + error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  }

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

        {!user ? (
          <button
            onClick={handlePiLogin}
            disabled={loading}
            className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full hover:brightness-110 transition"
          >
            {loading ? "Logging in..." : "Login with Pi"}
          </button>
        ) : (
          <div className="flex items-center gap-4 text-white">
            <span>Welcome, {user.username || user.uid}</span>
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-1 bg-red-600 rounded-full hover:brightness-110 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {menuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-full left-0 w-48 bg-[#12182f] border-r border-gray-700 shadow-lg rounded-br-lg p-4"
        >
          <ul className="space-y-3">

            <li>
              <Link href="/" className="underline hover:text-electricCyan transition">Home</Link>
            </li>

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

            <Dropdown
              label="Competitions"
              open={competitionsOpen}
              setOpen={setCompetitionsOpen}
              links={[
                { href: "/competitions/weekly-leaderboard", label: "🏅 Leaderboard" },
                { href: "/competitions/monthly-jackpot", label: "💎 Monthly Jackpot" },
                { href: "/competitions/free-to-play", label: "🎮 Free-to-Play" },
                { href: "/competitions/predictor-challenges", label: "📊 Predictor" },
              ]}
            />

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

type DropdownProps = {
  label: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  links: { href: string; label: string }[];
};

function Dropdown({ label, open, setOpen, links }: DropdownProps) {
  return (
    <li>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer underline hover:text-electricCyan transition"
      >
        <span>{label}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <ul className="mt-2 ml-3 space-y-2 text-sm text-white">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} className="underline hover:text-electricCyan">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
