import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Help() {
  return (
    <InfoPageLayout
      title="Help Center"
      description="Everything you need to know about using OhMySportsbetting."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Popular Topics</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>How to place bets</li>
          <li>Deposits & withdrawals</li>
          <li>Pi Network payments</li>
          <li>Account issues</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Still Need Help?</h2>
        <p className="text-gray-300">
          Please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
