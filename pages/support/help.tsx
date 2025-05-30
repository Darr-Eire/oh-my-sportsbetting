import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Help() {
  return (
    <InfoPageLayout
      title="Help Center"
      description="Find all the answers and support you need to use OhMySportsbetting confidently."
    >
      {/* Account Setup */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Account Setup & Access</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>How do I create an account?</strong><br />
            Simply log in using your Pi Network credentials. Your account will automatically be created upon first connection.
          </li>
          <li>
            <strong>How do I log in?</strong><br />
            Use the “Login with Pi” button. Your Pi Network identity will authenticate you securely.
          </li>
          <li>
            <strong>I forgot my Pi credentials — what do I do?</strong><br />
            Account recovery is handled through the Pi Network app. We cannot recover Pi credentials on your behalf.
          </li>
          <li>
            <strong>How do I update my profile info?</strong><br />
            You can edit your display name, avatar, and notification preferences directly in your account settings.
          </li>
        </ul>
      </section>

      {/* Deposits & Withdrawals */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Deposits & Withdrawals</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>How do I deposit Pi?</strong><br />
            Go to Account → Deposit. Use the secure Pi payment flow. Deposits typically confirm instantly.
          </li>
          <li>
            <strong>How do I withdraw winnings?</strong><br />
            Go to Account → Withdraw. Enter your Pi wallet address and confirm withdrawal. Funds transfer directly to your Pi wallet.
          </li>
          <li>
            <strong>Are there fees?</strong><br />
            No platform fees. Standard Pi network transaction fees may apply depending on Pi Network activity.
          </li>
          <li>
            <strong>How long do withdrawals take?</strong><br />
            Withdrawals are typically processed instantly but may take up to a few minutes depending on Pi Network confirmations.
          </li>
        </ul>
      </section>

      {/* Placing Bets */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Placing Bets</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>How do I place a bet?</strong><br />
            Select your event, choose your market, enter your stake, and confirm the bet. Bets are final once confirmed.
          </li>
          <li>
            <strong>How are winnings calculated?</strong><br />
            Winnings are calculated by multiplying your stake by the odds. Example: 10 Pi at odds 2.50 = 25 Pi payout.
          </li>
          <li>
            <strong>When are bets settled?</strong><br />
            Once official event results are confirmed, your bet is automatically settled and winnings are credited.
          </li>
          <li>
            <strong>Can I cancel a bet after placing it?</strong><br />
            No — once a bet is confirmed it cannot be cancelled or modified.
          </li>
        </ul>
      </section>

      {/* Bonuses */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Bonuses & Promotions</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>What bonuses are available?</strong><br />
            We offer daily free spins, leaderboard rewards, jackpots, referral bonuses, and event-based promotions.
          </li>
          <li>
            <strong>How do I claim bonuses?</strong><br />
            Bonuses are automatically added or available to claim under the Promotions tab when eligible.
          </li>
        </ul>
      </section>

      {/* Pi Network */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Pi Network Integration</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>Why does OhMySportsbetting only use Pi?</strong><br />
            We’re 100% built inside the Pi Network ecosystem to support decentralized crypto-native sports betting.
          </li>
          <li>
            <strong>How do Pi payments work?</strong><br />
            We use Pi Network’s official SDK. You approve each transaction inside the Pi app, keeping full control of your funds.
          </li>
        </ul>
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Security & Account Protection</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>Is my personal data safe?</strong><br />
            All personal data is encrypted and secured. We do not sell or share your information without consent.
          </li>
          <li>
            <strong>How do I protect my account?</strong><br />
            Use strong Pi credentials, never share your login, and keep your device secure.
          </li>
          <li>
            <strong>Do you offer 2FA?</strong><br />
            2FA is enforced via the Pi Network’s authentication process.
          </li>
        </ul>
      </section>

      {/* Legal */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Legal, Compliance & Policies</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>
            <strong>Where can I read your full policies?</strong><br />
            Please review our{" "}
            <Link href="/support/terms">
              <span className="text-electricCyan hover:underline">Terms & Conditions</span>
            </Link>{" "},{" "}
            <Link href="/support/privacy">
              <span className="text-electricCyan hover:underline">Privacy Policy</span>
            </Link>, and{" "}
            <Link href="/support/responsible-gambling">
              <span className="text-electricCyan hover:underline">Responsible Gambling</span>
            </Link>{" "} pages.
          </li>
          <li>
            <strong>What if gambling is restricted in my country?</strong><br />
            You are responsible for complying with your local gambling laws before using OhMySportsbetting.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Need Direct Help?</h2>
        <p className="text-gray-300">
          If your issue isn’t covered above, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>. Our team is available 24/7.
        </p>
      </section>
    </InfoPageLayout>
  );
}
