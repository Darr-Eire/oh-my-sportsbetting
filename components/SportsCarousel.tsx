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
  MdOutlineSportsCricket,
  MdOutlineSportsVolleyball,
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
  { name: "Table Tennis", icon: MdOutlineSportsTennis, slug: "table-tennis" },
  { name: "Cricket", icon: MdOutlineSportsCricket, slug: "cricket" },
  { name: "Volleyball", icon: MdOutlineSportsVolleyball, slug: "volleyball" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

export default function SportsCarousel() {
  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      <nav
        className="flex gap-2 overflow-x-auto no-scrollbar touch-pan-x"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {sports.map(({ name, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/sports/${slug}`}
            className="flex flex-col items-center text-white hover:text-electricCyan min-w-[72px] px-1 flex-shrink-0"
          >
            <Icon className="text-2xl mb-1" />
            <span className="text-[10px] text-center leading-tight select-none whitespace-nowrap">
              {name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
