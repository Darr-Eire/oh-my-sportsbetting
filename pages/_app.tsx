import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BetSlipProvider } from "../context/BetSlipContext";
import BetSlip from "../components/BetSlip";
import Header from "../components/Header";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BetSlipProvider>
      <>
        <Header />

        {/* Main content pushed down under fixed header */}
        <main className="pt-[72px] min-h-screen bg-[#0a1024] text-white font-sans">
          <Component {...pageProps} />
        </main>

 
        <BetSlip />
      </>
    </BetSlipProvider>
  );
}
