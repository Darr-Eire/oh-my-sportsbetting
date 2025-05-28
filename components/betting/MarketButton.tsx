import React from "react";

type MarketButtonProps = {
  label: string;
  onClick: () => void;
};

export default function MarketButton({ label, onClick }: MarketButtonProps) {
  return (
    <button onClick={onClick} className="market-button">
      {label}
    </button>
  );
}
