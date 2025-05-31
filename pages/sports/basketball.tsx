"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Slider from "react-slick";
import { basketballGames } from "../../data/basketballGames";

export default function BasketballPage() {
  const leagueLogos: Record<string, string> = {
    NBA: "/leagues/nba.png",
    EuroLeague: "/leagues/euroleague.png",
    EuroCup: "/leagues/eurocup.png",
    NCAA: "/leagues/ncaa.png",
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
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

  if (!activeDate || dates.length === 0) return null;

  const dateKey = activeDate.toISOString().slice(0, 10);
  const gamesForDate = basketballGames[dateKey] || [];

  const groupedGames = gamesForDate.reduce((acc: Record<string, typeof gamesForDate>, match) => {
    if (!acc[match.league]) acc[match.league] = [];
    acc[match.league].push(match);
    return acc;
  }, {});

  function formatDate(date: Date): string {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleDateString("en-US", { month: "short" });
    return `${weekday} ${day} ${month}`;
  }

  return (
    <>
      <Head><title>Basketball – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-2xl sm:text-2xl font-semibold text-white tracking-wide">Basketball From Around The World</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            NBA, EuroLeague & NCAA fixtures — odds updated for every tip-off.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["us", "eu"].map((code) => (
              <Image key={code} src={`https://flagcdn.com/w40/${code}.png`} alt={`${code} flag`} width={40} height={30} className="rounded shadow-md" />
            ))}
          </div>
        </div>

        {/* Popular Basketball Bets Carousel */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Basketball Bets</h2>

          <Slider {...carouselSettings}>
            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Lakers vs Celtics</div>
                <div className="text-sm text-blue-400 mb-3">Total Points: Over 220.5</div>
                <div className="text-white font-bold text-lg">Odds: 10/11</div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Warriors vs Suns</div>
                <div className="text-sm text-blue-400 mb-3">Winning Margin: Warriors 6-10</div>
                <div className="text-white font-bold text-lg">Odds: 5/1</div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Real Madrid vs Barcelona (EuroLeague)</div>
                <div className="text-sm text-blue-400 mb-3">Both Teams 80+ Points</div>
                <div className="text-white font-bold text-lg">Odds: 9/4</div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Date Tabs */}
 <div className="flex justify-center mt-6 mb-8">
  <div className="flex overflow-x-auto pl-4 pr-2 gap-3 scroll-smooth scroll-px-2 scroll-snap-x snap-mandatory max-w-full md:max-w-3xl scrollbar-hide">
    {dates.map((date, idx) => (
      <button
        key={idx}
        onClick={() => setActiveDate(date)}
        className={`min-w-[90px] flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm border ${
          activeDate?.toDateString() === date.toDateString()
            ? "bg-white text-black border-white shadow-lg"
            : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black transition"
        } snap-start`}
      >
        {date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
      </button>
    ))}
  </div>
</div>


        {/* League Dropdowns */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {Object.entries(groupedGames).map(([league, matches], idx) => (
            <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md overflow-hidden group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3 text-lg">
                  <Image src={leagueLogos[league] || "/leagues/default.png"} alt={`${league} logo`} width={30} height={30} className="rounded" />
                  <span>{league}</span>
                  <Image src={`https://flagcdn.com/w20/${matches[0].countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                </div>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {matches.map((match, i) => (
                  <div key={i} className="border border-white rounded-md bg-[#10182f] px-4 py-4 flex flex-col gap-4 shadow">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center gap-2 font-semibold text-white">
                        <Image src={`https://flagcdn.com/w20/${match.countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                        {match.game}
                      </div>
                      <div>{match.tipOff}</div>
                    </div>

                    <div className="flex justify-center gap-6">
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">{match.odds.home}</div>
                        <div className="text-sm text-gray-400">Home</div>
                      </div>
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">N/A</div>
                        <div className="text-sm text-gray-400">Draw</div>
                      </div>
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">{match.odds.away}</div>
                        <div className="text-sm text-gray-400">Away</div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
