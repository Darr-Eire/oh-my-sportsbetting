"use client";
import Link from "next/link";
import {
  MdSportsSoccer,
  MdAccessTime,
  MdOutlineCasino,
  MdOutlineSportsBasketball,
  MdOutlineSportsMma,
  MdSportsEsports,
  MdOutlineSportsTennis,
  MdOutlineListAlt,
} from "react-icons/md";
import { FaHorse, FaDog } from "react-icons/fa";

const sports = [
  { name: "Football", icon: MdSportsSoccer, slug: "football" },
  { name: "Horse Racing", icon: FaHorse, slug: "horse-racing" },
  { name: "In-Play", icon: MdAccessTime, slug: "in-play" },
  { name: "Greyhound Racing", icon: FaDog, slug: "greyhound-racing" },
  { name: "Basketball", icon: MdOutlineSportsBasketball, slug: "basketball" },
  { name: "UFC", icon: MdOutlineSportsMma, slug: "ufc" },
  { name: "eSports", icon: MdSportsEsports, slug: "esports" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

export default function SportsCarousel() {
  return (
    <div className="w-full flex justify-center">
      <nav className="flex flex-wrap justify-center gap-4 py-4">
        {sports.map(({ name, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/sports/${slug}`}
            className="flex-shrink-0 flex flex-col items-center justify-center w-16 sm:w-20 rounded-lg text-white hover:text-electricCyan transition"
          >
            <Icon className="text-3xl mb-1" />
            <span className="text-[11px] text-center leading-tight">{name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
