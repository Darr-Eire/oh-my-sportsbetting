import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function InfoPageLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title} - OhMySportsbetting</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-3xl border border-white rounded-lg p-8 bg-[#0a1024] shadow-lg text-center">

            <h1 className="text-3xl font-bold mb-6 text-electricCyan">{title}</h1>

            {description && (
              <p className="text-lg mb-8 text-gray-300">{description}</p>
            )}

            <div className="space-y-10 text-left">
              {children}
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
