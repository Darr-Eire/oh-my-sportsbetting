import InfoPageLayout from "../../components/InfoPageLayout";

export default function WeeklyLeaderboard() {
  // Fake data for display purposes
  const leaderboardData = [
    { rank: 1, username: "PiKing23", points: 4820, prize: "250 Pi" },
    { rank: 2, username: "PioneerBet", points: 4475, prize: "150 Pi" },
    { rank: 3, username: "LuckyMiner", points: 4130, prize: "100 Pi" },
    { rank: 4, username: "MoonRider88", points: 3760, prize: "75 Pi" },
    { rank: 5, username: "CryptoAce", points: 3540, prize: "50 Pi" },
    { rank: 6, username: "StakeMaster", points: 3285, prize: "25 Pi" },
    { rank: 7, username: "BettingGuru", points: 3100, prize: "20 Pi" },
    { rank: 8, username: "FastHands", points: 2890, prize: "15 Pi" },
    { rank: 9, username: "SharpShooter", points: 2735, prize: "10 Pi" },
    { rank: 10, username: "SmoothOperator", points: 2580, prize: "5 Pi" },
  ];

  return (
    <InfoPageLayout
      title="Weekly Leaderboard"
      description="Climb the Weekly Leaderboard by earning points on every bet you place."
    >
      {/* How It Works */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
        <p className="text-gray-300">
          Place bets throughout the week and earn points based on your wagering activity. The more you bet, the higher you climb.
        </p>
      </section>

      {/* Leaderboard Table */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Current Top 10</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-300 text-left border-collapse">
            <thead>
              <tr className="bg-[#1a1f3c]">
                <th className="py-3 px-6 border border-gray-700 font-semibold">Rank</th>
                <th className="py-3 px-6 border border-gray-700 font-semibold">Username</th>
                <th className="py-3 px-6 border border-gray-700 font-semibold">Points</th>
                <th className="py-3 px-6 border border-gray-700 font-semibold">Weekly Prize</th>
              </tr>
            </thead>
            <tbody className="bg-[#0a1024]">
              {leaderboardData.map((entry) => (
                <tr key={entry.rank}>
                  <td className="py-3 px-6 border border-gray-700 font-bold text-yellow-400">{entry.rank}</td>
                  <td className="py-3 px-6 border border-gray-700">{entry.username}</td>
                  <td className="py-3 px-6 border border-gray-700">{entry.points}</td>
                  <td className="py-3 px-6 border border-gray-700 text-green-400">{entry.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Prize Breakdown */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Weekly Prize Pool</h2>
        <p className="text-gray-300">
          Each Monday at 00:00 UTC the leaderboard resets. Prizes are awarded automatically:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>1st Place: 250 Pi</li>
          <li>2nd Place: 150 Pi</li>
          <li>3rd Place: 100 Pi</li>
          <li>4th-10th: Tiered prizes from 75 Pi down to 5 Pi</li>
        </ul>
      </section>

      {/* Fair Play */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Fair Play</h2>
        <p className="text-gray-300">
          Points are automatically calculated based on your total real Pi wagered. Voided or cashed-out bets do not count. Abusive play may result in disqualification.
        </p>
      </section>
    </InfoPageLayout>
  );
}
