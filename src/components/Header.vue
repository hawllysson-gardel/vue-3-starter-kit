<script setup>
import { useI18n } from 'vue-i18n';

import logo from '~/assets/images/logo.png';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <header class="tw-bg-white tw-shadow tw-px-3 tw-py-2 md:tw-px-5 md:tw-py-4">
    <div
      class="tw-flex tw-w-full tw-max-w-6xl tw-my-0 tw-mx-auto tw-justify-between tw-items-center"
    >
      <router-link class="tw-flex" :to="{ name: 'home' }">
        <img :src="logo" alt="Logo" class="tw-w-10 tw-h-10" />

        <div class="tw-text-sm tw-ml-1 tw-mt-1 tw-flex tw-flex-col tw-justify-between">
          <div class="tw-branded-headline tw-text-2xl tw-text-gray-700 tw-font-bold">
            {{ t('title') }}
          </div>
        </div>
      </router-link>
      <div class="tw-hidden md:tw-flex tw-divide-x tw-divide-gray-300 tw-text-gray-600">
        <router-link :to="{ name: 'home' }" class="tw-px-3 hover:tw-text-green-500"
          >Home</router-link
        >
        <router-link :to="{ name: 'counter' }" class="tw-px-3 hover:tw-text-green-500"
          >Counter</router-link
        >
        <router-link :to="{ name: 'formValidation' }" class="tw-px-3 hover:tw-text-green-500"
          >Form Validation</router-link
        >
      </div>
    </div>
  </header>
</template>
