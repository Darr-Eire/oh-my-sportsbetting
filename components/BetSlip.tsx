import React from 'react';

const BetSlip: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-[#12122b] border border-[#1f1f40] p-4 rounded-xl shadow-md w-80">
      <h3 className="text-lg font-semibold text-white mb-2">Bet Slip</h3>
      <p className="text-sm text-gray-400">No bets selected.</p>
    </div>
  );
};

export default BetSlip;
