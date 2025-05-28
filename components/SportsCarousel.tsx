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
  { name: "Volleyball", icon: MdOutlineSportsVolleyball, slug: "volleyball" },
  { name: "A–Z", icon: MdOutlineListAlt, slug: "all-sports" },
];

export default function SportsCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024, // tablet and desktop keep 6
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto my-6 px-2">
      <Slider {...settings}>
        {sports.map(({ name, icon: Icon, slug }) => (
          <Link
            key={slug}
            href={`/sports/${slug}`}
            className="flex flex-col items-center justify-center text-white hover:text-electricCyan cursor-pointer px-1"
            style={{ minWidth: "70px" }}
          >
            <Icon className="text-2xl mb-1" />
            <span className="text-[10px] text-center leading-tight select-none whitespace-nowrap">
              {name}
            </span>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
