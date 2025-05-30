import InfoPageLayout from "../../components/InfoPageLayout";

export default function FreeToPlay() {
  return (
    <InfoPageLayout
      title="Free-to-Play Tournaments"
      description="Test your prediction skills without risking any Pi — fully free tournaments available."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
        <p className="text-gray-300">
          Join weekly or special tournaments for free. Predict outcomes, climb the tournament table, and win real prizes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Prize Structure</h2>
        <p className="text-gray-300">
          Top finishers receive Pi, bonus spins, and entry tokens for premium events. No deposits or fees required.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Who Can Play</h2>
        <p className="text-gray-300">
          All verified users can join free-to-play tournaments anytime, regardless of balance or betting history.
        </p>
      </section>
    </InfoPageLayout>
  );
}
