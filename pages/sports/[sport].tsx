"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

// Create strict typings for your data
type OddsType = { home: string; away: string; draw?: string } | string;

type EventType = {
  match?: string;
  race?: string;
  fight?: string;
  league?: string;
  countryCode: string;
  time: string;
  odds: OddsType;
};

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

export default function AllSportsPage() {
  return (
    <>
      <Head>
        <title>All Sports – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-3xl font-bold">All Sports</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Full list of every live sport with all available betting markets.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16 space-y-6">
          {Object.entries(allSportsData).map(([sport, events], index) => (
            <details key={index} className="border border-white rounded-lg bg-[#0a1024] shadow-md overflow-hidden group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition text-lg">
                {sport}
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-4 space-y-4">
                {events.map((event, i) => {
                  const isObjectOdds = typeof event.odds === 'object';

                  return (
                    <div key={i} className="border border-gray-700 rounded-md bg-[#10182f] px-4 py-3 flex justify-between items-center shadow">
                      <div className="flex items-center gap-3">
                        <Image
                          src={`https://flagcdn.com/w20/${event.countryCode}.png`}
                          alt="flag"
                          width={20}
                          height={14}
                          className="rounded-sm"
                        />
                        <div>
                          <p className="text-white font-semibold">
                            {event.match || event.race || event.fight || event.league}
                          </p>
                          <p className="text-xs text-gray-400">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {isObjectOdds ? (
                          <>
                            {"home" in event.odds && (
                              <div className="bg-green-900 text-green-300 text-sm font-bold py-1 px-3 rounded shadow border border-green-400">
                                Home: {event.odds.home}
                              </div>
                            )}
                            {"draw" in event.odds && (
                              <div className="bg-green-900 text-green-300 text-sm font-bold py-1 px-3 rounded shadow border border-green-400">
                                Draw: {event.odds.draw}
                              </div>
                            )}
                            {"away" in event.odds && (
                              <div className="bg-green-900 text-green-300 text-sm font-bold py-1 px-3 rounded shadow border border-green-400">
                                Away: {event.odds.away}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="bg-green-900 text-green-300 text-sm font-bold py-1 px-4 rounded shadow border border-green-400">
                            Odds: {event.odds}
                          </div>
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
