// pages/sports/in-play.tsx
import Head from "next/head";

export default function InPlayPage() {
  return (
    <>
      <Head>
        <title>In-Play – OhMySports</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">In-Play</h1>
        <p className="text-lg text-gray-300">Live games and real-time betting odds.</p>
      </div>
    </>
  );
}
