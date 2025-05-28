import Image from "next/image";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

export default function LegalNotice() {
  return (
    <footer className="w-full bg-[#0a1024] text-white px-4 py-8 border-t border-white mt-12">
      <div className="max-w-6xl mx-auto space-y-6 text-center">

        {/* Rules & Disclaimer */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            OhMySportsbook – Rules & Disclaimer
          </h2>
          <div className="text-sm sm:text-base text-gray-400 space-y-3 max-w-3xl mx-auto">
            <p>
              Odds, data, and results are powered by the Pi Network and third-party feeds.
              Accuracy isn&apos;t guaranteed. Betting is at your own risk.
            </p>
            <p>
              <strong className="text-white">By using this app, you accept our Terms.</strong> 
              Bets are settled based on fairness and community consensus. Admin decisions are final.
            </p>
            <p>
              No liability for errors or disputes. Admin ruling is final and binding.
            </p>
            <p className="text-white font-semibold pt-2">Responsible Gaming</p>
            <p>
              Use Pi for fun, not stress. Stop if betting affects your wellbeing or finances.
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="flex justify-center gap-4 items-center">
          <Image src="/pi-logo.png" alt="Pi Network" width={28} height={28} unoptimized />
          <Image src="/18plus.png" alt="18+" width={28} height={28} unoptimized />
          <Image src="/responsible.png" alt="Responsible Gaming" width={28} height={28} unoptimized />
        </div>

        {/* Copyright */}
        <div className="text-[12px] text-gray-500 space-y-1">
          <p>© {new Date().getFullYear()} OhMySportsbook. All rights reserved.</p>
          <p>Powered by the Pi Network • Built for Pioneers</p>
          <p>Pi is not fiat. Entries and payouts are digital and non-redeemable externally.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-white text-xl mt-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-electricCyan">
            <FaTwitter />
          </a>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-electricCyan">
            <FaDiscord />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-electricCyan">
            <FaTelegramPlane />
          </a>
        </div>

      </div>
    </footer>
  );
}
