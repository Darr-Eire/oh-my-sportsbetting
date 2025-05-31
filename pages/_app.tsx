import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BetSlipProvider } from "../context/BetSlipContext";
import BetSlip from "../components/BetSlip";  // <-- Import here

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BetSlipProvider>
      <>
        <Component {...pageProps} />
        <BetSlip />  {/* <-- Mounted globally here */}
      </>
    </BetSlipProvider>
  );
}
