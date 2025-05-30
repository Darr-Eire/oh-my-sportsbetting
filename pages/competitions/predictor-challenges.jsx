import InfoPageLayout from "../../components/InfoPageLayout";

export default function PredictorChallenges() {
  return (
    <InfoPageLayout
      title="Predictor Challenges"
      description="Take part in special predictor games where accuracy means prizes."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
        <p className="text-gray-300">
          Predict scores, outcomes, or specific events across featured matches. Each correct prediction earns points.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Leaderboard</h2>
        <p className="text-gray-300">
          Players are ranked based on total correct predictions. Top scorers win Pi prizes weekly and monthly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Special Events</h2>
        <p className="text-gray-300">
          Look out for major tournament predictors — higher prize pools and bonus rewards for perfect scores.
        </p>
      </section>
    </InfoPageLayout>
  );
}
