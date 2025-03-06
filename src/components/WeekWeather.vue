<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useCityStore } from '@/stores/city'
import { computed } from 'vue'

import IconRain from '@/components/icons/IconRain.vue'
import IconCloudy from '@/components/icons/IconCloudy.vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconWind from '@/components/icons/IconWind.vue'

const cityStore = useCityStore()
const currentCity = computed(() => cityStore.city)

const weekWeather = computed(() => {
  return cityStore.cities.find((el) => el.id === currentCity.value.id)?.weekWeather
})
</script>

<template>
  <section class="animate__animated animate__fadeIn">
    <Swiper
      :space-between="10"
      :breakpoints="{
        320: {
          slidesPerView: 3.5,
        },
        480: {
          slidesPerView: 4.5,
        },
      }"
    >
      <SwiperSlide v-for="(el, i) in weekWeather" :key="i" width="auto" style="max-width: 120px">
        <div class="weekday-card">
          <span>{{ el.name }}</span>
          <component :is="el.icon" />
          <span>{{ el.temper }}°</span>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<style scoped lang="scss">
.weekday-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;
  gap: 16px;
  padding: 1px;
  border-radius: 8px;
}
</style>
