import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Leagues() {
  return (
    <>
      <Head>
        <title>Pi Sportsbook – Top Leagues</title>
      </Head>

      <div className="flex min-h-screen bg-[#0a0a23] text-white">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gold mb-4">Top Leagues</h1>
          <p className="text-sm text-gray-300">
            Browse popular leagues and featured matches.
          </p>
        </main>
      </div>
    </>
  );
}
