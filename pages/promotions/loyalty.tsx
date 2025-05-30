import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function LoyaltyClub() {
  return (
    <InfoPageLayout
      title="Loyalty Club"
      description="Join the OhMySportsbetting Loyalty Club and unlock exclusive rewards as you play."
    >
      {/* Loyalty Program Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How The Loyalty Club Works</h2>
        <p className="text-gray-300">
          Every time you place bets, you earn loyalty points automatically. The more you bet, the more points you accumulate — unlocking bigger perks, free bets, cashback boosts, and VIP access.
        </p>
      </section>

      {/* Loyalty Tiers */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Loyalty Tiers</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Bronze: Entry Level – 0 Points</li>
          <li>Silver: 500 Points – 5% extra cashback + weekly free bets</li>
          <li>Gold: 2,500 Points – 10% cashback + priority customer support</li>
          <li>Platinum: 10,000 Points – 20% cashback + dedicated account manager + exclusive promos</li>
        </ul>
      </section>

      {/* How To Earn Points */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Earn Loyalty Points</h2>
        <p className="text-gray-300">
          Earn 1 loyalty point for every 1 Pi wagered on sports markets.
        </p>
      </section>

      {/* Loyalty Rewards */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Loyalty Club Benefits</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Bonus free bets and spins every week</li>
          <li>Increased cashback percentages</li>
          <li>Early access to exclusive promotions</li>
          <li>VIP-only boosted odds markets</li>
          <li>Personalized account manager (Platinum level only)</li>
        </ul>
      </section>

      {/* Terms */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Loyalty Club Terms</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Points are earned on settled bets only</li>
          <li>Points expire after 180 days of inactivity</li>
          <li>Abuse of the loyalty program may result in disqualification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Support & Questions</h2>
        <p className="text-gray-300">
          For any Loyalty Club questions,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
