import Head from "next/head";

export default function eSports() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – eSports</title>
      </Head>

      <div className="min-h-screen bg-[#0a0a23] text-white p-6">
        <main>
          <h1 className="text-2xl font-bold text-gold mb-4">eSports</h1>
          <p className="text-sm text-gray-300">
            eSports competitions and real-time match betting.
          </p>
        </main>
      </div>
    </>
  );
}
