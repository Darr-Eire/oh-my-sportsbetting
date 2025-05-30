import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Partners</h1>

            <p className="text-lg mb-8 text-gray-300">
              We collaborate with key partners to deliver an innovative and secure sports betting experience powered by the Pi Network.
            </p>

            <div className="space-y-10 text-left">

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Technology Providers</h2>
                <p className="text-gray-300">
                  Our platform is built on scalable cloud infrastructure, using trusted technology stacks to ensure uptime, speed, and security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Pi Network Ecosystem</h2>
                <p className="text-gray-300">
                  We fully integrate with Pi Network APIs for payments, identity, and secure transactions — helping advance the Pioneer community.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-2">Future Partnerships</h2>
                <p className="text-gray-300">
                  We are open to partnerships across gaming, crypto, sports leagues, and technology sectors to expand our offering.
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
