import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import envify from 'process-envify';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Icons from 'unplugin-icons/vite';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

import env from './env';

export default defineConfig({
  define: envify(env, { useImportMeta: true }),
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/assets/quasar-variables.sass',
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['lcov'],
    },
  },
});
