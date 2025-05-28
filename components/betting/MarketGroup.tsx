import MarketButton from './MarketButton';

type Market = {
  label: string;
  odds: string;
};

type MarketGroupProps = {
  markets: Market[];
};

export default function MarketGroup({ markets }: MarketGroupProps) {
  return (
    <div className="market-group">
      {markets.map((market, index) => (
        <MarketButton key={index} label={market.label} />
      ))}
    </div>
  );
}
