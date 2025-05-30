import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function FAQ() {
  return (
    <InfoPageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about using OhMySportsbetting."
    >
      {/* Account Creation */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I create an account?</h2>
        <p className="text-gray-300">
          Simply connect using your Pi Network credentials to create an account instantly. No lengthy forms or approvals — your Pi identity automatically creates your sportsbook profile.
        </p>
      </section>

      {/* Eligibility */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Who is eligible to join?</h2>
        <p className="text-gray-300">
          You must be at least 18 years old (or legal age in your country) and legally permitted to participate in sports betting. All users must have a verified Pi Network account.
        </p>
      </section>

      {/* Deposits */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I deposit Pi?</h2>
        <p className="text-gray-300">
          Go to Account → Deposit and follow the secure Pi Network payment flow. Your Pi balance will reflect immediately after confirmation.
        </p>
      </section>

      {/* Withdrawals */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I withdraw my winnings?</h2>
        <p className="text-gray-300">
          Navigate to Account → Withdraw. Enter your Pi wallet address (same as your Pi Network identity), confirm the transaction, and withdrawals will process directly to your Pi wallet.
        </p>
      </section>

      {/* Currencies */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Do you accept fiat or credit card payments?</h2>
        <p className="text-gray-300">
          No. OhMySportsbetting operates fully inside the Pi Network ecosystem. We only support Pi currency for deposits, wagers, withdrawals, and bonuses.
        </p>
      </section>

      {/* Bonuses */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Are there bonuses or promotions?</h2>
        <p className="text-gray-300">
          Yes — we offer promotions like free bets, leaderboard prizes, referral rewards, daily spin bonuses, tournaments, jackpots and more. Promotions may change regularly.
        </p>
      </section>

      {/* Bet Rules */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do bets work?</h2>
        <p className="text-gray-300">
          Browse events → Select odds → Enter stake → Confirm bet. All confirmed bets are final. Winnings are automatically credited once outcomes are officially settled.
        </p>
      </section>

      {/* Bet Cancellation */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Can I cancel a bet after placing it?</h2>
        <p className="text-gray-300">
          No. Once confirmed, bets cannot be cancelled, changed, or refunded unless voided due to technical error or event cancellation.
        </p>
      </section>

      {/* Pi Network Safety */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Is Pi Network safe to use for betting?</h2>
        <p className="text-gray-300">
          Yes. All transactions happen securely through the official Pi Network SDK, fully encrypted and decentralized. Your Pi wallet remains under your control.
        </p>
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How is my account protected?</h2>
        <p className="text-gray-300">
          We use strong encryption, secure servers, and advanced monitoring to protect your account and funds. Always use strong passwords and enable Pi Network security features.
        </p>
      </section>

      {/* Account Verification */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Do I need to verify my identity?</h2>
        <p className="text-gray-300">
          Your Pi Network KYC serves as your identity verification. In rare cases, additional verification may be requested if suspicious activity is detected.
        </p>
      </section>

      {/* Self-Exclusion */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Can I self-exclude or pause my account?</h2>
        <p className="text-gray-300">
          Yes — you may request account limits, cooling-off periods, or full self-exclusion by contacting{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Support</span>
          </Link>.
        </p>
      </section>

      {/* Legal */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Is OhMySportsbetting legal?</h2>
        <p className="text-gray-300">
          We operate under applicable digital gaming regulations, focusing on jurisdictions that allow skill-based betting with cryptocurrency. You are responsible for complying with your local laws.
        </p>
      </section>

      {/* Customer Support */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How do I contact support?</h2>
        <p className="text-gray-300">
          Our support team is available 24/7 through Live Chat and{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
