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
import { useBetSlip } from "../../context/BetSlipContext";
import { ufcEvents } from "../../data/ufcEvents";

// Fractional to decimal converter
function fractionalToDecimal(fraction) {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
}

export default function UFCPage() {
  const { addSelection, removeSelection, selections } = useBetSlip();

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const [dates, setDates] = useState([]);
  const [activeDate, setActiveDate] = useState(null);

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
  const eventsForDate = ufcEvents[dateKey] || [];

  const toggleSelection = (id, event, type, odds) => {
    const exists = selections.some(sel => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({ id, event, type, odds });
    }
  };

  return (
    <>
      <Head><title>UFC – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] shadow text-center">
          <h1 className="text-3xl font-semibold">UFC / MMA</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Full fight cards, live odds, prelims, main cards & all major UFC Pay-Per-View events.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/ufc.png" alt="UFC Logo" width={60} height={60} className="rounded" unoptimized />
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular UFC Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular UFC Bets</h2>
          <Slider {...carouselSettings}>
            {popularBets.map((bet, i) => {
              const betId = `popular-${bet.title}`;
              const isSelected = selections.some((sel) => sel.id === betId);
              const decimalOdds = fractionalToDecimal(bet.fractional);
              return (
                <div key={i} className="p-2">
                  <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                    <div className="font-semibold text-white mb-1">{bet.title}</div>
                    <div className="text-sm text-blue-400 mb-3">{bet.market}</div>
                    <button
                      onClick={() => toggleSelection(betId, bet.title, bet.market, decimalOdds)}
                      className={`font-bold text-lg px-4 py-2 rounded border transition ${
                        isSelected
                          ? "bg-white text-cyan-700 border-white"
                          : "border-white text-white bg-transparent hover:bg-white hover:text-cyan-700"
                      }`}
                    >
                      {bet.fractional}
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

             {/* Date Tabs */}
<div className="flex justify-center mt-6 mb-8">
  <div className="flex overflow-x-auto pl-4 pr-2 gap-3 max-w-full md:max-w-3xl scrollbar-hide">
    {dates.map((date, idx) => {
      let label = date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" });

      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      const formatDate = (d: Date) => d.toISOString().slice(0, 10);
      
      if (formatDate(date) === formatDate(today)) label = "Today";
      else if (formatDate(date) === formatDate(tomorrow)) label = "Tomorrow";

      const isActive = activeDate && formatDate(activeDate) === formatDate(date);

      return (
        <button
          key={idx}
          onClick={() => setActiveDate(date)}
         className={`min-w-[90px] flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm border ${
            isActive ? "bg-white text-black border-white shadow-lg" : "bg-[#0a1024] text-white border-white hover:bg-white hover:text-black"
          }`}
        >
          {label}
        </button>
      );
    })}

    {dates.length > 0 && (
      <select
        className="min-w-[120px] px-4 py-2 rounded-full font-semibold text-sm border border-white bg-[#0a1024] text-white"
        onChange={(e) => {
          const selectedDate = new Date(e.target.value);
          setActiveDate(selectedDate);
        }}
      >
        <option value="">More Dates</option>
        {Array.from({ length: 5 }, (_, i) => {
          const lastDate = dates[dates.length - 1];
          const futureDate = new Date(lastDate);
          futureDate.setDate(lastDate.getDate() + i + 1);
          return (
            <option key={i} value={futureDate.toISOString()}>
              {futureDate.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })}
            </option>
          );
        })}
      </select>
    )}
  </div>
</div>

        {/* UFC Fights */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {eventsForDate.map((event, idx) => (
            <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3 text-lg">
                  <Image src="/logos/ufc.png" alt="UFC Logo" width={28} height={28} className="rounded" unoptimized />
                  <span>{event.event}</span>
                </div>
                <div className="text-sm text-gray-400">{event.startTime}</div>
              </summary>

              <div className="p-4 space-y-4">
                {event.fights.map((fight, i) => {
                  const homeId = `${fight.fight}-home`;
                  const awayId = `${fight.fight}-away`;
                  const homeSelected = selections.some(sel => sel.id === homeId);
                  const awaySelected = selections.some(sel => sel.id === awayId);
                  const decimalHome = fractionalToDecimal(fight.odds.home);
                  const decimalAway = fractionalToDecimal(fight.odds.away);

                  return (
                    <div key={i} className="border border-white rounded-md bg-[#10182f] px-4 py-4 flex flex-col gap-2 shadow">
                      <div className="text-white font-semibold text-center text-lg">{fight.fight}</div>
                      <div className="flex justify-between items-center bg-[#0a1024] px-4 py-3 rounded border border-white">
                        <div className="font-bold text-white w-[40%] text-left">
                          {fight.fight.split(" vs ")[0]}
                          <div className="text-xs text-gray-400">{fight.homeRecord}</div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            className={`border px-3 py-2 rounded font-semibold ${
                              homeSelected ? "bg-white text-black border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                            }`}
                            onClick={() => toggleSelection(homeId, fight.fight, "Home", decimalHome)}
                          >
                            {fight.odds.home}
                            <div className="text-xs text-gray-400">Home</div>
                          </button>

                          <button
                            className={`border px-3 py-2 rounded font-semibold ${
                              awaySelected ? "bg-white text-black border-white" : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                            }`}
                            onClick={() => toggleSelection(awayId, fight.fight, "Away", decimalAway)}
                          >
                            {fight.odds.away}
                            <div className="text-xs text-gray-400">Away</div>
                          </button>
                        </div>

                        <div className="font-bold text-white w-[40%] text-right">
                          {fight.fight.split(" vs ")[1]}
                          <div className="text-xs text-gray-400">{fight.awayRecord}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/" className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
            Back to Home
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

// Popular UFC Bets (Fractional)
const popularBets = [
  { title: "Jon Jones vs Stipe Miocic", market: "Jones Submission", fractional: "3/1" },
  { title: "Adesanya vs Pereira", market: "Fight To Go Distance: No", fractional: "6/4" },
  { title: "Volkanovski vs Holloway", market: "Total Rounds: Over 4.5", fractional: "5/6" },
];
