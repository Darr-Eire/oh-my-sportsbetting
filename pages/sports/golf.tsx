// pages/sports/golf.tsx
import Head from "next/head";

export default function GolfPage() {
  return (
    <>
      <Head>
        <title>Golf – OhMySports</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Golf</h1>
        <p className="text-lg text-gray-300">Tee off with tournaments and futures bets on top golfers.</p>
      </div>
    </>
  );
}
