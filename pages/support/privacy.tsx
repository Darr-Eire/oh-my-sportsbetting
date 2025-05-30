import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Privacy() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. This explains how we collect, use, and protect your data."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Data Collection</h2>
        <p className="text-gray-300">
          We collect your name, email, Pi ID, and device info for account management and security.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Use of Data</h2>
        <p className="text-gray-300">
          Data is used to manage accounts, transactions, and platform performance. Aggregated data may be used for analytics.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
        <p className="text-gray-300">
          For any privacy concerns, please visit our{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
