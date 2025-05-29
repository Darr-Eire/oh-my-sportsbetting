// components/LiveInPlayCard.tsx

type Props = {
  league: string;
  home: string;
  away: string;
  time: string;
  odds: {
    home: string;
    draw: string;
    away: string;
  };
};

export default function LiveInPlayCard({ league, home, away, time, odds }: Props) {
  return (
    <div className="bg-[#0f172a] border border-gray-700 rounded-lg p-4 mb-4">
      <h3 className="text-white text-sm font-bold mb-2">{league}</h3>
      
      <div className="flex items-center justify-between text-white mb-2">
        <div className="text-left">
          <p>{home}</p>
          <p>{away}</p>
        </div>
        <div className="text-right text-sm text-gray-400">{time}&apos;</div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-gray-800 py-1 rounded text-green-400">{odds.home}</div>
        <div className="bg-gray-800 py-1 rounded text-green-400">{odds.draw}</div>
        <div className="bg-gray-800 py-1 rounded text-green-400">{odds.away}</div>
      </div>
    </div>
  );
}
