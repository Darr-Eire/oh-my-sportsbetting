// pages/sports/horse-racing.tsx
import Head from "next/head";

export default function HorseRacingPage() {
  return (
    <>
      <Head>
        <title>Horse Racing – OhMySports</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white px-4 py-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Horse Racing</h1>
        <p className="text-lg text-gray-300">Latest horse racing markets and featured races.</p>
      </div>
    </>
  );
}
