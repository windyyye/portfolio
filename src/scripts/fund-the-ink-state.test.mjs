import test from 'node:test';
import assert from 'node:assert/strict';
import { createFundTheInkState, PHRASES } from './fund-the-ink-state.mjs';

function fakeClock() {
  let t = 0;
  return { now: () => t, advance: (ms) => { t += ms; } };
}

test('clicks 1–4 escalate through the friendly phrases with confetti', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 4; i++) {
    clock.advance(500);
    const r = state.recordClick();
    assert.equal(r.message, PHRASES[i]);
    assert.equal(r.pop, true);
  }
});

test('click 5 delivers the annoyed lockout phrase', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 4; i++) { clock.advance(500); state.recordClick(); }
  clock.advance(500);
  const r = state.recordClick();
  assert.equal(r.message, PHRASES[4]);
  assert.equal(r.pop, true);
});

test('clicks beyond 5 inside the window are ignored (message stays, no confetti)', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 5; i++) { clock.advance(500); state.recordClick(); }
  clock.advance(500);
  const r = state.recordClick();
  assert.deepEqual(r, { message: null, pop: false });
});

test('after the window clears, the mood resets to phrase 1', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 5; i++) { clock.advance(500); state.recordClick(); }
  clock.advance(10_001);
  const r = state.recordClick();
  assert.equal(r.message, PHRASES[0]);
  assert.equal(r.pop, true);
});

test('slow clicking (one per window) always gets phrase 1 — annoyance is for spammers', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 3; i++) {
    clock.advance(11_000);
    const r = state.recordClick();
    assert.equal(r.message, PHRASES[0]);
  }
});

test('the window rolls: clicks expire individually, not as a batch', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  clock.advance(0); const r1 = state.recordClick();     // click at 0
  clock.advance(9_000); const r2 = state.recordClick(); // click at 9000 — first expires at 10000
  clock.advance(9_000); const r3 = state.recordClick(); // t=18000: click@0 expired, @9000 kept
  assert.equal(r1.message, PHRASES[0]);
  assert.equal(r2.message, PHRASES[1]);
  assert.equal(r3.message, PHRASES[1]);                 // 2 clicks still in window → phrase 2
});
