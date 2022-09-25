import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    prevCounter: null,
  }),
  getters: {
    evenOrOdd: (state) => (state.counter % 2 === 0 ? 'even' : 'odd'),
  },
  actions: {
    increment() {
      this.setPrevCounter(this.counter);
      this.counter += 1;
    },
    decrement() {
      this.setPrevCounter(this.counter);
      this.counter -= 1;
    },
    setPrevCounter(val) {
      this.prevCounter = val;
    },
  },
});
