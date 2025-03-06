<script setup>
import { ref } from 'vue'

const props = defineProps({
  description: {
    type: String,
    default: '',
  },
})
const open = ref(false)
</script>

<template>
  <div class="tooltip" @click="open = !open" @mouseleave="open = false">
    <div v-show="open" class="description animate__animated animate__fadeIn">
      {{ description }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.tooltip {
  position: relative;
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
  margin-left: 5px;
  font-size: inherit;
  background: #e9e9f31a;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:before {
    position: absolute;
    font-size: 14px;
    text-align: center;
    content: '?';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .description {
    position: absolute;
    border-radius: 8px;
    padding: 8px;
    min-width: 120px;
    opacity: 0;
    z-index: 9999999;
    background: #2a77ad;
    right: 0;
    top: 30px;
  }
}
</style>
