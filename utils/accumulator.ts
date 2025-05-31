export const calculateAccumulator = (
  selections: { odds: number }[],
  stake: number
) => {
  if (selections.length === 0 || stake === 0) return 0;

  const totalOdds = selections.reduce((acc, sel) => acc * sel.odds, 1);
  const returns = stake * totalOdds;

  return returns.toFixed(2);
};
