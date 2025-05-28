"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "🎯 Have You Used Your FREE SPIN Yet?",
    description: "Spin the wheel now and win bonus Pi prizes instantly!",
    button: "Play Here",
    bg: "from-green-700 to-green-900",
    action: "/spin",
  },
  {
    title: "🔥 Power Price Boosts",
    description: "Enhanced odds on big fixtures this weekend. Don’t miss out.",
    button: "See Boosts",
    bg: "from-yellow-500 to-yellow-700",
    action: "/power-prices",
  },
  {
    title: "🎁 Sign-Up Bonus",
    description: "New players get a free entry into this week’s Pi jackpot.",
    button: "Join Now",
    bg: "from-cyan-600 to-cyan-800",
    action: "/signup",
  },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <div className="relative overflow-hidden mb-6 rounded-2xl shadow-xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`relative w-full h-full p-8 text-center text-white bg-gradient-to-r ${slide.bg} overflow-hidden`}
        >
          {/* Floating glow effect */}
          <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] before:bg-[length:20px_20px] before:opacity-10 before:z-10" />

          {/* Text content */}
          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-glow mb-2">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg opacity-90 drop-shadow-md">{slide.description}</p>
            <a href={slide.action}>
              <button className="mt-5 bg-black/40 hover:bg-black/60 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                {slide.button}
              </button>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30">
        <FaArrowLeft onClick={prev} className="text-white text-xl hover:scale-125 transition-transform cursor-pointer" />
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30">
        <FaArrowRight onClick={next} className="text-white text-xl hover:scale-125 transition-transform cursor-pointer" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white shadow-md scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
