import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Developer() {
  return (
    <>
      <Head>
        <title>Developer - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Developer</h1>

            <p className="text-lg mb-8 text-gray-300">
              Our development team is committed to building secure, scalable, and innovative solutions fully integrated with the Pi Network ecosystem.
            </p>

            <div className="space-y-10 text-left">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Tech Stack</h2>
                <p className="text-gray-300">
                  We leverage modern frameworks such as Next.js, MongoDB, Tailwind CSS, Node.js, and the Pi SDK for payment processing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Security First</h2>
                <p className="text-gray-300">
                  Security, encryption, and user data protection are baked into every level of our platform infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Innovation Ahead</h2>
                <p className="text-gray-300">
                  We actively develop new features: live markets, smart contracts, instant payouts, and full real-time analytics.
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
