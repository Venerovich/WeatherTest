<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import IconRain from './icons/IconRain.vue'
import UiKitTooltip from './UiKits/UiKitTooltip.vue'
import { useCityStore } from '@/stores/city'
import { computed } from 'vue'

const cityStore = useCityStore()
const cities = computed(() => cityStore.cities)
</script>

<template>
  <section class="popular">
    <div class="title-block">
      <h1>Погода в популярных городах</h1>
      <UiKitTooltip description="Погода в популярных городах" />
    </div>

    <Swiper :space-between="10">
      <SwiperSlide v-for="el in cities" :key="el.id" style="max-width: 250px; width: fit-content">
        <div class="city-card">
          <span class="title">{{ el.name }}</span>
          <span>{{ el.condition }}</span>
          <component :is="el.icon" />
          <span class="temper">{{ el.temper }}°</span>
          <span>Влажность: {{ el.humidity }}%</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped lang="scss">
.title-block {
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  @media (max-width: 756px) {
    margin-bottom: 16px;
  }
}
.city-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.city-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  width: auto;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: radial-gradient(
    134.39% 134.39% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );
  border: 1px solid;

  border-image-source: linear-gradient(
    144.45deg,
    rgba(255, 255, 255, 0.4) -14.51%,
    rgba(255, 255, 255, 0) 117.67%
  );

  @media (max-width: 756px) {
    padding: 8px;
  }
  .title {
    white-space: nowrap;
    font-weight: 500;
    font-size: clamp(1.8rem, 1.229rem + 1.524vw, 2.6rem);
  }
  .temper {
    padding: 8px 0;
    font-size: clamp(2.6rem, 1.029rem + 4.19vw, 4.8rem);
  }
}
</style>
