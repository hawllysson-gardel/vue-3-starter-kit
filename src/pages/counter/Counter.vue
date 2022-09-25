<script setup>
import { useCounterStore } from '../../store/counter/counterStore.js';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'local' });

const store = useCounterStore();
const { decrement, increment } = store;
const { counter, prevCounter } = storeToRefs(store);
</script>

<template>
  <div class="tw-mx-2">
    <h2>Car:</h2>
    <p>{{ t('car', counter) }}</p>
    <h2>Apple:</h2>
    <p>{{ t('apple', counter) }}</p>
    <h2>Banana:</h2>
    <p>{{ t('banana', counter) }}</p>
    <h2>Counter:</h2>
    <p id="counter-p">{{ counter }}</p>
    <h2>Counter Even or Odd:</h2>
    <p id="counter-evenodd-p">{{ t(store.evenOrOdd, store.evenOrOdd) }}</p>
    <h2>Prev Counter:</h2>
    <p id="prev-counter-p">{{ prevCounter }}</p>
  </div>

  <button
    id="decrement-btn"
    class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-mx-2 tw-rounded"
    @click="decrement()"
  >
    Decrement -1
  </button>
  <button
    id="increment-btn"
    class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-mx-2 tw-rounded"
    @click="increment()"
  >
    Increment +1
  </button>
</template>

<i18n locale="enUS" src="./locales/counter.en-US.json"></i18n>
<i18n locale="ptBR" src="./locales/counter.pt-BR.json"></i18n>
