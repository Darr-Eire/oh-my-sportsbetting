"use client";

import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CricketPage() {
  return (
    <>
      <Head>
        <title>Cricket - OhMySports</title>
      </Head>

      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />
        <div className="max-w-3xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Cricket</h1>
          <p>Markets and betting options for Cricket will be available here soon.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
