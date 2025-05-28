import { useRouter } from "next/router";
import React from "react";

export default function LeaguePage() {
  const router = useRouter();
  const { league } = router.query;

  if (!league) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white p-6">
      <main>
        <h1 className="text-3xl font-bold mb-4">League: {league}</h1>
        {/* Render your league-specific content here */}
      </main>
    </div>
  );
}
