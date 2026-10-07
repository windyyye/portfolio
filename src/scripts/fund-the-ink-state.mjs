// The tip-jar easter egg — state machine (the deep module).
//
// Interface: createFundTheInkState({ now?, phrases?, windowMs?, maxClicks?, lockoutMs? })
//              → { recordClick(t?) → { message, pop } }
// One method carries all the behaviour: rolling 10s window, clicks 1–5
// escalate through the phrases, the 5th (annoyed) starts a hard 5s
// lockout, clicks during it are silence, then the mood resets fresh.
// Tests inject a fake `now` and drive everything through recordClick.
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
const LOCKOUT_MS = 5_000;

export function createFundTheInkState({
  now = Date.now,
  phrases = PHRASES,
  windowMs = WINDOW_MS,
  maxClicks = MAX_CLICKS,
  lockoutMs = LOCKOUT_MS,
} = {}) {
  let clicks = [];
  let lockoutUntil = 0;

  return {
    recordClick(t = now()) {
      // Hard lockout after the annoyed phrase: silence, no matter what.
      if (t < lockoutUntil) return { message: null, pop: false };

      // Drop clicks that fell out of the rolling window.
      clicks = clicks.filter((c) => t - c < windowMs);
      clicks.push(t);

      const message = phrases[Math.min(clicks.length, phrases.length) - 1];

      // The annoyed phrase (the 5th) renders → lockout begins: silence
      // for lockoutMs, then the mood resets fresh.
      if (clicks.length >= maxClicks) {
        lockoutUntil = t + lockoutMs;
        clicks = [];
      }

      return { message, pop: true };
    },
  };
}
