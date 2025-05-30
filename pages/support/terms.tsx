import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Terms() {
  return (
    <InfoPageLayout
      title="Terms & Conditions"
      description="Please read these terms before using OhMySportsbetting."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">General Terms</h2>
        <p className="text-gray-300">
          You agree to our platform rules, privacy policy, and must be 18+ to use the platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Privacy</h2>
        <p className="text-gray-300">
          We handle your data in accordance with our{" "}
          <Link href="/support/privacy">
            <span className="text-electricCyan hover:underline">Privacy Policy</span>
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
        <p className="text-gray-300">
          Questions?{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
