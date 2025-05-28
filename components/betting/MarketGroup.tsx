import MarketButton from './MarketButton';

export default function MarketGroup({ markets }: { markets: { label: string; odds: string }[] }) {
  // Dummy onClick handler or you can define it properly as needed
  const handleClick = (label: string) => {
    console.log('Clicked market:', label);
  };

  return (
    <div className="market-group">
      {markets.map((market, index) => (
        <MarketButton
          key={index}
          label={market.label}
          onClick={() => handleClick(market.label)}
        />
      ))}
    </div>
  );
}
