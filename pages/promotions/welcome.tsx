import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function WelcomeOffer() {
  return (
    <InfoPageLayout
      title="Pi Pioneer Welcome Bonus"
      description="Exclusive offer for Pi Network Pioneers — claim your Pi-powered starter bonus today."
    >
      {/* Offer Details */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Bonus Overview</h2>
        <p className="text-gray-300">
          Join Oh My Sports Betting and get your first Pi deposit matched 100% up to <span className="text-white font-bold">1000 Pi</span>. 
          Plus receive an instant <span className="text-white font-bold">25 Pi Free Bet Tokens</span> and a <span className="text-white font-bold">Second Chance Bet</span> up to 500 Pi if your first bet loses.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Claim</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Create your Oh My Sports Betting account and verify your Pi Network identity.</li>
          <li>Link your Pi wallet and complete KYC verification.</li>
          <li>Make your first deposit (min 5 Pi, max 1000 Pi).</li>
          <li>Instantly receive your matched bonus, free bet tokens, and eligibility for your Second Chance Bet.</li>
        </ul>
      </section>

      {/* Wagering Requirements */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Wagering Requirements</h2>
        <p className="text-gray-300">
          - Deposit Match: 1x wagering before withdrawal.
          <br />
          - Free Bet winnings: withdrawable instantly.
          <br />
          - Second Chance Bet credited after first bet settles as a loss.
        </p>
      </section>

      {/* Key Terms */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Key Terms</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Minimum deposit: 5 Pi</li>
          <li>Maximum bonus match: 1000 Pi</li>
          <li>25 Pi Free Bet Tokens issued automatically</li>
          <li>Second Chance Bet up to 500 Pi on first wager</li>
          <li>One welcome bonus per user only</li>
          <li>Bonus must be claimed within 7 days of registration</li>
          <li>Bonus valid for 30 days after activation</li>
          <li>Abuse, multiple accounts, or fraud will void bonus</li>
        </ul>
      </section>

      {/* Responsible Gambling */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Gambling</h2>
        <p className="text-gray-300">
          Please bet responsibly. If you need assistance or want to set account limits,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
