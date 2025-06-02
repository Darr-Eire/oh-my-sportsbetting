"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const promotions = [
  { 
    title: "🔥 Free Bets", 
    description: "Place your first bet and get risk-free stakes refunded up to 20 Pi. Available on selected matches.",
    link: "/promotions/free-bets"
  },
  { 
    title: "🎁 Welcome Bonus", 
    description: "Sign up today and get a 100% matched deposit bonus up to 100 Pi to start betting instantly.",
    link: "/promotions/welcome-bonus"
  },
  { 
    title: "⚡ Beat The Pi Drop", 
    description: "Join the Pi Drop leaderboard every weekend — hit the highest streak and collect double Pi payouts!",
    link: "/promotions/pi-drop"
  },
  { 
    title: "🎯 Risk Free Bet", 
    description: "Your first live bet is completely risk-free. If it loses, we refund your stake back in Pi instantly.",
    link: "/promotions/risk-free"
  },
  { 
    title: "💎 Loyalty Streak Boost", 
    description: "Place bets daily and activate loyalty streak multipliers to earn bonus Pi rewards.",
    link: "/promotions/loyalty-streak"
  },
  { 
    title: "🎰 Weekly Jackpot Draw", 
    description: "Every bet enters you into the weekly jackpot draw. Huge Pi prize pools up for grabs!",
    link: "/promotions/jackpot"
  },
  { 
    title: "👥 Refer & Earn", 
    description: "Invite friends and earn up to 10 Pi per referral when they place their first bet.",
    link: "/promotions/refer"
  },
  { 
    title: "💸 Early Cashout", 
    description: "Secure your winnings early with our instant cashout feature on select markets.",
    link: "/promotions/cashout"
  },
  { 
    title: "📊 Bet Builder Boost", 
    description: "Build your own custom multi-leg bet and receive a Pi boost on selected combinations.",
    link: "/promotions/bet-builder"
  },
  { 
    title: "⚡ Pi Exclusive Odds", 
    description: "Unlock special boosted odds only available for Pi-based stakes. Bigger odds, bigger returns.",
    link: "/promotions/exclusive-odds"
  }
];

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function PromotionsBanner() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-8 border border-white rounded-2xl bg-[#0a1024] p-6 shadow-lg">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-3xl font-bold text-white text-center">
           Current Promotions
        </h2>
      </div>

      <Carousel 
        responsive={responsive} 
        infinite 
        autoPlay 
        autoPlaySpeed={5000} 
        arrows 
        itemClass="px-2"
      >
        {promotions.map((promo, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-[#0a1024] rounded-xl border border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">{promo.title}</h3>
            <p className="text-base text-white mb-6 text-center">{promo.description}</p>
            <div className="flex justify-center">
              <Link href={promo.link} className="px-6 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black transition">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
