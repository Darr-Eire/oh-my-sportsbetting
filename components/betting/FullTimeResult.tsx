import MarketGroup from "./MarketGroup";

type FullTimeResultProps = {
  odds: { home: number; draw: number; away: number };
};

export default function FullTimeResult({ odds }: FullTimeResultProps) {
  const markets = [
    { label: `Home ${odds.home.toFixed(2)}`, odds: odds.home.toFixed(2) },
    { label: `Draw ${odds.draw.toFixed(2)}`, odds: odds.draw.toFixed(2) },
    { label: `Away ${odds.away.toFixed(2)}`, odds: odds.away.toFixed(2) },
  ];

  return <MarketGroup markets={markets} />;
}
