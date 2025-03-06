<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UiKitTabs from './components/UiKits/UiKitTabs.vue'
import UiKitSelect from './components/UiKits/UiKitSelect.vue'
import Popular from './components/Popular.vue'
</script>

<template>
  <header>
    <UiKitTabs />
    <UiKitSelect />
  </header>
  <main>
    <RouterView />
  </main>

  <Popular />
</template>
