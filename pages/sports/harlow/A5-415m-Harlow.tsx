"use client";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";
import HeaderLayout from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useBetSlip } from "../../../context/BetSlipContext";
import { useState } from "react";

// Trap Colors
const trapColors = [
  "bg-white text-black",
  "bg-blue-600 text-white",
  "bg-red-600 text-white",
  "bg-black text-white",
  "bg-orange-400 text-black",
  "bg-[repeating-linear-gradient(45deg,_#000_0_10px,_#fff_10px_20px)] text-red-600",
];

// Fractional to decimal conversion
const fractionalToDecimal = (fraction: string): number => {
  const [num, denom] = fraction.split("/").map(Number);
  return num / denom + 1;
};

// Race Data
type Runner = { number: number; name: string; odds: string; };

const raceData = {
  track: "Harlow",
  raceName: "A5 415m",
  raceTime: "11:05",
  runners: [
    { number: 1, name: "Swift Horizon", odds: "5/2" },
    { number: 2, name: "Ballymac Flyer", odds: "9/2" },
    { number: 3, name: "Romeos Dream", odds: "7/4" },
    { number: 4, name: "Skyline Jet", odds: "4/1" },
    { number: 5, name: "Droopys Vegas", odds: "6/1" },
    { number: 6, name: "Turn The Page", odds: "5/1" },
  ] as Runner[],
};

// Sort runners highest odds to lowest
const sortedRunners = [...raceData.runners].sort((a, b) => {
  const decA = fractionalToDecimal(a.odds);
  const decB = fractionalToDecimal(b.odds);
  return decB - decA;
});

