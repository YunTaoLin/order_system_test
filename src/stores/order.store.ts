import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { OrderResult } from '@/types'

export const useOrderStore = defineStore('order', () => {
  const showSuccess = ref(false)
  const orderResults = ref<OrderResult[]>([])
  const prepaidAmount = ref(0)

  function setOrderResults(results: OrderResult[], amount: number) {
    orderResults.value = results
    prepaidAmount.value = amount
    showSuccess.value = true
  }

  function closeSuccess() {
    showSuccess.value = false
    orderResults.value = []
  }

  return { showSuccess, orderResults, prepaidAmount, setOrderResults, closeSuccess }
})
