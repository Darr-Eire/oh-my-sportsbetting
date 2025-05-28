"use client";
import React, { useState } from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaFistRaised,
  FaTableTennis,
  FaGamepad,
} from "react-icons/fa";

const allMatches = [
  {
    sport: "Football",
    league: "Premier League",
    country: "England",
    matches: [
      { teams: "Man City vs Arsenal", time: "Today, 16:30" },
    ],
  },
  {
    sport: "UFC",
    league: "UFC 302",
    country: "USA",
    matches: [
      { teams: "Jones vs Miocic", time: "Tonight, 03:00" },
    ],
  },
  // Add more...
];

const sportIcons = [
  { label: "All", icon: <span className="text-lg">🌐</span> },
  { label: "Football", icon: <FaFutbol /> },
  { label: "Basketball", icon: <FaBasketballBall /> },
  { label: "UFC", icon: <FaFistRaised /> },
  { label: "Tennis", icon: <FaTableTennis /> },
  { label: "eSports", icon: <FaGamepad /> },
];

export default function MatchList() {
  const [selectedSport, setSelectedSport] = useState("All");

  const filtered = allMatches.filter((group) => {
    return selectedSport === "All" || group.sport === selectedSport;
  });

  return (
    <section className="p-4">
      {/* Icon Filter */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-6 border-b border-[#333]">
        {sportIcons.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelectedSport(item.label)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded text-xs ${
              selectedSport === item.label
                ? "text-gold border-b-2 border-yellow-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Match List */}
      {filtered.length === 0 ? (
        <div className="text-gray-500 text-sm">No matches found.</div>
      ) : (
        filtered.map((group, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-lg font-semibold text-gold mb-2">
              {group.league}
            </h2>
            <div className="space-y-3">
              {group.matches.map((match, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-deepBlue p-3 rounded-md border border-[#1f1f3d]"
                >
                  <div>
                    <div className="text-md font-medium">{match.teams}</div>
                    <div className="text-xs text-gray-400">
                      {group.sport} · {group.country} · {match.time}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-600 px-2 py-1 rounded text-sm hover:bg-blue-500">Home</button>
                    <button className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-600">Draw</button>
                    <button className="bg-red-600 px-2 py-1 rounded text-sm hover:bg-red-500">Away</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}
