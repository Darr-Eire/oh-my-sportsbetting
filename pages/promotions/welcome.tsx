import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function WelcomeOffer() {
  return (
    <InfoPageLayout
      title="Welcome Offer"
      description="Claim your exclusive Welcome Bonus when you join OhMySportsbetting."
    >
      {/* Offer Details */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Bonus Overview</h2>
        <p className="text-gray-300">
          New users receive a 100% matched bonus on their first Pi deposit, up to a maximum of 50 Pi. Start betting with double your balance.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How To Claim</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Create your OhMySportsbetting account and verify your Pi Network login.</li>
          <li>Make your first deposit using Pi Network.</li>
          <li>Your matched bonus is automatically credited within seconds.</li>
          <li>Start placing bets with your full bonus balance immediately.</li>
        </ul>
      </section>

      {/* Wagering Requirements */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Wagering Requirements</h2>
        <p className="text-gray-300">
          Bonus funds must be wagered 5x before withdrawal. Example: deposit 10 Pi → bonus 10 Pi → wager 50 Pi total before cashout.
        </p>
      </section>

      {/* Terms */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Key Terms</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Minimum deposit to activate bonus: 5 Pi</li>
          <li>Maximum bonus amount: 50 Pi</li>
          <li>One welcome bonus per user</li>
          <li>Bonus valid for 14 days after activation</li>
          <li>Abuse or multiple account attempts will void bonus</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Gambling</h2>
        <p className="text-gray-300">
          Always bet responsibly. For support and account limits, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
