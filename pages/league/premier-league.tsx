import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MatchCard from "../../components/MatchCard";
import matches from "../../data/leagues/premier_league.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Odds = {
  home: number;
  draw: number;
  away: number;
};

type Match = {
  slug: string;
  teams: string;
  time: string;
  date: string;
  odds: Odds;
};

const popularAccumulators = [
  {
    title: "Saturday 4-Fold Acca",
    bets: [
      "Man City to Win",
      "Liverpool vs Chelsea – BTTS",
      "Over 2.5 Goals in Arsenal vs Tottenham",
      "Newcastle -1 Handicap",
    ],
    odds: "14/1",
  },
  {
    title: "Sunday Goal Rush",
    bets: [
      "BTTS in Man Utd vs Brighton",
      "BTTS in Aston Villa vs Leeds",
      "BTTS in West Ham vs Wolves",
    ],
    odds: "6/1",
  },
];

const matchesByDay = matches.reduce((acc: Record<string, Match[]>, match: Match) => {
  const dateObj = new Date(match.date);
  const readableDate = dateObj.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  if (!acc[readableDate]) acc[readableDate] = [];
  acc[readableDate].push(match);
  return acc;
}, {});

export default function PremierLeague() {
  return (
    <>
      <Head>
        <title>Premier League – All Matches</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a0a23] text-white">
        {/* Header */}
        <header className="w-full flex items-center justify-between px-4 py-3 border-b border-white bg-[#0a0a23]">
          <button className="text-2xl hover:text-electricCyan transition">☰</button>
          <h1 className="text-lg font-bold font-futuristic tracking-wide">OhMySportsbetting</h1>
          <Link href="/login" passHref>
            <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full hover:brightness-110 transition">
              Login
            </button>
          </Link>
        </header>

        <main className="flex-1 p-6 space-y-12">
          {/* Title with Logo */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/logos/premier_league.png"
              alt="Premier League"
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
            <h1 className="text-2xl font-bold text-gold">Premier League</h1>
          </div>

          {/* Popular Accumulators */}
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-white text-center mb-4">Popular Accumulators</h2>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              adaptiveHeight={true}
              className="text-center"
            >
              {popularAccumulators.map(({ title, bets, odds }, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a1024] p-6 rounded-lg border border-gray-700 hover:shadow-neon transition-shadow duration-300 max-w-md mx-auto"
                >
                  <div className="text-lg font-semibold text-white mb-2">{title}</div>
                  <ul className="text-sm text-gray-300 mb-2 list-disc list-inside">
                    {bets.map((bet, i) => (
                      <li key={i}>{bet}</li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-400">Odds: {odds}</div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Match Sections */}
          {Object.entries(matchesByDay).map(([day, matchList]) => (
            <section key={day} className="space-y-8">
              <h2 className="text-xl text-cyan-300 font-semibold text-center">{day}</h2>
              <div className="flex flex-col gap-6">
                {matchList.map((match) => (
                  <MatchCard key={match.slug} match={match} />
                ))}
              </div>
            </section>
          ))}

          {/* Back to Home Button */}
  <div className="flex justify-center mt-10">
  <Link
    href="/"
    className="px-6 py-2 bg-electricCyan text-white font-semibold rounded-full border border-white hover:brightness-110 transition"
  >
    Back to Home
  </Link>
</div>

        </main>

        {/* Footer */}
        <footer className="bg-[#0a1024] text-white text-sm px-6 pt-10 mt-12 border-t border-gray-800 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Company</h4>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/roadmap" className="hover:underline">Roadmap</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Support</h4>
              <ul className="space-y-1">
                <li><Link href="/how-to-play" className="hover:underline">How to Bet with Pi</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="/support" className="hover:underline">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-electricCyan">Legal</h4>
              <ul className="space-y-1">
                <li><Link href="/terms" className="hover:underline">Terms of Use</Link></li>
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/responsible-gambling" className="hover:underline">Responsible Gambling</Link></li>
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
              <Image src="/pi-logo.png" alt="Pi Network" width={32} height={32} />
              <span className="text-gray-300">Transactions powered by the Pi SDK</span>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/18plus.png" alt="18+" width={24} height={24} />
              <Image src="/responsible.png" alt="Responsible" width={24} height={24} />
            </div>
          </div>

          <div className="text-center text-xs mt-6 text-gray-400">
            © {new Date().getFullYear()} OhMySports. Built for Pioneers. Play smart. Bet responsibly.
          </div>
        </footer>
      </div>
    </>
  );
}
