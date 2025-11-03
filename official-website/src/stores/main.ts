import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    locale: 'en'
  }),
  actions: {
    setLocale(this: { locale: string }, l: string) {
      this.locale = l
    }
  }
})
