import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', {
  state: () => ({
    mode: 'day' as string,
  }),
  actions: {
    setMode(mode: string) {
      this.mode = mode
    },
  },
})
