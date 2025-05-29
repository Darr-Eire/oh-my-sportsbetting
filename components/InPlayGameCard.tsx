type Game = {
  match: string;
  time: string;
  odds: string[];
};

export default function InPlayGameCard({ game }: { game: Game }) {
  return (
    <div className="bg-[#0a0a23] border border-gray-700 rounded-md p-3 flex justify-between items-center">
      <div>
        <div className="text-white font-medium">{game.match}</div>
        <div className="text-xs text-gray-400">{game.time}</div>
      </div>
      <div className="flex gap-2">
        {game.odds.map((odd, i) => (
          <span key={i} className="bg-[#10182f] text-electricCyan px-2 py-1 rounded text-sm font-semibold">
            {odd}
          </span>
        ))}
      </div>
    </div>
  );
}
