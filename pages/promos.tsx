import Head from "next/head";

export default function Promos() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – Promotions</title>
      </Head>

      <div className="min-h-screen bg-[#0a0a23] text-white p-6">
        <main>
          <h1 className="text-2xl font-bold text-gold mb-4">Promotions</h1>
          <p className="text-sm text-gray-300">
            Check out current bonus offers and free bets.
          </p>
        </main>
      </div>
    </>
  );
}
