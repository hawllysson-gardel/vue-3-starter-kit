<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { availableLocales, locale } = useI18n();

watch(locale, (newLocale) => {
  if (newLocale) {
    localStorage.locale = newLocale;
  }
});
</script>

<template>
  <footer class="tw-sticky-footer tw-flex-shrink-0 tw-shadow-inner tw-p-4">
    <div
      class="tw-flex tw-flex-col tw-w-full tw-max-w-6xl tw-my-0 tw-mx-auto md:tw-h-16 md:tw-flex-row"
    >
      <select v-model="locale">
        <option v-for="lcl in availableLocales" :key="lcl" :value="lcl">
          {{ lcl }}
        </option>
      </select>
    </div>
  </footer>
</template>
