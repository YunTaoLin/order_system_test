import { computed } from 'vue'
import type { BentoItem, SetMealItem } from '@/types'

export function useOrderCalc(items: { value: Array<BentoItem | SetMealItem> }) {
  const totalAmount = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  )

  const totalQuantity = computed(() =>
    items.value.reduce((sum, item) => sum + item.qty, 0),
  )

  const hasSelectedItems = computed(() =>
    items.value.some(item => item.qty > 0),
  )

  return { totalAmount, totalQuantity, hasSelectedItems }
}
