const MIN_VIEWPORT = 375;
const MAX_VIEWPORT = 1730;

/**
 * Builds a `clamp()` that interpolates between `min` at a 375px viewport and
 * `max` at the 1730px design viewport.
 */
export function fluid(max: number, ratio = 0.62): string {
  const min = max * ratio;
  const slope = (max - min) / (MAX_VIEWPORT - MIN_VIEWPORT);
  const intercept = min - slope * MIN_VIEWPORT;
  const sign = intercept < 0 ? "-" : "+";

  return `clamp(${round(min)}px, ${round(slope * 100, 4)}vw ${sign} ${round(Math.abs(intercept))}px, ${round(max)}px)`;
}

function round(value: number, places = 3): number {
  return Number(value.toFixed(places));
}
