import MarketGroup from "../MarketGroup";
import MarketButton from "../MarketButton";

type FullTimeResultProps = {
  odds: { home: number; draw: number; away: number };
};

export default function FullTimeResult({ odds }: FullTimeResultProps) {
  const markets = [
    { label: `Home ${odds.home.toFixed(2)}`, odds: odds.home.toString() },
    { label: `Draw ${odds.draw.toFixed(2)}`, odds: odds.draw.toString() },
    { label: `Away ${odds.away.toFixed(2)}`, odds: odds.away.toString() },
  ];

  return <MarketGroup markets={markets} />;
}
