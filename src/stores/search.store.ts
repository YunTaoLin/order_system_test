import { defineStore } from 'pinia'
import { ref } from 'vue'
import dayjs from 'dayjs'
import type { SearchParams } from '@/types'

export const useSearchStore = defineStore('search', () => {
  const params = ref<SearchParams>({
    location: '大成台南總部',
    date: dayjs('2026-02-09'),
    timeSlot: '早餐',
    pickupTime: dayjs('08:15', 'HH:mm'),
  })

  function updateParams(patch: Partial<SearchParams>) {
    Object.assign(params.value, patch)
  }

  function resetParams() {
    params.value = {
      location: '大成台南總部',
      date: dayjs(),
      timeSlot: '早餐',
      pickupTime: null,
    }
  }

  return { params, updateParams, resetParams }
})
