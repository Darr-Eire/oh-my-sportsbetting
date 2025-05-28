// components/LegalNotice.tsx
export default function LegalNotice() {
  return (
    <div className="bg-[#0f0f1f] text-white p-6 mt-12 rounded-lg border border-[#2c2c3c]">
      <h2 className="text-lg font-bold text-gold mb-4">OhMySportsbook Rules & Disclaimer</h2>

      <p className="text-sm text-gray-300 mb-3">
        All odds, data, and results shown in this app are powered by the Pi Network and third-party live feeds.
        While we strive to keep everything accurate and up-to-date, delays or inaccuracies may occur.
        Users who choose to place bets based on this data do so at their own risk.
      </p>

      <p className="text-sm text-gray-300 mb-3">
        <strong>By using this app, you agree to the OhMySportsbook Terms of Use</strong>. All bets are settled according
        to internal rules based on community consensus and fairness principles. If discrepancies arise,
        the admin's final decision will be binding. We accept no liability for data mismatches or payout disputes.
      </p>

      <h3 className="text-md font-semibold text-electricCyan mt-4 mb-2">Responsible Gaming</h3>
      <p className="text-sm text-gray-400 mb-3">
        We support responsible use of Pi for entertainment. If you feel that betting or gaming is affecting your
        wellbeing or finances, please stop and seek help from the Pi community or your local support services.
      </p>

      <div className="text-xs text-gray-500 mt-4 space-y-1">
        <p>© {new Date().getFullYear()} OhMySportsbook. All rights reserved.</p>
        <p>Powered by the Pi Network • Built for Pioneers</p>
        <p>Pi is not a fiat currency. All entries and payouts are managed digitally and cannot be cashed out outside the network.</p>
      </div>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <img src="/gambleaware.svg" alt="Be Gamble Aware" className="h-6" />
        <img src="/18plus.svg" alt="18+" className="h-6" />
        <img src="/pi-logo.svg" alt="Pi Network" className="h-6" />
        <img src="/responsible.svg" alt="Responsible Gambling" className="h-6" />
      </div>
    </div>
  );
}
