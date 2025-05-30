import InfoPageLayout from "../../components/InfoPageLayout";

export default function MonthlyJackpot() {
  return (
    <InfoPageLayout
      title="Monthly Jackpot"
      description="Massive Pi prize pools paid out every month to lucky players."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
        <p className="text-gray-300">
          Every bet placed throughout the month earns you jackpot entries. The more you play, the more entries you collect.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Prize Pool</h2>
        <p className="text-gray-300">
          Jackpot grows with every entry placed. One winner is randomly selected and announced at the end of each month.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Transparency</h2>
        <p className="text-gray-300">
          Draws are fully automated with auditable randomization logic to ensure complete fairness.
        </p>
      </section>
    </InfoPageLayout>
  );
}
