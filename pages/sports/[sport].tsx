import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SportPage() {
  const router = useRouter();
  const { sport } = router.query;

  return (
    <>
      <Head>
        <title>{sport} – Events</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white p-6 text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">{sport} Events</h1>
        <p className="text-gray-300">This is where all events and betting markets for {sport} will appear.</p>
      </div>
    </>
  );
}
