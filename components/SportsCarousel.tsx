import Link from "next/link";
import Slider from "react-slick";
import {
  MdSportsSoccer,
  MdAccessTime,
  MdOutlineCasino,
  MdOutlineSportsGolf,
  MdOutlineSportsBasketball,
  MdOutlineSportsMma,
  MdSportsEsports,
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 10,
  };

  return (
    <div className="max-w-4xl mx-auto my-6 px-2">
      <Slider {...settings}>
        {sports.map(({ name, icon: Icon, slug }) => (
          <div key={slug} className="flex justify-center">
            <Link
              href={`/sports/${slug}`}
              className="flex flex-col items-center text-white hover:text-electricCyan cursor-pointer select-none"
            >
              <Icon className="text-2xl leading-none mb-1" />
              <span className="text-xs text-center leading-tight whitespace-nowrap">
                {name}
              </span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
