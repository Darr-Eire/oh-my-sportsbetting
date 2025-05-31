import { getCombinations } from "./combinations";

interface Selection {
  id: string;
  odds: number;
}

export function calculateFullMulti(
  selections: Selection[],
  stakePerBet: number
) {
  const result: { type: string; bets: number; returns: number }[] = [];

  const n = selections.length;

  // Singles
  selections.forEach(sel => {
    result.push({
      type: "Single",
      bets: 1,
      returns: stakePerBet * sel.odds
    });
  });

  // Multiples
  for (let i = 2; i <= n; i++) {
    const combos = getCombinations(selections, i);
    let totalReturns = 0;

    combos.forEach(combo => {
      const totalOdds = combo.reduce((acc, sel) => acc * sel.odds, 1);
      totalReturns += stakePerBet * totalOdds;
    });

    result.push({
      type: i === 2 ? "Double" : i === 3 ? "Treble" : `${i}-fold`,
      bets: combos.length,
      returns: totalReturns
    });
  }

  return result;
}
