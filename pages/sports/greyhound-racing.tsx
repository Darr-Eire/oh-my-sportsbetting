"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { races } from '../../data/greyhoundRaces';

const trapColors = [
  "bg-white text-black",
  "bg-blue-600 text-white",
  "bg-red-600 text-white",
  "bg-black text-white",
  "bg-orange-400 text-black",
  "bg-[repeating-linear-gradient(45deg,_#000_0_10px,_#fff_10px_20px)] text-red-600"
];

export default function GreyhoundRacing() {
  const [activeTab, setActiveTab] = useState<"Today" | "Tomorrow">("Today");
  const [openTracks, setOpenTracks] = useState<{ [key: string]: boolean }>({});

  // Group races by track
  const groupedRaces = races[activeTab].reduce((acc: any, race: any) => {
    if (!acc[race.track]) acc[race.track] = [];
    acc[race.track].push(race);
    return acc;
  }, {});

  const toggleTrack = (track: string) => {
    setOpenTracks((prev) => ({ ...prev, [track]: !prev[track] }));
  };

  return (
    <>
      <Head>
        <title>Greyhound Racing – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Hero */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-2xl font-bold">Greyhound Racing</h1>
          <p className="text-sm mt-2 max-w-xl mx-auto">
            Live races, trap stats, betting odds and results. All greyhound action in one place.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["gb", "ie"].map((code) => (
              <Image
                key={code}
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={`${code} flag`}
                width={40}
                height={30}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          {["Today", "Tomorrow"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Today" | "Tomorrow")}
              className={`px-4 py-2 rounded-md font-semibold ${activeTab === tab ? "bg-yellow-400 text-black" : "bg-[#1a1a3d] text-white"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Race Groups by Track */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {Object.entries(groupedRaces).map(([track, trackRaces]: any) => {
            const countryCode = trackRaces[0].countryCode;
            return (
              <details key={track} className="mb-8 border border-white rounded-lg bg-[#0a1024] shadow-md group">
                <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-bold text-lg hover:bg-[#111b3a] transition">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://flagcdn.com/w20/${countryCode}.png`}
                      alt="flag"
                      width={20}
                      height={14}
                      className="rounded-sm"
                      unoptimized
                    />
                    {track}
                  </div>
                  <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                {trackRaces.map((race: any, i: number) => (
                  <div key={i} className="mb-4 p-4 border-t border-white bg-[#0a1024]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{race.raceName}</span>
                      <span className="text-sm text-gray-400">{race.raceTime}</span>
                    </div>

                    <div className="space-y-2">
                      {race.runners.map((runner: string, index: number) => {
                        const parts = runner.split(" ");
                        const dogName = parts.slice(0, -1).join(" ");
                        const dogOdds = parts.slice(-1)[0];

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between border border-gray-700 rounded-md px-4 py-3 bg-[#10182f] shadow"
                          >
                            <div className={`w-10 h-10 flex items-center justify-center font-bold text-sm rounded-sm ${trapColors[index % trapColors.length]}`}>
                              {index + 1}
                            </div>
                            <div className="flex-1 px-4">
                              <p className="text-white font-semibold">{dogName}</p>
                            </div>
                            <div className="bg-[#0a1024] text-white text-sm font-bold py-1 px-3 rounded shadow border border-white min-w-[60px] text-center">
                              {dogOdds}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </details>
            );
          })}
        </div>

        {/* Back to Home */}
        <div className="w-full flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="px-6 py-3 border border-white rounded-full text-white font-semibold transition hover:bg-white hover:text-black">
              Back to Home
            </a>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
