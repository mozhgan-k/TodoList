import { defineStore } from 'pinia'
import type { Modal } from '@/types/type'

export const useStore = defineStore('store', {
  // arrow function recommended for full type inference
  state: () => ({
    modal: {} as Modal
  }),

  actions: {
    set_modal(modal: Modal) {
      debugger
      this.modal = modal
    }
  }
})