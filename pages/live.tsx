import Head from "next/head";

export default function Live() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – Live Matches</title>
      </Head>

      <div className="min-h-screen bg-[#0a0a23] text-white p-6">
        <main>
          <h1 className="text-2xl font-bold text-gold mb-4">Live Matches</h1>
          <p className="text-sm text-gray-300">
            Watch and bet on live matches happening right now.
          </p>
        </main>
      </div>
    </>
  );
}
