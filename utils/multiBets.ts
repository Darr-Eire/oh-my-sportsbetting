import { getCombinations } from "./combinations";

interface Selection {
  id: string;
  event: string;
  type: string;
  odds: number;
}

export function calculateMultiBets(
  selections: Selection[],
  stakePerBet: number
) {
  const n = selections.length;

  const results: { type: string; combinations: any[]; returns: number }[] = [];

  // Singles
  const singles = selections.map(sel => stakePerBet * sel.odds);
  results.push({
    type: "Singles",
    combinations: selections.map(sel => [sel]),
    returns: singles.reduce((a, b) => a + b, 0),
  });

  // Doubles
  if (n >= 2) {
    const doubles = getCombinations(selections, 2);
    const doubleReturns = doubles.reduce((sum, combo) => {
      return sum + stakePerBet * combo[0].odds * combo[1].odds;
    }, 0);
    results.push({ type: "Doubles", combinations: doubles, returns: doubleReturns });
  }

  // Trebles
  if (n >= 3) {
    const trebles = getCombinations(selections, 3);
    const trebleReturns = trebles.reduce((sum, combo) => {
      return sum + stakePerBet * combo[0].odds * combo[1].odds * combo[2].odds;
    }, 0);
    results.push({ type: "Trebles", combinations: trebles, returns: trebleReturns });
  }

  // Accumulator
  if (n >= 2) {
    const accaOdds = selections.reduce((acc, sel) => acc * sel.odds, 1);
    results.push({
      type: `${n}-fold Accumulator`,
      combinations: [selections],
      returns: stakePerBet * accaOdds,
    });
  }

  return results;
}
