import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function WeeklyFreeBets() {
  return (
    <InfoPageLayout
      title="Weekly Free Bet Club"
      description="Earn Pi free bets every week based on your weekly action."
    >
      {/* Offer Details */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Promotion Overview</h2>
        <p className="text-gray-300">
          Bet regularly and get rewarded! Each week, place qualifying bets and receive a Pi Free Bet every Monday.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Qualify</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Place at least <span className="font-bold text-white">5 bets of 5 Pi or more</span> between Monday 00:00 UTC and Sunday 23:59 UTC ➔ Get a 5 Pi Free Bet on Monday.</li>
          <li>Place at least <span className="font-bold text-white">5 bets of 10 Pi or more</span> in the same week ➔ Get a 10 Pi Free Bet on Monday.</li>
          <li>You can qualify for both levels — hit both and receive both free bets.</li>
        </ul>
      </section>

      {/* Key Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Important Rules</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Qualifying bets must settle within the week (Monday-Sunday).</li>
          <li>Only single bets with minimum odds of 1.50 (1/2) or higher count toward qualification.</li>
          <li>Free Bets will be credited automatically every Monday by 12:00 UTC.</li>
          <li>Free Bets expire 7 days after being issued.</li>
        </ul>
      </section>

      {/* Example Scenarios */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Example</h2>
        <p className="text-gray-300">
          If you place 5 bets of 5 Pi and 5 bets of 10 Pi in the same week, you'll receive a 5 Pi Free Bet and a 10 Pi Free Bet — 15 Pi total free bets on Monday.
        </p>
      </section>

      {/* Responsible Gambling */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Gambling</h2>
        <p className="text-gray-300">
          Please bet responsibly. If you need support or want to set limits,{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
