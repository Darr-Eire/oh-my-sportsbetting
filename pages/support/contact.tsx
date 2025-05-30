import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Support - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">Contact Support</h1>

            <p className="text-lg mb-8 text-gray-300">
              Need help? Our team is available 24/7 to assist you. Use the contact form below or reach us through live chat for immediate support.
            </p>

            <form className="space-y-6 max-w-md mx-auto w-full">

              <div>
                <label htmlFor="name" className="block mb-2 text-left text-white font-semibold">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-left text-white font-semibold">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-left text-white font-semibold">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-[#0a1024] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-electricCyan"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-electricCyan text-white font-semibold py-2 px-6 rounded-full hover:brightness-110 transition"
              >
                Submit Request
              </button>

            </form>

            <div className="mt-8 text-gray-400 text-sm">
              <p>Or email us directly at: <span className="text-electricCyan">support@ohmysportsbetting.com</span></p>
              <p>Live Chat available 24/7 inside your account dashboard.</p>
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
