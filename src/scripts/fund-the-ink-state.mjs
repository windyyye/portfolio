// The tip-jar easter egg — state machine (the deep module).
//
// Interface: createFundTheInkState({ now?, phrases?, windowMs?, maxClicks? })
//              → { recordClick(t?) → { message, pop } }
// One method carries all the behaviour: rolling 10s window, 5-click cap,
// escalation, annoyed lockout, and the fresh-mood reset. Tests inject a
// fake `now` and drive the whole thing through recordClick alone.
//
// ┌─ PHRASES are Windy's — edit here and nowhere else. ───────────────┐

export const PHRASES = [
  'OMG THANKS LOVE BUG!',
  'anotha? awww thank u!',
  "u're funding the whole personality now.",
  'srsly, the coffee budget is SAFE.',
  "aite, u're getting on my nerves. STOPuhhh.",
];

const WINDOW_MS = 10_000;
const MAX_CLICKS = 5;

export function createFundTheInkState({
  now = Date.now,
  phrases = PHRASES,
  windowMs = WINDOW_MS,
  maxClicks = MAX_CLICKS,
} = {}) {
  let clicks = [];

  return {
    recordClick(t = now()) {
      // Drop clicks that fell out of the rolling window.
      clicks = clicks.filter((c) => t - c < windowMs);

      // Over the cap inside the window: ignored. The annoyed message
      // stays on screen; the mood resets when the window clears.
      if (clicks.length >= maxClicks) return { message: null, pop: false };

      clicks.push(t);
      const message = phrases[Math.min(clicks.length, phrases.length) - 1];
      return { message, pop: true };
    },
  };
}
