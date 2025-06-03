"use client";

import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GolfPage() {
  return (
    <>
      <Head>
        <title>Golf - OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />
        <div className="max-w-3xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Golf</h1>
          <p>Markets and betting options for Golf will be available here soon.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
