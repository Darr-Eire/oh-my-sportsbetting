// pages/inplay.tsx
import { useState } from "react";
import Head from "next/head";
import LiveInPlayTabs from "../components/LiveInPlayTabs";
import LiveInPlayCard from "../components/LiveInPlayCard";

const allMatches = [
  { sport: "Football", league: "Swedish Allsvenskan", home: "Brommapojkarna", away: "Djurgardens", time: "43", odds: { home: "11/2", draw: "5/2", away: "8/15" } },
  { sport: "Football", league: "Belgian First Division A", home: "Antwerp", away: "Charleroi", time: "10", odds: { home: "11/8", draw: "2/1", away: "2/1" } },
  { sport: "Cricket", league: "One Day Internationals", home: "England 400/8", away: "West Indies 8/0", time: "In-Play", odds: { home: "1/50", draw: "-", away: "12/1" } },
];

export default function InPlayPage() {
  const [selectedSport, setSelectedSport] = useState("All");

  const filtered = selectedSport === "All" ? allMatches : allMatches.filter(m => m.sport === selectedSport);

  return (
    <>
      <Head><title>In-Play Matches</title></Head>
      <div className="min-h-screen bg-[#0a0a23] text-white">
        <LiveInPlayTabs selected={selectedSport} setSelected={setSelectedSport} />
        <div className="p-4">
          {filtered.map((match, idx) => (
            <LiveInPlayCard key={idx} {...match} />
          ))}
        </div>
      </div>
    </>
  );
}
