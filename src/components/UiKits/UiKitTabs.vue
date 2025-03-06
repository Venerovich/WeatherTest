<script setup>
import { useModeStore } from '@/stores/viewMode'
import { computed } from 'vue'

const modeStore = useModeStore()

const setMode = (mode) => {
  modeStore.setMode(mode)
}
const mode = computed(() => modeStore.mode)
const tabs = [
  { name: 'Главная', mode: 'day' },
  { name: 'Погода на неделю', mode: 'week' },
]
</script>
<template>
  <div class="tabs">
    <span
      v-for="(tab, i) in tabs"
      :key="i"
      @click="setMode(tab.mode)"
      :class="{ active: mode === tab.mode }"
      class="tab"
      >{{ tab.name }}
    </span>
  </div>
</template>
<style scoped lang="scss">
.tabs {
  display: inline-flex;
  background: #e9e9f31a;
  border-radius: 8px;
  opacity: 0.7;
  .tab {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    padding: 10px 16px;

    &:not(:first-child) {
      position: relative;
      &:before {
        position: absolute;
        content: '';
        left: -3px;
        top: 0;
        height: 100%;
        width: 1px;
        background: grey;
      }
    }
  }
  .active {
    opacity: 0.3;
  }
}
</style>
