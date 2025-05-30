import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Help() {
  return (
    <>
      <Head>
        <title>Help Center - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Help Center</h1>

            <p className="text-lg mb-8 text-gray-300">
              Welcome to the OhMySportsbetting Help Center. Here you’ll find everything you need to solve issues,
              learn how the platform works, and contact support if required.
            </p>

            {/* Sections */}
            <div className="space-y-10">

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Popular Help Topics</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mx-auto w-fit">
                  <li>How to place a bet</li>
                  <li>How to deposit funds</li>
                  <li>How to withdraw winnings</li>
                  <li>How Pi Network transactions work</li>
                  <li>Understanding your account balance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Account Support</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mx-auto w-fit">
                  <li>Resetting your password</li>
                  <li>Verifying your account</li>
                  <li>Setting responsible gambling limits</li>
                  <li>2FA and security settings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Technical Issues</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mx-auto w-fit">
                  <li>Login problems</li>
                  <li>Site errors or bugs</li>
                  <li>Mobile app troubleshooting</li>
                  <li>Connectivity issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact Customer Support</h2>
                <p className="mb-4 text-gray-300">
                  Can’t find what you’re looking for? Our support team is ready to assist you 24/7.
                </p>
                <a
                  href="/support/contact"
                  className="inline-block bg-electricCyan text-white font-semibold py-2 px-6 rounded-full hover:brightness-110 transition"
                >
                  Contact Support
                </a>
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
                            cvdfv]s