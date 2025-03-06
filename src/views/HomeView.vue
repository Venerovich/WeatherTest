<script setup>
import DayWeather from '@/components/DayWeather.vue'
import WeekWeather from '@/components/WeekWeather.vue'
import { useCityStore } from '@/stores/city'
import { useModeStore } from '@/stores/viewMode'
import { computed } from 'vue'

const cityStore = useCityStore()
const modeStore = useModeStore()

const mode = computed(() => modeStore.mode)

const options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}

cityStore.setCity(cityStore.cities[0])

const city = computed(() => cityStore.city)

const date = new Date().toLocaleString('ru', options)
</script>

<template>
  <section class="animate__animated animate__fadeIn">
    <h1>Погода в городе {{ city?.name ?? '' }}</h1>
    <p class="page-description">{{ date }}</p>
    <br />
    <DayWeather v-show="mode === 'day'" />
    <WeekWeather v-show="mode === 'week'" />
  </section>
</template>
