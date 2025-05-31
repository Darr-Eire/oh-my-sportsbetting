"use client";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type FootballOrBasketballOrUFC = {
  match?: string;
  fight?: string;
  countryCode: string;
  time: string;
  odds: { home: string; away: string; draw?: string };
};

type HorseRacingOrGreyhounds = {
  track: string;
  race: string;
  countryCode: string;
  time: string;
  odds: string;
};

type eSportsType = {
  match: string;
  league: string;
  countryCode: string;
  time: string;
  odds: { home: string; away: string };
};

type EventType = FootballOrBasketballOrUFC | HorseRacingOrGreyhounds | eSportsType;

const allSportsData: Record<string, EventType[]> = {
  Football: [
    { match: "Man City vs Arsenal", countryCode: "gb", time: "12:30", odds: { home: "1.90", draw: "3.50", away: "3.80" } },
    { match: "Real Madrid vs Barcelona", countryCode: "es", time: "20:00", odds: { home: "2.10", draw: "3.10", away: "3.20" } }
  ],
  HorseRacing: [
    { track: "Cheltenham", countryCode: "gb", time: "13:30", race: "Gold Cup", odds: "3/1" },
    { track: "Aintree", countryCode: "gb", time: "14:10", race: "Grand National", odds: "5/1" }
  ],
  Greyhounds: [
    { track: "Shelbourne Park", countryCode: "ie", time: "19:45", race: "Open 480m", odds: "4/1" },
    { track: "Romford", countryCode: "gb", time: "21:00", race: "Sprint Final", odds: "5/1" }
  ],
  Basketball: [
    { match: "Lakers vs Celtics", countryCode: "us", time: "19:00", odds: { home: "1.80", away: "2.00" } },
    { match: "Warriors vs Bulls", countryCode: "us", time: "21:00", odds: { home: "1.60", away: "2.30" } }
  ],
  UFC: [
    { fight: "McGregor vs Chandler", countryCode: "us", time: "22:00", odds: { home: "1.70", away: "2.10" } }
  ],
  eSports: [
    { match: "NAVI vs FaZe", league: "CSGO", countryCode: "eu", time: "18:00", odds: { home: "1.85", away: "1.95" } }
  ],
  InPlay: [
    { match: "Man City vs Arsenal", countryCode: "gb", time: "37'", odds: { home: "1.80", draw: "3.20", away: "4.40" } }
  ]
};

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

        {/* Popular All Sports Bets */}
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
          {Object.entries(allSportsData).map(([sport, events], index) => (
            <details key={index} className="border border-white rounded-lg bg-[#0a1024] shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold text-lg hover:bg-[#111b3a] transition">
                {sport}
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {events.map((event, i) => {
                  const isHorseOrGreyhound = "track" in event;
                  const isEsports = "league" in event;

                  return (
                    <div key={i} className="border border-gray-700 rounded-md bg-[#10182f] px-4 py-3 flex justify-between items-center shadow">
                      <div className="flex items-center gap-3">
                        <Image src={`https://flagcdn.com/w20/${event.countryCode}.png`} alt="flag" width={20} height={14} className="rounded-sm" unoptimized />
                        <div>
                          <p className="font-semibold">
                            {isHorseOrGreyhound ? event.race : isEsports ? `${event.league}: ${event.match}` : event.match || event.fight}
                          </p>
                          <p className="text-xs text-gray-400">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {isHorseOrGreyhound ? (
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
