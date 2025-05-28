import Head from "next/head";
// import { useRouter } from "next/router";
import { useState } from "react";
// import Image from "next/image";

// import Lineups from "../../components/Lineups";
// import PitchView from "../../components/PitchView";
// import Footer from "../../components/Footer";

const dummyMatchData = {
  teams: "Team A vs Team B",
  // other match data
};

export default function MatchDetail() {
  // const router = useRouter();
  // const { slug } = router.query;

  const match = dummyMatchData;

  const [activeMarket, setActiveMarket] = useState("");
  const [view, setView] = useState<"markets" | "lineups" | "pitch">("markets");

  const toggleAccordion = (key: string) => {
    setActiveMarket((prev) => (prev === key ? "" : key));
  };

  return (
    <>
      <Head>
        <title>{match.teams} – Match Details</title>
      </Head>
      <div className="min-h-screen bg-[#0a0a23] text-white px-4 py-8">
        {/* Add your JSX here */}
      </div>
    </>
  );
}
