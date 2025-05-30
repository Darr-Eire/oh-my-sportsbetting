"use client";
import { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import races from '../data/greyhound_races.json';



const races = {
  Today: [
    {
      track: "Shelbourne Park",
      countryCode: "ie",
      raceTime: "19:45",
      raceName: "Open 480m Final",
      runners: ["Fast Jet", "Silver Fox", "Rapid Storm", "Moonlight Dash", "Blazing Star", "Dark Whisper"],
    },
    {
      track: "Harlow",
      countryCode: "gb",
      raceTime: "20:15",
      raceName: "Sprint 400m Semi",
      runners: ["Red Rocket", "Blue Flame", "Grey Tornado", "White Comet", "Shadow Dash", "Blackout"],
    },
    {
      track: "Nottingham",
      countryCode: "gb",
      raceTime: "18:45",
      raceName: "Evening Dash",
      runners: ["Jet Stream", "Whirlwind", "Black Viper", "Night Howl", "Golden Arrow", "Stealth Mode"],
    },
    {
      track: "Dundalk",
      countryCode: "ie",
      raceTime: "21:00",
      raceName: "Late Night Sprint",
      runners: ["Storm Cloud", "Blazing Trail", "Red Zone", "Silver Strike", "Phantom Jet", "Lunar Light"],
    },
    {
      track: "Oxford",
      countryCode: "gb",
      raceTime: "22:10",
      raceName: "Final Burst",
      runners: ["Heat Wave", "Black Steel", "Crimson Dash", "Gold Rush", "Turbo Jet", "Midnight Mist"],
    },
  ],
  Tomorrow: [
    {
      track: "Limerick",
      countryCode: "ie",
      raceTime: "18:30",
      raceName: "Novice 525m",
      runners: ["Lucky Lad", "Tiny Dancer", "Electric Dash", "Nocturne", "Star Blazer", "Swift Breeze"],
    },
    {
      track: "Romford",
      countryCode: "gb",
      raceTime: "21:00",
      raceName: "Champion Stakes",
      runners: ["Fireball", "Steel Runner", "Grey Phantom", "Blitz", "Wild Fury", "Night Runner"],
    },
    {
      track: "Clonmel",
      countryCode: "ie",
      raceTime: "17:50",
      raceName: "Twilight Sprint",
      runners: ["Dash Dream", "Silver Thunder", "Howler", "Fast Spark", "Deep Dive", "Blue Hound"],
    },
    {
      track: "Towcester",
      countryCode: "gb",
      raceTime: "19:15",
      raceName: "Starlight Stakes",
      runners: ["Flashpoint", "Razor Edge", "Dark Zone", "Solar Flare", "Gale Force", "Venom"],
    },
   {
  track: "Waterford",
  countryCode: "ie",
  raceTime: "18:10",
  raceName: "Maiden 325m Heat",
  runners: ["Jet Arrow", "Slick Runner", "Thunder King", "Velvet Dash", "Copper Jet", "Speed Queen"],
},
{
  track: "Waterford",
  countryCode: "ie",
  raceTime: "19:00",
  raceName: "Intermediate 480m",
  runners: ["Nova Flash", "Steel Shadow", "White Blaze", "Rapid Bullet", "Crimson Streak", "Wind Cutter"],
},
{
  track: "Waterford",
  countryCode: "ie",
  raceTime: "19:50",
  raceName: "Stayers Trial 600m",
  runners: ["Longstride", "Mile Marker", "Night Charger", "Slow Burn", "Double Step", "Marathon Jet"],
},
{
  track: "Waterford",
  countryCode: "ie",
  raceTime: "20:40",
  raceName: "Evening Classic",
  runners: ["Night Shift", "Blackout", "Hurricane Jet", "Silent Storm", "Glide Path", "Quick Shot"],
},
{
  track: "Waterford",
  countryCode: "ie",
  raceTime: "21:30",
  raceName: "Sprint Finale 350m",
  runners: ["Flash Jet", "Boomerang", "Dark Fire", "Lucky Leap", "Sky Burst", "Crash Course"],
},

  ],
};


const trapColors = [
  "bg-white text-black",                // Trap 1
  "bg-blue-600 text-white",             // Trap 2
  "bg-red-600 text-white",              // Trap 3
  "bg-black text-white",                // Trap 4
  "bg-orange-400 text-black",           // Trap 5
  "bg-[repeating-linear-gradient(45deg,_#000_0_10px,_#fff_10px_20px)] text-red-600" // Trap 6
];

export default function GreyhoundRacing() {
  const [activeTab, setActiveTab] = useState<"Today" | "Tomorrow">("Today");

  return (
    <>
      <Head>
        <title>Greyhound Racing – OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        {/* Hero */}
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-3xl font-bold">Greyhound Racing</h1>
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
              className={`px-4 py-2 rounded-md font-semibold ${
                activeTab === tab ? "bg-yellow-400 text-black" : "bg-[#1a1a3d] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Race Cards */}
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {races[activeTab].map((race, i) => (
            <details
              key={i}
              className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md overflow-hidden group"
            >
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://flagcdn.com/w20/${race.countryCode}.png`}
                    alt="flag"
                    width={20}
                    height={14}
                    className="rounded-sm"
                    unoptimized
                  />
                  <span>{race.track} – {race.raceName}</span>
                </div>
                <span className="text-sm text-gray-400">{race.raceTime}</span>
              </summary>

              {/* Dog Rows */}
              <div className="p-4 space-y-4">
                {race.runners.map((dog, index) => {
                  const odds = `${(1.5 + index * 0.5).toFixed(1)}/1`;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border border-gray-700 rounded-md px-4 py-3 bg-[#10182f] shadow"
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center font-bold text-sm rounded-sm ${trapColors[index % trapColors.length]}`}
                      >
                        {index + 1}
                      </div>

                      <div className="flex-1 px-4">
                        <p className="text-white font-semibold">{dog}</p>
                      </div>

                      <div className="bg-[#0a1024] text-white text-sm font-bold py-1 px-3 rounded shadow border border-white min-w-[60px] text-center">
                        {odds}
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
