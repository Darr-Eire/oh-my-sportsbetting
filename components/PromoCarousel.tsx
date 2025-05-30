"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Define your slides
const slides = [
  {
    title: "🎯 Have You Used Your FREE SPIN Yet?",
    description:
      "Don’t leave your free spin unused! Spin the wheel now for a guaranteed chance to win bonus Pi prizes, free bets, or exclusive rewards. Instant prizes waiting with every spin — no strings attached.",
    button: "Spin Now",
    radial: "radial-green",
    action: "/spin",
  },
  {
    title: "🔥 Power Price Boosts: Bigger Odds, Bigger Wins!",
    description:
      "This weekend’s biggest matches come with exclusive boosted odds you won’t find anywhere else. Maximize your profits with higher payouts on select fixtures. Limited-time offers — act before kickoff!",
    button: "View Boosts",
    radial: "radial-yellow",
    action: "/power-prices",
  },
  {
    title: "🎁 Welcome Bonus: Free Jackpot Entry!",
    description:
      "New here? We’re giving every new player a FREE entry into this week’s Pi Jackpot! Register today and instantly secure your chance to win huge cash prizes. No deposit required to claim your spot.",
    button: "Join & Play",
    radial: "radial-cyan",
    action: "/signup",
  },
];

// Map radial backgrounds to button gradients
const buttonColors = {
  "radial-green": "from-[#0a1024] to-[#0a1024] hover:from-green-500 hover:to-green-700",
  "radial-yellow": "from-[#0a1024] to-[#0a1024] hover:from-yellow-500 hover:to-yellow-700",
  "radial-cyan": "from-[#0a1024] to-[#0a1024] hover:from-cyan-500 hover:to-cyan-700",
};

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <div className="relative overflow-hidden mb-6 rounded-3xl shadow-2xl h-60 md:h-96 p-4 md:p-8 text-center text-white bg-[#0f172a]">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full flex justify-center items-center z-10"
        >
          <div className="relative w-full max-w-xl h-full bg-black/40 rounded-3xl border border-white/10 backdrop-blur-lg shadow-lg overflow-hidden">

            {/* Radial lighting inside the card */}
            <div className={`absolute inset-0 bg-${slide.radial}`}></div>

            {/* Particle Motion */}
            <div className="absolute inset-0 animate-particles bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center p-6 md:p-8 text-white">
              <h2 className="text-1xl md:text-2xl font-extrabold drop-shadow-lg mb-3">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg opacity-90 drop-shadow-md">
                {slide.description}
              </p>
              <a href={slide.action}>
                <button
                  className={`mt-5 bg-gradient-to-r ${buttonColors[slide.radial]} border border-white/20 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-base`}
                >
                  {slide.button}
                </button>
              </a>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer">
        <FaArrowLeft onClick={prev} className="text-white text-lg hover:scale-125 transition-transform" />
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer">
        <FaArrowRight onClick={next} className="text-white text-lg hover:scale-125 transition-transform" />
      </div>
    </div>
  );
}
