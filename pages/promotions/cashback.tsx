import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function CashbackOffers() {
  return (
    <InfoPageLayout
      title="Pi Cash Bash"
      description="Earn weekly Pi cashback based on your weekly wagering volume — the more you play, the more you get back!"
    >
      {/* Cashback Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How Pi Cash Bash Works</h2>
        <p className="text-gray-300">
          Bet regularly and collect Pi Free Bet Tokens every Monday based on your weekly real-money wagering volume. Bigger volume means bigger rewards.
        </p>
      </section>

      {/* Cashback Tiers */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Weekly Cashback Tiers</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>50 - 99 Pi wagered: 2% Cashback</li>
          <li>100 - 499 Pi wagered: 3% Cashback</li>
          <li>500 - 999 Pi wagered: 4% Cashback</li>
          <li>1000+ Pi wagered: 5% Cashback</li>
          <li>Cashback cap: 100 Pi per week</li>
        </ul>
      </section>

      {/* How To Qualify */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Qualify</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Wager real Pi from Monday 00:00 UTC to Sunday 23:59 UTC.</li>
          <li>Only settled bets count (voided or cashed out bets excluded).</li>
          <li>Bonus funds wagers do not count towards cashback.</li>
        </ul>
      </section>

      {/* Cashback Crediting */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Cashback Payouts</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Cashback is credited every Monday by 12:00 UTC.</li>
          <li>Issued as Pi Free Bet Tokens (non-withdrawable; winnings withdrawable).</li>
          <li>Free Bet Tokens expire 7 days after being issued.</li>
        </ul>
      </section>

      {/* Responsible Play */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Play</h2>
        <p className="text-gray-300">
          Bet responsibly. For assistance or self-exclusion options,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">contact our support team</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
