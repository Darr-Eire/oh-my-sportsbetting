import Link from "next/link";
import {
  MdSportsSoccer,
  MdAccessTime,
  MdOutlineCasino,
  MdOutlineSportsGolf,
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
  { name: "Lotteries", icon: MdOutlineCasino, slug: "lotteries" },
  { name: "Greyhound Racing", icon: FaDog, slug: "greyhound-racing" },
  { name: "Golf", icon: MdOutlineSportsGolf, slug: "golf" },
  { name: "Basketball", icon: MdOutlineSportsBasketball, slug: "basketball" },
  { name: "UFC", icon: MdOutlineSportsMma, slug: "ufc" },
  { name: "eSports", icon: MdSportsEsports, slug: "esports" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

export default function SportsCarousel() {
  return (
    <div className="max-w-4xl mx-auto my-6 px-2">
      <nav className="flex overflow-x-auto gap-4 justify-start py-4 scrollbar-thin scrollbar-thumb-electricCyan scrollbar-track-transparent">
        {sports.map(({ name, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/sports/${slug}`}
            className="flex flex-col items-center justify-center text-white hover:text-electricCyan w-[70px] sm:w-[80px] flex-shrink-0"
          >
            <Icon className="text-3xl mb-1" />
            <span className="text-xs sm:text-sm text-center leading-tight select-none whitespace-nowrap">
              {name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
