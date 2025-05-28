import React from 'react';
import { FaHome, FaFutbol, FaTicketAlt, FaWallet } from 'react-icons/fa';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a23] border-t border-[#1f1f40] text-white flex justify-around py-3 z-50 md:hidden">
      <button className="flex flex-col items-center text-xs hover:text-cyan-300">
        <FaHome className="text-lg" />
        Home
      </button>
      <button className="flex flex-col items-center text-xs hover:text-cyan-300">
        <FaFutbol className="text-lg" />
        Sports
      </button>
      <button className="flex flex-col items-center text-xs hover:text-cyan-300">
        <FaTicketAlt className="text-lg" />
        Bets
      </button>
      <button className="flex flex-col items-center text-xs hover:text-cyan-300">
        <FaWallet className="text-lg" />
        Wallet
      </button>
    </nav>
  );
};

export default BottomNav;
