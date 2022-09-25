<script setup>
import { useI18n } from 'vue-i18n';

import notFoundIcon from '~/assets/images/404.svg';

const { t } = useI18n({ useScope: 'local' });
</script>

<template>
  <div class="tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-8 tw-w-full tw-max-w-9xl tw-mx-auto">
    <div class="tw-max-w-2xl tw-m-auto tw-mt-16">
      <div class="tw-text-center tw-px-4">
        <div class="tw-inline-flex tw-mb-8">
          <img :src="notFoundIcon" width="176" height="176" alt="404 illustration" />
        </div>
        <div class="tw-branded-headline tw-text-xl tw-text-gray-700 tw-font-bold tw-mb-6">
          {{ t('message') }}
        </div>
        <q-btn color="secondary" to="/">{{ t('back') }}</q-btn>
      </div>
    </div>
  </div>
</template>

<i18n locale="enUS" src="./locales/notFound.en-US.json"></i18n>
<i18n locale="ptBR" src="./locales/notFound.pt-BR.json"></i18n>
