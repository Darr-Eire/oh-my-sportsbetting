import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function OddsBoosts() {
  return (
    <InfoPageLayout
      title="Odds Boosts"
      description="Get enhanced odds on selected markets for even bigger Pi payouts."
    >
      {/* Odds Boost Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">What Are Odds Boosts?</h2>
        <p className="text-gray-300">
          Odds Boosts allow you to place bets on selected matches or markets at enhanced odds, offering bigger potential returns for the same stake.
        </p>
      </section>

      {/* Where to Find Boosts */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Where To Find Boosts</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Daily boosted markets are highlighted directly on event pages</li>
          <li>Power Price Boosts featured in the homepage carousel</li>
          <li>Exclusive boosts for key matches and tournaments</li>
        </ul>
      </section>

      {/* Boost Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Boost Terms & Rules</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Odds Boost offers may have maximum stake limits</li>
          <li>Boosted bets are available for single bets only unless stated otherwise</li>
          <li>All boosted bets settle as normal once the event completes</li>
          <li>Boosts cannot be combined with Free Bets or Cashback on the same wager</li>
        </ul>
      </section>

      {/* Example */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Example Boost</h2>
        <p className="text-gray-300">
          Original odds: 2.50 → Boosted odds: 3.20  
          Stake: 10 Pi → Winnings: 32 Pi instead of 25 Pi.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Important</h2>
        <p className="text-gray-300">
          All Odds Boosts are time-limited and subject to availability. OhMySportsbetting reserves the right to amend or cancel boosts at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Support</h2>
        <p className="text-gray-300">
          For any issues with boosted bets, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
