// components/BottomNav.tsx
import React from "react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a1024] border-t border-gray-700 p-3 flex justify-around text-white text-sm">
      <button className="hover:text-electricCyan">Home</button>
      <button className="hover:text-electricCyan">Sports</button>
      <button className="hover:text-electricCyan">My Bets</button>
      <button className="hover:text-electricCyan">Account</button>
    </nav>
  );
}
