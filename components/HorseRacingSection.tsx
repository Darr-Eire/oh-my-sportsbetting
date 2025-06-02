"use client";

import React, { useState } from "react";
import { horseRaces } from "@/data/horseRaces";


// Flatten and sort all upcoming races globally
const allUpcomingRaces = horseRaces
  .flatMap((race) => ({ ...race }))
  .sort((a, b) => (a.raceTime > b.raceTime ? 1 : -1))
  .slice(0, 6); // Show next 6 races max

export default function HorseRacingSection() {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const selectedRace = allUpcomingRaces[selectedRaceIndex];

  const calculateCountdown = () => {
    return `${10 * (selectedRaceIndex + 1)} min`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <h2 className="text-lg font-bold text-white mb-3 text-center">Next Horse Races</h2>

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
              <p className="text-sm text-gray-300">
                {selectedRace.distance} {selectedRace.surface}
              </p>
            </div>
            <div className="text-white text-sm font-semibold">
              Starts in {calculateCountdown()}
            </div>
          </div>

          <div className="space-y-3">
            {selectedRace.runners.map((runner, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-[#12182f] p-3 rounded-lg border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-white">
                    {runner.number}
                  </div>
                  <span className="font-semibold text-white">{runner.name}</span>
                </div>
                <div className="font-bold text-white">{runner.odds}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              View All Horses
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button className="text-sm px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          View All Horse Racing
        </button>
      </div>
    </div>
  );
}
