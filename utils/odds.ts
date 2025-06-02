export function fractionToDecimal(fraction: string | number): number {
  if (typeof fraction === "number") return fraction;
  if (fraction.includes("/")) {
    const [num, denom] = fraction.split("/").map(Number);
    return num / denom + 1;
  }
  return parseFloat(fraction);
}
