import type { MealPeriod } from '@/types'

interface DeadlineRule {
  period: MealPeriod
  description: string
}

export const buffetDeadlineConfig: DeadlineRule[] = [
  { period: '早餐', description: '前日17:00' },
  { period: '午餐', description: '前日17:00' },
  { period: '下午茶', description: '當日10:00' },
  { period: '晚餐', description: '當日10:00' },
  { period: '宵夜', description: '當日17:00' },
]

export const bentoDeadlineConfig: DeadlineRule[] = [
  { period: '午餐', description: '前日17:00' },
  { period: '晚餐', description: '當日10:00' },
]

export const mealColorMap: Record<string, { bg: string; border: string }> = {
  yellow: { bg: '#fefce8', border: '#fef9c3' },
  blue: { bg: '#eff6ff', border: '#dbeafe' },
  green: { bg: '#f0fdf4', border: '#dcfce7' },
}

export const locationOptions = [
  { label: '大成台南總部', value: '大成台南總部' },
]

export const timeSlotOptions = [
  { label: '早餐', value: '早餐' },
  { label: '午餐', value: '午餐' },
  { label: '下午茶', value: '下午茶' },
  { label: '晚餐', value: '晚餐' },
]
