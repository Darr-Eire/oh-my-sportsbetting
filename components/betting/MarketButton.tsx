import React from 'react';

export default function MarketButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="market-button">
      {label}
    </button>
  );
}
