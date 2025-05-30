import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Licensing() {
  return (
    <>
      <Head>
        <title>Licensing - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Licensing</h1>

            <p className="text-lg mb-8 text-gray-300">
              OhMySportsbetting operates under strict compliance guidelines to ensure safe, legal, and responsible betting.
            </p>

            <div className="space-y-10 text-left">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Regulatory Compliance</h2>
                <p className="text-gray-300">
                  We fully comply with applicable online gaming regulations and continuously monitor legal requirements as the platform expands.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Responsible Gaming</h2>
                <p className="text-gray-300">
                  Our licensing ensures full protection of player rights and promotes safe gambling practices. We actively support responsible gambling at all times.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Jurisdictional Restrictions</h2>
                <p className="text-gray-300">
                  Access may be restricted in certain countries due to local gambling regulations. Users are responsible for understanding local laws before participation.
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
