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

test('click 5 delivers the annoyed phrase and starts the 5s lockout', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 4; i++) { clock.advance(500); state.recordClick(); }
  clock.advance(500);
  const r = state.recordClick(); // the annoyed phrase, lockout begins
  assert.equal(r.message, PHRASES[4]);
  assert.equal(r.pop, true);

  clock.advance(500); // t=3000, inside the 5s lockout
  assert.deepEqual(state.recordClick(), { message: null, pop: false });
});

test('the lockout is hard: 5 full seconds of silence, then a fresh mood', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  for (let i = 0; i < 5; i++) { clock.advance(400); state.recordClick(); }
  // t=2000, lockout until 7000
  clock.advance(4970);
  assert.deepEqual(state.recordClick(), { message: null, pop: false }); // t=6970 — still locked
  clock.advance(40);
  const r = state.recordClick(); // t=7010 — lockout over
  assert.equal(r.message, PHRASES[0]); // fresh mood, phrase 1
  assert.equal(r.pop, true);
});

test('before the cap, the window rolls: clicks expire individually', () => {
  const clock = fakeClock();
  const state = createFundTheInkState({ now: clock.now });
  clock.advance(0); const r1 = state.recordClick();
  clock.advance(9_000); const r2 = state.recordClick();
  clock.advance(9_000); const r3 = state.recordClick();
  assert.equal(r1.message, PHRASES[0]);
  assert.equal(r2.message, PHRASES[1]);
  assert.equal(r3.message, PHRASES[1]); // click@0 expired, two remain → phrase 2
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
