import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-left">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan text-center">Terms & Conditions</h1>

            <p className="text-lg mb-8 text-gray-300 text-center">
              Please read the following terms and conditions carefully before using OhMySportsbetting.
            </p>

            <div className="space-y-8 text-gray-300">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">General Terms</h2>
                <p>
                  By creating an account and using OhMySportsbetting, you agree to comply with these Terms & Conditions.
                  Only users who are 18 years or older may participate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Pi Network Usage</h2>
                <p>
                  All bets, deposits, and withdrawals are processed using the Pi Network. Users are responsible for securing their Pi account access.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Account Responsibility</h2>
                <p>
                  Users are fully responsible for maintaining the confidentiality of their account and activity.
                  Suspicious or fraudulent activity may result in suspension.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Betting Rules</h2>
                <p>
                  All bets are final once confirmed. Winnings are credited automatically after the event is settled.
                  OhMySportsbetting reserves the right to void bets in the event of obvious errors or technical issues.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Responsible Gambling</h2>
                <p>
                  Gambling should be fun and entertaining. If you feel you may have a gambling problem, please contact support to request limits or self-exclusion options.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Privacy</h2>
                <p>
                  All user data is handled in accordance with our <a href="/support/privacy" className="text-electricCyan hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Modifications</h2>
                <p>
                  OhMySportsbetting reserves the right to modify these terms at any time. Continued use of the platform constitutes acceptance of any updates.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
                <p>
                  For any questions regarding these terms, please visit our <a href="/support/contact" className="text-electricCyan hover:underline">Contact Support</a> page.
                </p>
              </section>

            </div>

          </div>

          {/* Back to Home Button with white border */}
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
