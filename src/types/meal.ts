import type { Dayjs } from 'dayjs'

export type MealPeriod = '早餐' | '午餐' | '下午茶' | '晚餐' | '宵夜'

export type OrderType = 'buffet' | 'bento' | 'setMeal'

export interface SearchParams {
  location: string
  date: Dayjs | null
  timeSlot?: string
  pickupTime?: Dayjs | null
}

export interface BuffetMeal {
  period: MealPeriod
  description: string
  colorScheme: 'yellow' | 'blue' | 'green'
}

export interface BuffetDayMenu {
  date: string
  weekday: string
  meals: BuffetMeal[]
  notice?: string
}

export interface BentoProduct {
  id: string
  name: string
  price: number
  img: string
}

export interface BentoItem extends BentoProduct {
  qty: number
}

export interface BentoDayMenu {
  date: string
  weekday: string
  notice?: string
  periods: BentoPeriod[]
}

export interface BentoProductPeriod {
  key: string
  label: MealPeriod
  items: BentoProduct[]
}

export interface BentoProductDayMenu {
  date: string
  weekday: string
  notice?: string
  periods: BentoProductPeriod[]
}

export interface BentoPeriod {
  key: string
  label: MealPeriod
  items: BentoItem[]
}

export interface SetMealProduct {
  id: string
  name: string
  price: number
  img: string
}

export interface SetMealItem extends SetMealProduct {
  qty: number
  customizations: SetMealCustomization[]
}

export interface SetMealCustomization {
  options: string[]
  drink: string
  sugar: string
  ice: string
}

export interface CustomizationOption {
  label: string
  type: 'checkbox' | 'radio'
  key: keyof SetMealCustomization
  choices: string[]
}

export interface OrderResult {
  ticketId: string
  type: OrderType
  location: string
  items: string
  quantity: number
  dateTime: string
  price?: number
  customization?: string
}
