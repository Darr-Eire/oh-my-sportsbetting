"use client";

import React, { useState } from "react";
import { greyhoundRaces } from "@/data/greyhoundRaces";
import Link from "next/link";

// Trap colours applied:
const trapColors = [
  "bg-white text-black",
  "bg-blue-600 text-white",
  "bg-red-600 text-white",
  "bg-black text-white",
  "bg-orange-400 text-black",
  "bg-[repeating-linear-gradient(45deg,_#000_0_10px,_#fff_10px_20px)] text-red-600",
];

// Combine Today and Tomorrow
const allUpcomingRaces = [
  ...greyhoundRaces.Today,
  ...greyhoundRaces.Tomorrow
].sort((a, b) => (a.raceTime > b.raceTime ? 1 : -1)).slice(0, 6);

export default function GreyhoundRacingSection() {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const [selections, setSelections] = useState<string[]>([]); // store selected runners

  const selectedRace = allUpcomingRaces[selectedRaceIndex];

  const calculateCountdown = () => `${10 * (selectedRaceIndex + 1)} min`;

  const toggleSelection = (runnerId: string) => {
    setSelections(prev =>
      prev.includes(runnerId)
        ? prev.filter(id => id !== runnerId)
        : [...prev, runnerId]
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <h2 className="text-lg font-bold text-white mb-3 text-center">Next Greyhound Races</h2>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {allUpcomingRaces.map((race, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedRaceIndex(idx)}
            className={`px-4 py-2 rounded-full border text-sm ${
              selectedRaceIndex === idx
                ? "bg-[#0a1024] text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {race.raceTime}
          </button>
        ))}
      </div>

      {selectedRace && (
        <div className="border border-gray-700 bg-[#0a1024] rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-white font-bold text-lg">
                Next Race: {selectedRace.raceName} @ {selectedRace.track}
              </h3>
            </div>
            <div className="text-white text-sm font-semibold">
              Starts in {calculateCountdown()}
            </div>
          </div>

          <div className="space-y-3">
            {selectedRace.runners.map((runner, i) => {
              const runnerId = `${selectedRace.raceName}-${runner.name}`;
              const isSelected = selections.includes(runnerId);

              return (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${trapColors[i % trapColors.length]}`}>
                      {i + 1}
                    </div>
                    <span className="font-semibold text-white">{runner.name}</span>
                  </div>

                  <button
                    onClick={() => toggleSelection(runnerId)}
                    className={`font-bold px-4 py-1 border rounded ${
                      isSelected
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {runner.odds}
                  </button>
                </div>
              );
            })}
          </div>

          {/* View All Greyhounds */}
          <div className="mt-6 flex justify-center">
            <Link href="/sports/harlow/A5-415m-Harlow">
              <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                View All Greyhounds
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* View All Greyhound Racing */}
      <div className="mt-8 flex justify-center">
        <Link href="/sports/greyhound-racing">
          <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            View All Greyhound Racing
          </button>
        </Link>
      </div>
    </div>
  );
}
