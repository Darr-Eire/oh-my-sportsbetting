import InfoPageLayout from "../../components/InfoPageLayout";

export default function WeeklyLeaderboard() {
  return (
    <InfoPageLayout
      title="Weekly Leaderboard"
      description="Climb the Weekly Leaderboard by earning points on every bet you place."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
        <p className="text-gray-300">
          Each week, players accumulate points based on their total bets and wins. The higher your position, the bigger your rewards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Leaderboard Prizes</h2>
        <p className="text-gray-300">
          Top ranked players win Pi prizes every single week. Weekly leaderboard resets every Monday at 00:00 UTC.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Fair Play</h2>
        <p className="text-gray-300">
          Points system is fully automated and transparent. No manual adjustments or manipulation allowed.
        </p>
      </section>
    </InfoPageLayout>
  );
}
