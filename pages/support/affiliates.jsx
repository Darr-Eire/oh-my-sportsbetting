import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Affiliates() {
  return (
    <>
      <Head>
        <title>Affiliates - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Affiliates</h1>

            <p className="text-lg mb-8 text-gray-300">
              Earn rewards by referring new players and promoting OhMySportsbetting through our affiliate program.
            </p>

            <div className="space-y-10 text-left">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
                <p className="text-gray-300">
                  Affiliates earn commissions for every active user they refer. Share your link, grow your network, and get rewarded in Pi.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Commission Structure</h2>
                <p className="text-gray-300">
                  We offer competitive commissions on deposits, bets, and player activity, with transparent real-time tracking.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Join Today</h2>
                <p className="text-gray-300">
                  Contact our team to join the affiliate program and receive your personalized tracking link.
                </p>
              </section>

            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <a href="/" className="inline-block bg-electricCyan text-white font-semibold py-3 px-10 rounded-full border border-white hover:brightness-110 transition">
              Back to Home
            </a>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
