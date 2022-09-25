<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-relative">
    <Header />

    <main class="tw-flex-auto tw-flex-shrink-0 tw-w-full tw-max-w-6xl tw-my-0 tw-mx-auto">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>
