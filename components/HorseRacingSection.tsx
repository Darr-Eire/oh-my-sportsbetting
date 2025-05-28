"use client";

import { useState } from "react";
import Image from "next/image";

export default function HorseRacingSection() {
  const [openHorseRacing, setOpenHorseRacing] = useState(false);
  const toggleHorseRacing = () => setOpenHorseRacing((prev) => !prev);

  const horseRaces = [
    {
      track: "Ascot",
      countryCode: "gb",
      raceTime: "14:00",
      raceName: "Spring Trophy Handicap",
      runners: [
        {
          number: 1,
          name: "Thunder Strike",
          jockey: "L. Dettori",
          trainer: "J. Gosden",
          form: "321",
          odds: "3/1",
        },
        {
          number: 2,
          name: "Golden Arrow",
          jockey: "W. Buick",
          trainer: "C. Appleby",
          form: "145",
          odds: "9/2",
        },
      ],
    },
    {
      track: "Punchestown",
      countryCode: "ie",
      raceTime: "15:30",
      raceName: "Champion Hurdle Trial",
      runners: [
        {
          number: 3,
          name: "Irish Rebel",
          jockey: "R. Walsh",
          trainer: "W. Mullins",
          form: "112",
          odds: "5/2",
        },
        {
          number: 4,
          name: "Emerald Dawn",
          jockey: "D. Russell",
          trainer: "G. Elliott",
          form: "243",
          odds: "11/2",
        },
      ],
    },
  ];

  return (
    <section className="mt-12 w-full max-w-3xl border border-white rounded-lg">
      <button
        onClick={toggleHorseRacing}
        className="flex items-center gap-3 w-full px-4 py-3 text-left text-white font-semibold hover:bg-[#14215c] transition rounded-t-lg"
        aria-expanded={openHorseRacing}
        aria-controls="horse-racing-races"
      >
        <span className="flex items-center gap-2">
          <span>Today’s Horse Racing</span>
          <Image
            src="https://flagcdn.com/w20/gb.png"
            alt="UK Flag"
            width={20}
            height={14}
            className="object-contain rounded-sm"
            unoptimized
          />
          <Image
            src="https://flagcdn.com/w20/ie.png"
            alt="Ireland Flag"
            width={20}
            height={14}
            className="object-contain rounded-sm"
            unoptimized
          />
        </span>
        <svg
          className={`ml-auto h-5 w-5 transition-transform ${
            openHorseRacing ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {openHorseRacing && (
        <div
          id="horse-racing-races"
          className="mt-4 space-y-6 px-4 pb-4 border-t border-white rounded-b-lg"
        >
          {horseRaces.map(({ track, countryCode, raceTime, raceName, runners }, i) => (
            <div key={i} className="border border-gray-700 rounded-lg bg-[#0a1024] p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-base">{track}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white font-medium">{raceTime}</span>
                  <Image
                    src={`https://flagcdn.com/w20/${countryCode}.png`}
                    alt={`${countryCode} flag`}
                    width={20}
                    height={14}
                    className="object-contain rounded-sm"
                    unoptimized
                  />
                </div>
              </div>

              <div className="text-sm italic text-gray-300 mb-4">{raceName}</div>

              <div className="divide-y divide-gray-700">
                {runners.map(({ number, name, jockey, trainer, form, odds }, idx) => (
                  <div key={idx} className="flex items-center py-3 text-sm">
                    {/* Number Circle */}
                    <div className="flex items-center gap-3 w-10 font-bold text-white">
                      <span>{number}</span>
                      <div className="h-6 w-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white font-semibold select-none">
                        {number}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col flex-grow ml-2 text-left">
                      <span className="font-semibold">{name}</span>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-0.5">
                        <span>J: {jockey}</span>
                        <span>T: {trainer}</span>
                        <span>F: {form}</span>
                      </div>
                      <button className="text-xs text-electricCyan mt-1 underline hover:text-white transition">
                        More information
                      </button>
                    </div>

                    {/* Odds */}
                    <div className="ml-auto font-semibold text-green-500 bg-green-900 bg-opacity-20 px-3 py-1 rounded-md">
                      {odds}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
