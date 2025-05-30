import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function FAQ() {
  return (
    <InfoPageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I create an account?</h2>
        <p className="text-gray-300">Simply connect using your Pi Network account to register instantly.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I deposit Pi?</h2>
        <p className="text-gray-300">Go to Account → Deposit and follow the secure Pi payment steps.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact Support</h2>
        <p className="text-gray-300">
          For help, visit{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
