<script setup>
import IconRain from '@/components/icons/IconRain.vue'
import IconCloudy from '@/components/icons/IconCloudy.vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconWind from '@/components/icons/IconWind.vue'

import { useCityStore } from '@/stores/city'
import { computed } from 'vue'

const cityStore = useCityStore()
const currentCity = computed(() => cityStore.city)

const hourWeatherList = computed(() => {
  return cityStore.cities.find((el) => el.id === currentCity.value.id).hourWeather
})
</script>

<template>
  <div class="main-page_wrapper animate__animated animate__fadeIn">
    <div class="main-info">
      <component :is="currentCity.icon" />
      <span class="temperature">{{ currentCity.temper }}°</span>
      <div class="additional">
        <p>{{ currentCity.condition }}</p>
        <p>Влажность: {{ currentCity.humidity }}%</p>
        <p>Ветер: {{ currentCity.speed }}м/c</p>
      </div>
    </div>

    <div class="description">
      <div v-for="(el, i) in hourWeatherList" :key="i" class="description-item">
        <div class="time">
          <p>{{ el.time }}</p>
          <p>{{ el.dayPeriod }}</p>
        </div>
        <span class="temperature">{{ el.temper }}°</span>
        <div class="icon-block">
          <component :is="el.icon" />
          <span>{{ el.condition }}</span>
        </div>
        <p>{{ el.speed }}м/с</p>
        <p>{{ el.humidity }}%</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-page_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 3vw;
    align-items: center;

    .temperature {
      font-size: clamp(7.2rem, 5.2rem + 5.333vw, 10rem);
      text-align: center;
    }
    svg {
      width: 100%;
      height: 100%;
      @media (max-width: 756px) {
        max-height: 20vh;
      }
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e9e9f31a;
      padding: 8px 0;
      .time {
        text-align: center;
      }
      .temperature {
        font-size: clamp(2.6rem, 1.029rem + 4.19vw, 4.8rem);
      }
      .icon-block {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 10px;
      }
    }
  }
}
</style>
