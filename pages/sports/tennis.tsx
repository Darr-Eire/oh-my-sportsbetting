"use client";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { tennisEvents } from "../../data/tennis";

const competitions = [
  "Australian Open",
  "French Open",
  "Wimbledon",
  "US Open",
  "ATP 1000",
  "ATP 500",
  "ATP 250",
  "WTA 1000",
  "WTA 500",
  "Challenger",
  "ITF Futures"
];

export default function TennisPage() {
  return (
    <>
      <Head>
        <title>Tennis – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-3xl font-bold">Tennis Betting</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Grand Slams, ATP, WTA, Challenger & Futures – Full tennis betting action.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16">
          {competitions.map((comp) => (
            <details key={comp} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md group">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                <span>{comp}</span>
                <svg className="ml-auto h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {(tennisEvents[comp] || []).map((event, idx) => (
                <div key={idx} className="border border-white rounded-lg bg-[#0a1024] mb-2 px-4 py-3 flex items-center justify-between shadow">
                  <div className="flex-1">
                    <div className="font-semibold text-white">{event.match}</div>
                    <div className="text-sm text-gray-400">Start: {event.startTime}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="border border-white rounded-md bg-[#10182f] px-4 py-2 text-center">
                      <div className="text-xs text-gray-300 mb-1">Home</div>
                      <div className="text-white font-bold text-md">{event.odds.home}</div>
                    </div>
                    <div className="border border-white rounded-md bg-[#10182f] px-4 py-2 text-center">
                      <div className="text-xs text-gray-300 mb-1">Away</div>
                      <div className="text-white font-bold text-md">{event.odds.away}</div>
                    </div>
                  </div>
                </div>
              ))}
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
