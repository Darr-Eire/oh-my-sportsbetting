"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EsportsPage() {
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
    ],
    "Rainbow Six Major": [
      { match: "Team BDS vs Astralis", time: "16:00", odds: { home: "1.75", away: "2.10" } }
    ],
    "FIFA eWorld Cup": [
      { match: "eManCity vs eReal Madrid", time: "15:00", odds: { home: "1.85", away: "1.95" } }
    ],
    "eFootball Pro": [
      { match: "Barcelona eSports vs Juventus eSports", time: "14:00", odds: { home: "2.00", away: "1.80" } }
    ],
    "Rocket League Championships": [
      { match: "Team Liquid vs FURIA", time: "21:00", odds: { home: "1.65", away: "2.25" } }
    ],
    "Overwatch League": [
      { match: "Dallas Fuel vs Seoul Dynasty", time: "19:30", odds: { home: "1.70", away: "2.00" } }
    ],
    "Call of Duty League": [
      { match: "OpTic Texas vs LA Thieves", time: "22:00", odds: { home: "1.80", away: "2.00" } }
    ]
  };

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
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  const popularEsportsBets = [
    { title: "NAVI vs FaZe (CS:GO)", market: "Map Handicap: FaZe +1.5", odds: "1.60" },
    { title: "T1 vs G2 (LoL)", market: "T1 to Win 3-1", odds: "3.00" },
    { title: "OpTic vs LA Thieves (COD)", market: "Correct Score: 3-2 OpTic", odds: "5.50" },
  ];

  return (
    <>
      <Head><title>E-Sports – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

       {/* Banner */}
<div className="mx-4 mt-4 mb-6 p-4 rounded-lg border border-white shadow text-center">
  <h1 className="text-2xl font-bold">e-Sports</h1>
  <p className="text-sm mt-2 max-w-xl mx-auto">eSports From Around The World CS:GO, Valorant, LoL, FIFA, COD & more — Full competitive eSports odds.</p>

  <div className="flex justify-center items-center gap-4 mt-4">
    <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
    <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
  </div>
</div>


        {/* Popular Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular eSports Bets</h2>
          <Slider {...carouselSettings}>
            {popularEsportsBets.map((bet, index) => (
              <div key={index} className="p-2">
                <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                  <div className="font-semibold mb-1">{bet.title}</div>
                  <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                  <div className="font-bold text-lg">Odds: {bet.odds}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Date Selector Carousel */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="flex overflow-x-auto pl-4 pr-2 gap-3 scroll-smooth scroll-px-2 scroll-snap-x snap-mandatory max-w-full md:max-w-3xl scrollbar-hide">
            {dates.map((date, idx) => (
              <button key={idx} onClick={() => setActiveDate(date)}
                className={`min-w-[90px] flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm border ${
                  activeDate?.toDateString() === date.toDateString() 
                  ? "bg-white text-black border-white shadow-lg" 
                  : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black transition"
                } snap-start`}>
                {date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Listings */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {tournaments.map((tournament) => (
            <details key={tournament} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                <span>{tournament}</span>
                <svg className="ml-auto h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {(esportsMatches[tournament as keyof typeof esportsMatches] || []).map((match, i) => (
                <div key={i} className="border border-white rounded-lg bg-[#0a1024] mb-2 px-4 py-3 flex items-center justify-between shadow">
                  <div className="flex items-center gap-3 flex-1">
                    <Image src={logoMap[tournament]} alt={`${tournament} logo`} width={28} height={28} className="rounded-sm" unoptimized />
                    <div>
                      <div className="font-semibold">{match.match}</div>
                      <div className="text-sm text-gray-400">Start: {match.time}</div>
                    </div>
                  </div>

                  <div className="flex justify-end items-center gap-2">
                    <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[50px]">
                      <div className="font-bold text-sm">{match.odds.home}</div>
                      <div className="text-xs text-gray-400 mt-1">Home</div>
                    </div>
                    <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[50px]">
                      <div className="font-bold text-sm">{match.odds.away}</div>
                      <div className="text-xs text-gray-400 mt-1">Away</div>
                    </div>
                  </div>
                </div>
              ))}
            </details>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">Back to Home</a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
