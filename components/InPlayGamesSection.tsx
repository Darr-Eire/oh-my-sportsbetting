import Head from "next/head";
import InPlayGamesSection from "../components/InPlayGamesSection";

export default function InPlayPage() {
  return (
    <>
      <Head>
        <title>In-Play Sports – Live Now</title>
      </Head>
      <main className="min-h-screen bg-[#0a0a23] px-4 py-8 text-white">
        <InPlayGamesSection />
      </main>
    </>
  );
}
