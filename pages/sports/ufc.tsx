"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { ufcEvents } from "../../data/ufc";  // Make sure your data file matches this structure

const fightDates = ["Today", "Tomorrow", "Sunday", "June 7th", "June 8th", "June 15th"];

export default function UFCPage() {
  return (
    <>
      <Head>
        <title>UFC – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

     
    {/* Banner */}
<div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
  <div className="flex justify-center items-center gap-4 mb-2">
    <Image
      src="/logos/ufc.png"
      alt="UFC Logo"
      width={60}
      height={60}
      className="object-contain"
    />
    <Image
      src="/flags/usa.png"
      alt="USA Flag"
      width={40}
      height={30}
      className="rounded shadow-md"
    />
  </div>
  <h1 className="text-3xl font-bold">UFC Betting</h1>
  <p className="text-sm mt-2 max-w-xl mx-auto">
    Fight night odds, round winners, method of victory and more.
  </p>
</div>


        {/* Fight Dates Dropdown */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {fightDates.map((date) => (
            <details key={date} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md overflow-hidden group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                <span>{date}</span>
                <svg className="ml-auto h-5 w-5 transition-transform group-open:rotate-180"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {(ufcEvents[date] || []).map((event, idx) => (
                <details key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md overflow-hidden group">
                  <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                    <div className="flex items-center gap-3 text-lg">
                      <Image
                        src={`https://flagcdn.com/w20/${event.countryCode}.png`}
                        alt="flag"
                        width={20}
                        height={14}
                        className="rounded-sm"
                        unoptimized
                      />
                      <span>{event.event}</span>
                    </div>
                    <div className="text-sm text-gray-400">{event.startTime}</div>
                  </summary>

                  <div className="p-4 space-y-4">
                    {event.fights.map((fight, i) => (
                      <div key={i} className="border border-white rounded-md bg-[#10182f] px-4 py-4 flex flex-col gap-4 shadow">
                        <div className="text-white font-semibold text-center">{fight.fight}</div>
                        <div className="flex justify-center gap-8">
                          <div className="bg-[#10182f] text-white text-sm font-bold py-2 px-4 rounded shadow border border-white text-center">
                            Home: {fight.odds.home}
                          </div>
                          <div className="bg-[#10182f] text-white text-sm font-bold py-2 px-4 rounded shadow border border-white text-center">
                            Away: {fight.odds.away}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </details>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