export default function A5HarlowPage() {
  const { addSelection, removeSelection, selections } = useBetSlip();
  const [winOpen, setWinOpen] = useState(true);
  const [forecastOpen, setForecastOpen] = useState(false);
  const [tricastOpen, setTricastOpen] = useState(false);

  const handleBet = (type: string, label: string, odds: string) => {
    const id = `${raceData.track}-${type}-${label}`;
    const exists = selections.find(sel => sel.id === id);
    if (exists) {
      removeSelection(id);
    } else {
      addSelection({
        id,
        event: `${label} (${type})`,
        type: `Greyhound ${type}`,
        odds: fractionalToDecimal(odds),
      });
    }
  };

  return (
    <>
      <Head>
        <title>{raceData.raceName} - {raceData.track} | OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans flex flex-col">
        <HeaderLayout />

        <main className="flex-1 w-full max-w-5xl mx-auto p-4 space-y-6">

          {/* Header with banner */}
          <div className="border border-gray-700 bg-[#0a1024] p-4 rounded-lg flex flex-col items-center text-center space-y-3">
            <Image 
              src="/logos/harlow.png" 
              alt="Harlow Banner" 
              width={200} 
              height={80} 
              className="rounded-lg shadow-lg"
            />
            <h1 className="text-xl font-bold">{raceData.track} - {raceData.raceName}</h1>
            <p className="text-lg text-white">Race Time {raceData.raceTime}</p>
          </div>

          {/* WIN MARKET */}
          <div className="border border-gray-700 bg-[#0a1024] p-4 rounded-lg">
            <button onClick={() => setWinOpen(!winOpen)} className="w-full text-lg font-bold mb-3 text-center">
              Win Markets {winOpen ? "▲" : "▼"}
            </button>
            {winOpen && (
              <div className="space-y-3">
                {sortedRunners.map((runner) => {
                  const id = `${raceData.track}-WIN-${runner.name}`;
                  const isSelected = selections.some(sel => sel.id === id);
                  return (
                    <div key={runner.number} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border border-white ${trapColors[runner.number - 1]}`}>
                          {runner.number}
                        </div>
                        <div className="text-sm font-semibold">{runner.name}</div>
                      </div>
                      <button
                        onClick={() => handleBet("WIN", runner.name, runner.odds)}
                        className={`px-5 py-1 rounded border text-sm font-bold transition ${
                          isSelected ? "bg-white text-[#00c6ff] border-white" : "bg-gray-900 text-white border-white hover:bg-white hover:text-black"
                        }`}
                      >
                        {runner.odds}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* FORECAST MARKET */}
          <div className="border border-gray-700 bg-[#0a1024] p-4 rounded-lg">
            <button onClick={() => setForecastOpen(!forecastOpen)} className="w-full text-lg font-bold mb-3 text-center">
              Forecast Markets {forecastOpen ? "▲" : "▼"}
            </button>
            {forecastOpen && (
              <div className="space-y-3">
                {sortedRunners.map((runner1) =>
                  sortedRunners.map((runner2) => {
                    if (runner1.number === runner2.number) return null;

                    const dec1 = fractionalToDecimal(runner1.odds);
                    const dec2 = fractionalToDecimal(runner2.odds);
                    const forecastFactor = 0.25;
                    const forecastDecimal = dec1 * dec2 * forecastFactor;
                    const forecastDisplay = forecastDecimal.toFixed(2);

                    const label = `${runner1.name} > ${runner2.name}`;
                    const id = `${raceData.track}-FORECAST-${label}`;
                    const isSelected = selections.some(sel => sel.id === id);

                    return (
                      <div key={id} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-white ${trapColors[runner1.number - 1]}`}>
                            {runner1.number}
                          </div>
                          <span>{runner1.name} &gt;</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-white ${trapColors[runner2.number - 1]}`}>
                            {runner2.number}
                          </div>
                          <span>{runner2.name}</span>
                        </div>
                        <button
                          onClick={() => handleBet("FORECAST", label, forecastDisplay)}
                          className={`px-5 py-1 rounded border text-sm font-bold transition ${
                            isSelected ? "bg-white text-[#00c6ff] border-white" : "bg-gray-900 text-white border-white hover:bg-white hover:text-black"
                          }`}
                        >
                          {forecastDisplay}
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* TRICAST MARKET */}
          <div className="border border-gray-700 bg-[#0a1024] p-4 rounded-lg">
            <button onClick={() => setTricastOpen(!tricastOpen)} className="w-full text-lg font-bold mb-3 text-center">
              Tricast Markets {tricastOpen ? "▲" : "▼"}
            </button>
            {tricastOpen && (
              <div className="space-y-3">
                {sortedRunners.map((runner1) =>
                  sortedRunners.map((runner2) =>
                    sortedRunners.map((runner3) => {
                      if (new Set([runner1.number, runner2.number, runner3.number]).size < 3) return null;

                      const dec1 = fractionalToDecimal(runner1.odds);
                      const dec2 = fractionalToDecimal(runner2.odds);
                      const dec3 = fractionalToDecimal(runner3.odds);
                      const tricastFactor = 0.15;
                      const tricastDecimal = dec1 * dec2 * dec3 * tricastFactor;
                      const tricastDisplay = tricastDecimal.toFixed(2);

                      const label = `${runner1.name} > ${runner2.name} > ${runner3.name}`;
                      const id = `${raceData.track}-TRICAST-${label}`;
                      const isSelected = selections.some(sel => sel.id === id);

                      return (
                        <div key={id} className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-white">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-white ${trapColors[runner1.number - 1]}`}>
                              {runner1.number}
                            </div>
                            <span>{runner1.name} &gt;</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-white ${trapColors[runner2.number - 1]}`}>
                              {runner2.number}
                            </div>
                            <span>{runner2.name} &gt;</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border border-white ${trapColors[runner3.number - 1]}`}>
                              {runner3.number}
                            </div>
                            <span>{runner3.name}</span>
                          </div>
                          <button
                            onClick={() => handleBet("TRICAST", label, tricastDisplay)}
                            className={`px-5 py-1 rounded border text-sm font-bold transition ${
                              isSelected ? "bg-white text-[#00c6ff] border-white" : "bg-gray-900 text-white border-white hover:bg-white hover:text-black"
                            }`}
                          >
                            {tricastDisplay}
                          </button>
                        </div>
                      );
                    })
                  )
                )}
              </div>
            )}
          </div>
     <div className="flex justify-center mb-8">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-block border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Back to Home
            </a>
          </Link>
        </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
