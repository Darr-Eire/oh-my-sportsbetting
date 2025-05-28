import MarketGroup from "../MarketGroup";
import MarketButton from "../MarketButton";

export default function FullTimeResult({ odds }) {
  return (
    <MarketGroup title="Full Time Result">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MarketButton label="Home" value={odds.home} />
        <MarketButton label="Draw" value={odds.draw} />
        <MarketButton label="Away" value={odds.away} />
      </div>
    </MarketGroup>
  );
}
