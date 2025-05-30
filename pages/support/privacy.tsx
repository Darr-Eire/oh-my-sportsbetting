import InfoPageLayout from "../../components/InfoPageLayout";
import Link from "next/link";

export default function Privacy() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      description="Your privacy matters. This policy explains exactly how we collect, use, protect, and handle your personal information."
    >
      {/* Data Collection */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Information We Collect</h2>
        <p className="text-gray-300">
          We collect personal and technical data when you register or use OhMySportsbetting. This includes:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Name, email address, username</li>
          <li>Pi Network public identifier (Pi ID)</li>
          <li>Account activity logs, transaction history, and balances</li>
          <li>IP address, device information, browser type, and operating system</li>
          <li>Cookies and usage data for analytics and platform optimization</li>
        </ul>
      </section>

      {/* Purpose of Data Use */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How We Use Your Data</h2>
        <p className="text-gray-300">
          We use collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Account registration, management, and authentication</li>
          <li>Transaction processing and Pi Network payments</li>
          <li>Security monitoring, fraud detection, and legal compliance</li>
          <li>Customer service and support operations</li>
          <li>Platform performance monitoring and product development</li>
          <li>Marketing communications (only with your consent)</li>
          <li>Aggregated analytics and system optimization</li>
        </ul>
      </section>

      {/* Data Sharing */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Data Sharing & Disclosure</h2>
        <p className="text-gray-300">
          We do not sell your personal information to any third parties. We may share your data only under these circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>With regulatory authorities for legal compliance</li>
          <li>With payment processors (limited transaction data only)</li>
          <li>With trusted service providers under strict confidentiality agreements</li>
          <li>In response to valid legal requests (court orders, subpoenas)</li>
          <li>To protect platform integrity and enforce our Terms of Service</li>
        </ul>
      </section>

      {/* Data Security */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Data Security</h2>
        <p className="text-gray-300">
          We use advanced encryption, firewalls, and access controls to protect your data against unauthorized access, misuse,
          or loss. Despite our best efforts, no system can be completely secure — you are responsible for maintaining strong
          account credentials and practicing safe digital behavior.
        </p>
      </section>

      {/* Cookies & Tracking */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Cookies & Analytics</h2>
        <p className="text-gray-300">
          Our platform uses cookies and analytics tools to personalize user experience, analyze traffic, and improve functionality.
          You may control cookie preferences through your browser settings.
        </p>
      </section>

      {/* Data Retention */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Data Retention</h2>
        <p className="text-gray-300">
          We retain your personal information as long as your account remains active or as required for legal compliance,
          fraud prevention, financial record-keeping, and dispute resolution. Upon account closure, certain data may still be
          retained under legal obligations.
        </p>
      </section>

      {/* International Data */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">International Transfers</h2>
        <p className="text-gray-300">
          Your data may be processed or stored on servers located outside your home country. We comply with applicable cross-border
          data protection laws and ensure appropriate safeguards are in place.
        </p>
      </section>

      {/* User Rights */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Your Privacy Rights</h2>
        <p className="text-gray-300">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Access and review your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (subject to legal limits)</li>
          <li>Withdraw consent for data processing (where applicable)</li>
          <li>Request a copy of your data in portable format</li>
        </ul>
        <p className="text-gray-300 mt-2">
          To exercise your rights, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>

      {/* Children's Privacy */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Children's Privacy</h2>
        <p className="text-gray-300">
          This platform is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.
          If we learn that data has been collected from a minor, we will promptly delete it.
        </p>
      </section>

      {/* Policy Updates */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Policy Updates</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy periodically. Continued use of the platform after updates constitutes acceptance of the
          revised policy. We recommend reviewing this policy regularly.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
        <p className="text-gray-300">
          For any privacy-related questions or data access requests, please{" "}
          <Link href="/support/contact">
            <span className="text-electricCyan hover:underline">Contact Support</span>
          </Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
