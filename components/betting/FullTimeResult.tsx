// components/betting/markets/FullTimeResult.tsx
import MarketButton from "./MarketButton";
import MarketGroup from './MarketGroup'; // adjust path if needed

type FullTimeResultProps = {
  odds: {
    home: number;
    draw: number;
    away: number;
  };
};

export default function FullTimeResult({ odds }: FullTimeResultProps) {
  return (
    <MarketGroup title="Full Time Result">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MarketButton label={`Home ${odds.home.toFixed(2)}`} onClick={() => {}} />
        <MarketButton label={`Draw ${odds.draw.toFixed(2)}`} onClick={() => {}} />
        <MarketButton label={`Away ${odds.away.toFixed(2)}`} onClick={() => {}} />
      </div>
    </MarketGroup>
  );
}
