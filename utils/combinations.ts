export function getCombinations<T>(array: T[], comboSize: number): T[][] {
  const result: T[][] = [];

  const helper = (start: number, path: T[]) => {
    if (path.length === comboSize) {
      result.push(path);
      return;
    }
    for (let i = start; i < array.length; i++) {
      helper(i + 1, [...path, array[i]]);
    }
  };

  helper(0, []);
  return result;
}
