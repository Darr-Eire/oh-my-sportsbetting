import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Frequently Asked Questions</h1>

            <p className="text-lg mb-8 text-gray-300">
              Find answers to the most common questions about using OhMySportsbetting.
            </p>

            <div className="space-y-10">

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">🔒 How do I create an account?</h2>
                <p className="text-gray-300">
                  Simply click the Login button and follow the quick registration process using your Pi Network account.<br/>
                  Once connected, your account will automatically be created.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">💰 How do I deposit Pi?</h2>
                <p className="text-gray-300">
                  Go to your Account → Deposit, and follow the secure Pi Network payment process to instantly fund your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">🎯 How do I place a bet?</h2>
                <p className="text-gray-300">
                  Select your sport, browse the markets, choose your odds, enter your stake, and confirm your bet.<br/>
                  All bets are instantly confirmed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">🏆 How do payouts work?</h2>
                <p className="text-gray-300">
                  Winnings are credited instantly to your Pi balance once your bet is settled. You can withdraw anytime.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-2">📞 How can I contact support?</h2>
                <p className="text-gray-300">
                  You can reach us 24/7 via live chat inside your account,<br/>
                  or visit the <a href="/support/contact" className="text-electricCyan hover:underline">Contact Us page</a>.
                </p>
              </div>

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
