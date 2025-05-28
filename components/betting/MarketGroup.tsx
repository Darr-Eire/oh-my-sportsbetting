import React from 'react';
import MarketButton from './MarketButton';

export default function MarketGroup({ markets }) {
  return (
    <div className="market-group">
      {markets.map((market) => (
        <MarketButton key={market.id} label={market.name} onClick={() => {}} />
      ))}
    </div>
  );
}
