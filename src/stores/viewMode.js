import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', {
  state: () => ({
    mode: 'day',
  }),
  actions: {
    setMode(mode) {
      this.mode = mode
    },
  },
})
