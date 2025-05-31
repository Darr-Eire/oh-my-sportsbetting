import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function LoyaltyClub() {
  return (
    <InfoPageLayout
      title="Pioneer Loyalty Club"
      description="Unlock exclusive rewards, free bets, cashback, and VIP access as you bet and climb the ranks."
    >
      {/* Loyalty Program Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How The Loyalty Club Works</h2>
        <p className="text-gray-300">
          Earn Loyalty Points every time you place bets. The more you bet, the higher your tier. Each level brings bigger rewards, weekly free bets, cashback bonuses, VIP access, and exclusive Pi-powered perks.
        </p>
      </section>

      {/* Loyalty Tiers */}
    <section>
  <h2 className="text-xl font-semibold text-white mb-4">Loyalty Tiers & Benefits</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full text-gray-300 text-left border-collapse">
      <thead>
        <tr className="bg-[#1a1f3c]">
          <th className="py-3 px-6 border border-gray-700 font-semibold">Tier</th>
          <th className="py-3 px-6 border border-gray-700 font-semibold">Points Required</th>
          <th className="py-3 px-6 border border-gray-700 font-semibold">Weekly Free Bet</th>
          <th className="py-3 px-6 border border-gray-700 font-semibold">Cashback</th>
        </tr>
      </thead>
      <tbody className="bg-[#0a1024]">
        <tr>
          <td className="py-3 px-6 border border-gray-700">Pioneer</td>
          <td className="py-3 px-6 border border-gray-700">0</td>
          <td className="py-3 px-6 border border-gray-700">1 Pi</td>
          <td className="py-3 px-6 border border-gray-700">-</td>
        </tr>
        <tr>
          <td className="py-3 px-6 border border-gray-700">Explorer</td>
          <td className="py-3 px-6 border border-gray-700">500</td>
          <td className="py-3 px-6 border border-gray-700">5 Pi</td>
          <td className="py-3 px-6 border border-gray-700">2%</td>
        </tr>
        <tr>
          <td className="py-3 px-6 border border-gray-700">Navigator</td>
          <td className="py-3 px-6 border border-gray-700">2500</td>
          <td className="py-3 px-6 border border-gray-700">10 Pi</td>
          <td className="py-3 px-6 border border-gray-700">4%</td>
        </tr>
        <tr>
          <td className="py-3 px-6 border border-gray-700">Commander</td>
          <td className="py-3 px-6 border border-gray-700">10,000</td>
          <td className="py-3 px-6 border border-gray-700">20 Pi</td>
          <td className="py-3 px-6 border border-gray-700">8%</td>
        </tr>
        <tr>
          <td className="py-3 px-6 border border-gray-700">Legend</td>
          <td className="py-3 px-6 border border-gray-700">50,000</td>
          <td className="py-3 px-6 border border-gray-700">50 Pi</td>
          <td className="py-3 px-6 border border-gray-700">12%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      {/* Earning Points */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Earn Points</h2>
        <p className="text-gray-300">
          Earn 1 Loyalty Point for every 1 Pi wagered. Real-money sports, live betting, and esports markets qualify. Bonus bets do not earn points.
        </p>
      </section>

      {/* Key Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Key Loyalty Rules</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Points expire after 180 days of inactivity.</li>
          <li>Loyalty Level recalculated weekly based on last 90 days volume.</li>
          <li>Abuse or fraud will result in loyalty status suspension.</li>
        </ul>
      </section>

      {/* VIP Perks */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">VIP Access & Perks</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Exclusive Boosted Odds Markets (Navigator+)</li>
          <li>VIP Account Manager (Commander+)</li>
          <li>Private Promotions & Event Invitations (Legend)</li>
          <li>Priority Customer Support</li>
        </ul>
      </section>

      {/* Responsible Gambling */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Play</h2>
        <p className="text-gray-300">
          Please bet responsibly. For support,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">contact our team</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
