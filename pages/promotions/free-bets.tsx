import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function FreeBets() {
  return (
    <InfoPageLayout
      title="Free Bets"
      description="Earn free bets through ongoing promotions, loyalty rewards, and special campaigns."
    >
      {/* How Free Bets Work */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How Free Bets Work</h2>
        <p className="text-gray-300">
          Free Bets allow you to place wagers without using your own Pi balance. If your free bet wins, you keep the winnings — the free bet stake itself is not returned.
        </p>
      </section>

      {/* How to Earn */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Earn Free Bets</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Participate in weekly promotions or contests</li>
          <li>Complete account verification and receive welcome free bets</li>
          <li>Qualify for loyalty rewards and special events</li>
          <li>Receive targeted free bets based on your betting activity</li>
        </ul>
      </section>

      {/* Free Bet Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Free Bet Terms</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Free bet stake is not included in any winnings</li>
          <li>Free bets may have specific minimum odds requirements</li>
          <li>Free bets expire if unused within 7 days</li>
          <li>Free bet winnings may be subject to 1x wagering before withdrawal</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Important</h2>
        <p className="text-gray-300">
          Always check the promotional page for full rules and eligibility. Free bets are non-transferable and may be voided if account abuse is suspected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Need Assistance?</h2>
        <p className="text-gray-300">
          Contact{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Support</span>
          </Link>{" "}
          for any questions about your Free Bets.
        </p>
      </section>
    </InfoPageLayout>
  );
}
