import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Terms() {
  return (
    <InfoPageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using OhMySportsbetting."
    >
      {/* General Terms */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">General Agreement</h2>
        <p className="text-gray-300">
          By creating an account or using OhMySportsbetting, you agree to these Terms & Conditions. If you do not agree,
          you must not access or use the platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Eligibility</h2>
        <p className="text-gray-300">
          You must be at least 18 years old (or legal age in your jurisdiction) to use this platform. It is your responsibility
          to ensure you are legally permitted to participate in sports betting in your country or region.
        </p>
      </section>

      {/* Account Responsibility */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Account Responsibility</h2>
        <p className="text-gray-300">
          You are solely responsible for maintaining the confidentiality of your account credentials and for all activities
          that occur under your account. You may not share, sell, or transfer your account to others.
        </p>
      </section>

      {/* Payments & Pi Network */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Payments & Pi Network Usage</h2>
        <p className="text-gray-300">
          All deposits, bets, and withdrawals are processed using the Pi Network. You are responsible for securing your
          Pi credentials. OhMySportsbetting is not liable for any lost Pi due to user error, compromised wallets, or
          third-party breaches.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">No Fiat Currency</h2>
        <p className="text-gray-300">
          OhMySportsbetting operates exclusively with Pi cryptocurrency. No fiat currency is accepted, stored, or transacted
          through this platform.
        </p>
      </section>

      {/* Betting Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Betting Rules & Settlement</h2>
        <p className="text-gray-300">
          All bets are final once confirmed. Winnings are automatically credited after event settlement. We reserve the right
          to void bets in the case of technical errors, obvious pricing mistakes, or rule violations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Limits and Restrictions</h2>
        <p className="text-gray-300">
          We may impose limits on betting activity, deposits, withdrawals, and access based on your location, activity, or
          responsible gambling protections.
        </p>
      </section>

      {/* Responsible Gambling */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Responsible Gambling</h2>
        <p className="text-gray-300">
          Betting should be a form of entertainment, not financial gain. If you feel your gambling is becoming a problem,
          you may request account restrictions or self-exclusion. Please seek assistance from professional organizations if necessary.
        </p>
      </section>

      {/* Privacy */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Privacy & Data Use</h2>
        <p className="text-gray-300">
          We handle your personal data in accordance with our{" "}
          <Link href="/support/privacy">
            <span className="text-electricCyan hover:underline">Privacy Policy</span>
          </Link>. Data may be processed for account management, legal compliance, security, and platform performance.
        </p>
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Security Measures</h2>
        <p className="text-gray-300">
          We use industry-standard encryption and security protocols to protect user accounts and transactions.
          However, no system is 100% secure. You are responsible for practicing safe password and account management.
        </p>
      </section>

      {/* Termination */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Account Suspension & Termination</h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate accounts for violation of terms, suspected fraud, abuse, or
          illegal activity. Funds may be withheld pending investigation.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Limitation of Liability</h2>
        <p className="text-gray-300">
          OhMySportsbetting shall not be liable for indirect, incidental, or consequential damages arising from use
          of the platform. All services are provided "as-is" without warranties of any kind.
        </p>
      </section>

      {/* Dispute Resolution */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Dispute Resolution</h2>
        <p className="text-gray-300">
          In the event of disputes, you agree to first attempt resolution through our internal support team. If unresolved,
          disputes shall be subject to binding arbitration under applicable laws.
        </p>
      </section>

      {/* Jurisdiction */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Governing Law</h2>
        <p className="text-gray-300">
          These Terms are governed by and construed under the laws of the jurisdiction where OhMySportsbetting operates.
        </p>
      </section>

      {/* Modifications */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Modifications to Terms</h2>
        <p className="text-gray-300">
          We may modify these Terms & Conditions at any time. Continued use of the platform after updates constitutes acceptance
          of the revised terms.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
        <p className="text-gray-300">
          For questions or support regarding these terms, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
