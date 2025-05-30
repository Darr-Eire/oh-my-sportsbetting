import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function CashbackOffers() {
  return (
    <InfoPageLayout
      title="Cashback Offers"
      description="Get part of your losses refunded through our weekly Pi cashback promotions."
    >
      {/* Cashback Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How Cashback Works</h2>
        <p className="text-gray-300">
          Our cashback promotions give you back a percentage of your weekly net losses as Pi credits. Even when luck doesn’t go your way, you’re still rewarded.
        </p>
      </section>

      {/* Cashback Percentage */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Weekly Cashback Rates</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Standard Cashback: 10% of weekly net losses</li>
          <li>VIP Cashback: Up to 20% based on loyalty tier</li>
          <li>Cashback paid every Monday automatically</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Eligibility Rules</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Only settled bets are counted toward net loss calculations</li>
          <li>Voided bets, cashed-out bets, or system errors are excluded</li>
          <li>Bonus funds do not count toward cashback calculations</li>
          <li>Account must be in good standing to receive cashback</li>
        </ul>
      </section>

      {/* Cashback Terms */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Cashback Terms</h2>
        <p className="text-gray-300">
          Cashback credits are issued as non-withdrawable bonus funds, but can be wagered immediately. Wagering requirement is 1x on cashback credits before they can be withdrawn.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Play</h2>
        <p className="text-gray-300">
          We encourage responsible betting at all times. If you feel you need support or wish to apply limits,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">contact our support team</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
``
