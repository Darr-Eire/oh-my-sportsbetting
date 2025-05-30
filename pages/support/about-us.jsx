import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">About Us</h1>

            <p className="text-lg mb-8 text-gray-300">
              Welcome to OhMySportsbetting — the first Pi-powered sports betting platform.
              We combine cutting-edge technology, responsible gaming, and full Pi Network integration
              to deliver a completely new betting experience.
            </p>

            <div className="space-y-10 text-left">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
                <p className="text-gray-300">
                  Our goal is simple: create a transparent, fair, and community-driven sports betting platform
                  powered entirely by the Pi Network. We’re building for Pioneers who believe in the next evolution
                  of decentralized finance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Why Pi Network?</h2>
                <p className="text-gray-300">
                  We believe Pi is the future of digital payments. Every transaction on OhMySportsbetting
                  happens 100% on the Pi Network — no banks, no fiat, no middlemen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Our Team</h2>
                <p className="text-gray-300">
                  Built by experienced developers, crypto enthusiasts, and sports betting veterans — all united
                  to bring innovation, trust, and new opportunities for the Pi community.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Our Vision</h2>
                <p className="text-gray-300">
                  We're just getting started. Future plans include: global tournaments, esports betting,
                  custom bet builders, live Pi jackpots, and full-scale community competitions.
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
