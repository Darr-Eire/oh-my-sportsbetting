"use client";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Slider from "react-slick";
import allSportsData from "../../data/allSportsMaster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const popularAllBets = [
  { title: "Man City vs Arsenal", market: "Correct Score 2-1", odds: "7/1" },
  { title: "Cheltenham Gold Cup", market: "Fav to Win", odds: "3/1" },
  { title: "Lakers vs Celtics", market: "Over 220 Total Points", odds: "1.90" },
];

export default function AllSportsPage() {
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
      <Head><title>All Sports – OhMySports</title></Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Banner */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg border border-white shadow text-center">
          <h1 className="text-3xl font-bold">All Sports From Around The World</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Full list of every live sport with all available betting markets.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/logos/usa.png" alt="USA Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
            <Image src="/logos/europe.png" alt="Europe Flag" width={60} height={40} className="rounded shadow-md" unoptimized />
          </div>
        </div>

        {/* Popular Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Bets</h2>
          <Slider {...carouselSettings}>
            {popularAllBets.map((bet, index) => (
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

        {/* All Sports Listing */}
        <div className="max-w-5xl mx-auto px-4 pb-16 space-y-6">
          {Object.entries(allSportsData).map(([sport, events]: any, index) => (
            <details key={index} className="border border-white rounded-lg bg-[#0a1024] shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                {sport}
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {events.map((event: any, i: number) => {
                  const isHorse = event.track && event.race;
                  const isEsports = event.league;
                  const isInPlay = event.time?.includes("'");

                  return (
                    <div key={i} className="border border-gray-700 rounded-md bg-[#10182f] px-4 py-3 flex justify-between items-center shadow">
                      <div className="flex items-center gap-3">
                        <Image src={`https://flagcdn.com/w20/${event.countryCode || 'us'}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                        <div>
                          <p className="font-semibold">
                            {isHorse ? event.race : isEsports ? `${event.league}: ${event.match}` : event.match || event.fight}
                          </p>
                          <p className="text-xs text-gray-400">{event.time || event.startTime || event.raceTime || event.tipOff || ""}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {isHorse ? (
                          <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[60px]">
                            <div className="font-bold text-sm">{event.odds}</div>
                            <div className="text-xs text-gray-400 mt-1">Odds</div>
                          </div>
                        ) : (
                          <>
                            <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[50px]">
                              <div className="font-bold text-sm">{event.odds.home}</div>
                              <div className="text-xs text-gray-400 mt-1">Home</div>
                            </div>
                            {"draw" in event.odds && (
                              <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[50px]">
                                <div className="font-bold text-sm">{event.odds.draw}</div>
                                <div className="text-xs text-gray-400 mt-1">Draw</div>
                              </div>
                            )}
                            <div className="border border-white rounded-md bg-[#10182f] px-3 py-1 text-center min-w-[50px]">
                              <div className="font-bold text-sm">{event.odds.away}</div>
                              <div className="text-xs text-gray-400 mt-1">Away</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
