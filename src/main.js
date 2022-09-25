import App from './App.vue';
import { createApp } from 'vue';

import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import { createI18n } from 'vue-i18n';

import enUS from '~/locales/en-US.json';
import ptBR from '~/locales/pt-BR.json';

import { routes } from '~/core/routes.js';

// Quasar
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

// Tailwind
import './assets/tailwind.css';

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: localStorage.locale || 'enUS',
  fallbackLocale: 'enUS',
  messages: {
    enUS,
    ptBR,
  },
});

app.use(createPinia());
app.use(routes);
app.use(Quasar);
app.use(i18n);

app.mount('#root');
