import { test, expect, describe, beforeEach } from 'vitest';

import { createTestingPinia } from '@pinia/testing';
import { createI18n } from 'vue-i18n';

import { mount } from '@vue/test-utils';

import { useCounterStore } from '../../../store/counter/counterStore.js';
import Counter from '../Counter.vue';

import enUS from '~/locales/en-US.json';
import ptBR from '~/locales/pt-BR.json';

describe('component test example', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(Counter, {
      global: {
        plugins: [
          createI18n({
            legacy: false,
            locale: localStorage.locale || 'enUS',
            fallbackLocale: 'enUS',
            messages: {
              enUS,
              ptBR,
            },
          }),
          createTestingPinia({
            stubActions: false,
            initialState: {
              counter: {
                counter: 20,
                prevCounter: 19,
              },
            },
          }),
        ],
      },
    });
  });

  test('component initial state test', () => {
    expect(wrapper.find('#prev-counter-p').text()).toBe('19');
    expect(wrapper.find('#counter-p').text()).toBe('20');
    expect(wrapper.find('#counter-evenodd-p').text()).toBe('Even');
  });

  test('component increment test', async () => {
    const store = useCounterStore();

    await wrapper.find('#increment-btn').trigger('click');

    expect(wrapper.find('#prev-counter-p').text()).toBe('20');
    expect(wrapper.find('#counter-p').text()).toBe('21');
    expect(wrapper.find('#counter-evenodd-p').text()).toBe('Odd');
  });

  test('component decrement test', async () => {
    const store = useCounterStore();

    await wrapper.find('#decrement-btn').trigger('click');

    expect(wrapper.find('#prev-counter-p').text()).toBe('20');
    expect(wrapper.find('#counter-p').text()).toBe('19');
    expect(wrapper.find('#counter-evenodd-p').text()).toBe('Odd');
  });
});
