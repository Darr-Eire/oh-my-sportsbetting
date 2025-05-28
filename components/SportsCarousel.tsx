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

  { name: "Greyhound Racing", icon: FaDog, slug: "greyhound-racing" },

  { name: "Basketball", icon: MdOutlineSportsBasketball, slug: "basketball" },
  { name: "UFC", icon: MdOutlineSportsMma, slug: "ufc" },
  { name: "eSports", icon: MdSportsEsports, slug: "esports" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

export default function SportsCarousel() {
  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      <nav
        className="
          flex flex-wrap justify-center
          gap-2 sm:gap-3 md:gap-4
        "
      >
        {sports.map(({ name, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/sports/${slug}`}
            className="
              flex flex-col items-center text-white hover:text-electricCyan
              w-[calc(20%-0.5rem)] min-w-[60px]
              px-1 py-1
              sm:w-[calc(16.66%-0.75rem)] sm:min-w-[72px]
            "
          >
            <Icon className="text-2xl mb-1 leading-none" />
            <span className="text-[10px] text-center leading-tight select-none whitespace-nowrap">
              {name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
