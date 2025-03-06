<script setup>
import { ref, computed } from 'vue'
import IconArrow from '../icons/IconArrow.vue'
import { useCityStore } from '@/stores/city'

const cityStore = useCityStore()
const open = ref(false)

const cityList = computed(() => cityStore.cities)
const city = computed(() => cityStore.city)

const handleSelect = (name) => {
  cityStore.setCity(name)
  close()
}

const close = () => {
  setTimeout(() => (open.value = false), 200)
}
</script>
<template>
  <div class="ui-select">
    <div class="ui-select_wrapper">
      <input type="text" :value="city.name" readonly @blur="close" @focus="open = true" />
      <div class="options" :class="{ open: open }">
        <ul>
          <li v-for="item in cityList" :key="item.id" @click="handleSelect(item)">
            <router-link to="#">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <IconArrow class="arrow" :class="{ arrow_open: open }" />
    </div>
  </div>
</template>
<style lang="scss">
.ui-select {
  background-color: #e9e9f31a;
  position: relative;
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;

  input {
    width: 100%;
    cursor: pointer;
  }

  .arrow {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: 50% 0%;
    transition: transform 0.2s ease-in-out;
    &_open {
      transform: rotate(90deg);
    }
  }

  &_wrapper {
    .options {
      position: absolute;
      width: 100%;
      top: 40px;
      left: 0;
      height: 0;
      overflow: hidden;
      background: #1a669c;
      z-index: 999;
      border-radius: 8px;
      transition: height 0.2s ease-in-out;
      box-sizing: border-box;
      ul {
        padding: 10px;
        overflow: scroll;
        li {
          cursor: pointer;
          transition: opacity 0.2s ease-in-out;
          &:not(:last-child) {
            padding-bottom: 4px;
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .open {
      height: 150px;
      overflow: auto;
    }
  }
}
</style>
