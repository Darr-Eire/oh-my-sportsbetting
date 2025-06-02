"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useBetSlip } from "../../context/BetSlipContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Odds converters
function decimalToFraction(decimalInput: string | number): string {
  const decimal = typeof decimalInput === "string" ? parseFloat(decimalInput) : decimalInput;
  if (!decimal || decimal <= 1) return "1/1";

  const numerator = Math.round((decimal - 1) * 100);
  const denominator = 100;

  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  const divisor = gcd(numerator, denominator);

  return `${numerator / divisor}/${denominator / divisor}`;
}


function fractionalToDecimal(fraction: string): number {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}


export default function EsportsPage() {
  const { addSelection, removeSelection, selections } = useBetSlip();

  const tournaments = [
    "CS:GO Major",
    "Valorant Champions Tour",
    "League of Legends Worlds",
    "Dota 2 The International",
    "Rainbow Six Major",
    "FIFA eWorld Cup",
    "eFootball Pro",
    "Rocket League Championships",
    "Overwatch League",
    "Call of Duty League"
  ] as const;

  const logoMap = {
    "CS:GO Major": "/logos/esports/csgo.png",
    "Valorant Champions Tour": "/logos/esports/valorant.png",
    "League of Legends Worlds": "/logos/esports/lol.png",
    "Dota 2 The International": "/logos/esports/dota2.png",
    "Rainbow Six Major": "/logos/esports/rainbowsix.png",
    "FIFA eWorld Cup": "/logos/esports/fifa.png",
    "eFootball Pro": "/logos/esports/efootball.png",
    "Rocket League Championships": "/logos/esports/rocketleague.png",
    "Overwatch League": "/logos/esports/overwatch.png",
    "Call of Duty League": "/logos/esports/cod.png"
  };

  const esportsMatches = {
    "CS:GO Major": [
      { match: "NAVI vs FaZe", time: "18:00", odds: { home: "1.80", away: "2.10" } },
      { match: "Vitality vs Heroic", time: "20:00", odds: { home: "1.60", away: "2.30" } }
    ],
    "Valorant Champions Tour": [
      { match: "Fnatic vs Paper Rex", time: "19:00", odds: { home: "1.70", away: "2.20" } }
    ],
    "League of Legends Worlds": [
      { match: "T1 vs G2 Esports", time: "20:00", odds: { home: "1.50", away: "2.50" } }
    ],
    "Dota 2 The International": [
      { match: "Team Spirit vs EG", time: "17:30", odds: { home: "1.90", away: "2.00" } }
    ]
  };

  const popularEsportsBets = [
    { title: "NAVI vs FaZe (CS:GO)", market: "Map Handicap: FaZe +1.5", odds: 1.60 },
    { title: "T1 vs G2 (LoL)", market: "T1 to Win 3-1", odds: 3.00 },
    { title: "OpTic vs LA Thieves (COD)", market: "Correct Score: 3-2 OpTic", odds: 5.50 },
  ];

const [dates, setDates] = useState<Date[]>([]);
const [activeDate, setActiveDate] = useState<Date | null>(null);

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

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
};

type SelectionType = {
  id: string;
  event: string;
  type: string;
  odds: number;
};

const handleToggle = (
  id: string,
  event: string,
  type: string,
  odds: number
) => {
  const exists = selections.some(sel => sel.id === id);
  if (exists) {
    removeSelection(id);
  } else {
    addSelection({ id, event, type, odds });
  }
};


  return (
    <>
      <Head><title>E-Sports – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg shadow text-center">
          <h1 className="text-3xl font-bold">e-Sports</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">eSports From Around The World — Full competitive eSports odds.</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
            <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular eSports Bets</h2>
          <Slider {...carouselSettings}>
            {popularEsportsBets.map((bet, index) => {
              const betId = `popular-${bet.title}`;
              const isSelected = selections.some(sel => sel.id === betId);
              const fractional = decimalToFraction(bet.odds);
              return (
                <div key={index} className="p-2">
                  <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                    <div className="font-semibold mb-1">{bet.title}</div>
                    <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                    <button
                      onClick={() => handleToggle(betId, bet.title, bet.market, bet.odds)}
                      className={`font-bold text-lg px-4 py-2 rounded border transition ${
                        isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                      }`}
                    >
                      {fractional}
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Tournament Matches */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {tournaments.map((tournament) => (
            <details key={tournament} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                <span>{tournament}</span>
                <svg className="ml-auto h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {(esportsMatches[tournament] || []).map((match, i) => {
                const homeId = `${match.match}-home`;
                const awayId = `${match.match}-away`;
                const homeSelected = selections.some(sel => sel.id === homeId);
                const awaySelected = selections.some(sel => sel.id === awayId);

                const fractionalHome = decimalToFraction(match.odds.home);
                const fractionalAway = decimalToFraction(match.odds.away);

                return (
                  <div key={i} className="cursor-pointer bg-deepCard p-3 rounded-lg border border-white hover:scale-[1.01] transition-transform duration-150">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <div className="text-sm font-semibold text-white">{match.match}</div>
                        <div className="text-xs text-softText mt-0.5">Start: {match.time}</div>
                      </div>

                      <div className="flex gap-2 text-center text-xs">
                        <OddsButton
                          label="Home"
                          fractional={fractionalHome}
                          decimal={parseFloat(match.odds.home)}
                          onClick={() => handleToggle(homeId, match.match, "Home", parseFloat(match.odds.home))}
                          isSelected={homeSelected}
                        />
                        <OddsButton
                          label="Away"
                          fractional={fractionalAway}
                          decimal={parseFloat(match.odds.away)}
                          onClick={() => handleToggle(awayId, match.match, "Away", parseFloat(match.odds.away))}
                          isSelected={awaySelected}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </details>
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

// OddsButton updated
type OddsButtonProps = {
  label: string;
  fractional: string;
  decimal: number;
  onClick: () => void;
  isSelected: boolean;
};

type OddsButtonProps = {
  label: string;
  fractional: string;
  onClick: () => void;
  isSelected: boolean;
};

function OddsButton({ label, fractional, onClick, isSelected }: OddsButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`border px-3 py-1 rounded font-medium transition ${
          isSelected ? "bg-white text-cyan-700 border-white" : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
        }`}
      >
        {fractional}
      </button>
      <span className="text-softText mt-1">{label}</span>
    </div>
  );
}
