import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-left">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan text-center">Privacy Policy</h1>

            <p className="text-lg mb-8 text-gray-300 text-center">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            <div className="space-y-8 text-gray-300">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Information We Collect</h2>
                <p>
                  We collect basic information when you register and use OhMySportsbetting, including your name, email address, and Pi Network identifier. We may also collect technical usage data and device information for security and optimization purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">How We Use Your Information</h2>
                <p>
                  Your data is used to provide account access, process transactions, verify your identity, and ensure secure platform operations. We may use aggregated data for analytics and performance improvement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Data Sharing</h2>
                <p>
                  We do not sell or share your personal information with third parties except as required for legal compliance, payment processing, or authorized partners directly involved in platform operations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Security & Protection</h2>
                <p>
                  All user data is encrypted and securely stored. We implement strong access controls and regularly monitor for unauthorized access or breaches.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Cookies & Tracking</h2>
                <p>
                  We may use cookies and analytics tools to improve platform performance, personalize your experience, and analyze traffic. You can manage cookie preferences in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Account Control</h2>
                <p>
                  You may request access, updates, or deletion of your personal data by contacting our support team at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Changes to This Policy</h2>
                <p>
                  This Privacy Policy may be updated from time to time. We will notify users of any significant changes via email or platform notices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
                <p>
                  For any questions or requests related to this Privacy Policy, please <a href="/support/contact" className="text-electricCyan hover:underline">Contact Support</a>.
                </p>
              </section>

            </div>

          </div>

          {/* Back to Home Button */}
          {/* Back to Home Button */}
<div className="mt-8 flex justify-center">
  <a
    href="/"
    className="inline-block bg-electricCyan text-white font-semibold py-3 px-10 rounded-full border border-white hover:brightness-110 transition"
  >
    Back to Home
  </a>
</div>


        </main>

        <Footer />
      </div>
    </>
  );
}
