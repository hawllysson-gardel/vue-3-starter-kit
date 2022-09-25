import { test, expect, describe, beforeEach } from 'vitest';

import { createPinia, setActivePinia } from 'pinia';

import { useCounterStore } from '../counterStore.js';

describe('pinia test example', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('state test', () => {
    const store = useCounterStore();

    expect(store.counter).toBe(0);
    expect(store.prevCounter).toBe(null);
  });

  test('actions test', () => {
    const store = useCounterStore();

    store.increment();
    store.increment();
    store.decrement();

    expect(store.counter).toBe(1);
    expect(store.prevCounter).toBe(2);
  });

  test('getters test', () => {
    const store = useCounterStore();

    store.increment();
    store.increment();
    store.decrement();

    expect(store.evenOrOdd).toBe('odd');
  });
});
