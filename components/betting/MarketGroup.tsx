import MarketButton from "./MarketButton";

type Market = {
  label: string;
  odds: string;
};

type MarketGroupProps = {
  markets: Market[];
};

export default function MarketGroup({ markets }: MarketGroupProps) {
  const handleClick = (label: string) => {
    console.log("Clicked market:", label);
  };

  return (
    <div className="market-group">
      {markets.map((market, i) => (
        <MarketButton
          key={i}
          label={market.label}
          onClick={() => handleClick(market.label)}
        />
      ))}
    </div>
  );
}
