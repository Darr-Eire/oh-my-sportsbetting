import Head from "next/head";

export default function BetSlip() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – Your Bet Slip</title>
      </Head>

      <div className="min-h-screen bg-[#0a0a23] text-white p-6">
        <main>
          <h1 className="text-2xl font-bold text-gold mb-4">Your Bet Slip</h1>
          <p className="text-sm text-gray-300">
            Manage your current selections and confirm bets.
          </p>
        </main>
      </div>
    </>
  );
}
