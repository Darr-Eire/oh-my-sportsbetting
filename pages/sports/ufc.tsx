"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ufcEvents } from "../../data/ufc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UFCPage() {
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

  // Map legacy Today/Tomorrow keys to dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayKey = today.toDateString();
  const tomorrowKey = tomorrow.toDateString();

  const mappedUfcEvents: Record<string, any[]> = {
    [todayKey]: ufcEvents["Today"] || [],
    [tomorrowKey]: ufcEvents["Tomorrow"] || [],
  };

  function formatDate(date: Date): string {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleDateString("en-US", { month: "short" });
    return `${weekday} ${day} ${month}`;
  }

  return (
    <>
      <Head>
        <title>UFC – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Header Section */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">UFC / MMA</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Full fight cards, live odds, prelims, main cards & all major UFC Pay-Per-View events.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/ufc.png" alt="UFC Logo" width={60} height={60} className="rounded" unoptimized />
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular UFC Bets Carousel */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular UFC Bets</h2>

          <Slider {...carouselSettings}>
            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Jon Jones vs Stipe Miocic</div>
                <div className="text-sm text-blue-400 mb-3">Method of Victory: Jones Submission</div>
                <div className="text-white font-bold text-lg">Odds: 3/1</div>
              </div>
            </div>

            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Adesanya vs Pereira</div>
                <div className="text-sm text-blue-400 mb-3">Fight To Go Distance: No</div>
                <div className="text-white font-bold text-lg">Odds: 6/4</div>
              </div>
            </div>

            <div className="p-2">
              <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                <div className="font-semibold text-white mb-1">Volkanovski vs Holloway</div>
                <div className="text-sm text-blue-400 mb-3">Total Rounds: Over 4.5</div>
                <div className="text-white font-bold text-lg">Odds: 5/6</div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Date Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex overflow-x-auto space-x-3 px-2 scrollbar-hide">
            {dates.map((date, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDate(date)}
                className={`min-w-[90px] px-4 py-2 rounded-md font-semibold text-sm border border-white ${
                  activeDate.toDateString() === date.toDateString()
                    ? "bg-[#0a1024] text-yellow-400"
                    : "bg-[#0a1024] text-white"
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </div>

        {/* Fight Listings */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {(mappedUfcEvents[activeDate.toDateString()] || []).map((event: any, idx: number) => (
            <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3 text-lg">
                  <Image src="/logos/ufc.png" alt="UFC Logo" width={28} height={28} className="rounded" unoptimized />
                  <span>{event.event}</span>
                </div>
                <div className="text-sm text-gray-400">{event.startTime}</div>
              </summary>

              <div className="p-4 space-y-4">
                {event.fights.map((fight: any, i: number) => (
                  <div key={i} className="border border-white rounded-md bg-[#10182f] px-4 py-4 flex flex-col gap-4 shadow">
                    <div className="text-white font-semibold text-center text-lg">{fight.fight}</div>

                    <div className="flex justify-center gap-6">
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">{fight.odds.home}</div>
                        <div className="text-sm text-gray-400">Home</div>
                      </div>
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">N/A</div>
                        <div className="text-sm text-gray-400">Draw</div>
                      </div>
                      <div className="border border-white bg-[#0a1024] rounded-lg px-4 py-3 text-center shadow w-24">
                        <div className="font-bold text-white">{fight.odds.away}</div>
                        <div className="text-sm text-gray-400">Away</div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-3">
                      <Link href={`/match/${fight.fight.replace(/\s+/g, '-').toLowerCase()}`} passHref legacyBehavior>
                        <a className="text-sm text-white font-semibold underline hover:text-white transition">More Bets</a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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
