export default function Lineups({ homeTeam, awayTeam }) {
  const dummyLineups = {
    [homeTeam]: {
      starting: [
        "Ederson", "Walker", "Dias", "Stones", "Gvardiol",
        "Rodri", "De Bruyne", "Foden", "Silva", "Haaland", "Grealish",
      ],
      subs: ["Ortega", "Akanji", "Phillips", "Kovacic", "Alvarez", "Doku"],
      manager: "Pep Guardiola",
    },
    [awayTeam]: {
      starting: [
        "Ramsdale", "White", "Saliba", "Gabriel", "Zinchenko",
        "Rice", "Odegaard", "Havertz", "Saka", "Jesus", "Martinelli",
      ],
      subs: ["Turner", "Tomiyasu", "Trossard", "Smith Rowe", "Vieira", "Nketiah"],
      manager: "Mikel Arteta",
    },
  };

  return (
    <div className="bg-[#12122b] p-4 rounded-lg border border-[#2a2a3d]">
      <h2 className="text-gold font-semibold text-lg mb-4 text-center">Lineups & Managers</h2>

      <div className="grid grid-cols-2 gap-6 text-sm text-white">
        {[homeTeam, awayTeam].map((team, idx) => (
          <div key={idx}>
            <h3 className="text-electricCyan font-bold text-center mb-2">{team}</h3>

            <div className="mb-3">
              <h4 className="text-yellow-300 font-semibold mb-1">Starting XI</h4>
              <ul className="list-disc list-inside space-y-1">
                {dummyLineups[team].starting.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="text-yellow-300 font-semibold mb-1">Substitutes</h4>
              <ul className="list-disc list-inside space-y-1">
                {dummyLineups[team].subs.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-300 font-semibold mb-1">Manager</h4>
              <p>{dummyLineups[team].manager}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
