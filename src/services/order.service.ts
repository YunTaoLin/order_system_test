import type { OrderResult, OrderType, SetMealCustomization } from '@/types'
import { generateTicketId } from '@/utils'

export function buildBuffetOrderResults(
  location: string,
  buffetCounts: Record<string, number>,
  menuDescriptions: Record<string, string>,
  menuDates: Record<string, string>,
): OrderResult[] {
  const results: OrderResult[] = []
  let idx = 0

  Object.entries(buffetCounts).forEach(([key, qty]) => {
    if (qty <= 0) return
    results.push({
      ticketId: generateTicketId('A', idx),
      type: 'buffet',
      location,
      items: menuDescriptions[key] || '',
      quantity: qty,
      dateTime: menuDates[key] || '',
    })
    idx++
  })

  return results
}

export function buildBentoOrderResults(
  location: string,
  items: Array<{ name: string; qty: number; price: number }>,
): OrderResult[] {
  const results: OrderResult[] = []
  let idx = 0

  items.forEach(item => {
    if (item.qty <= 0) return
    results.push({
      ticketId: generateTicketId('B', idx),
      type: 'bento',
      location,
      items: item.name,
      quantity: item.qty,
      dateTime: '2026/02/03 (二) 11:00-13:30',
      price: item.price * item.qty,
    })
    idx++
  })

  return results
}

export function buildSetMealOrderResults(
  location: string,
  meals: Array<{ name: string; qty: number; price: number; customizations: SetMealCustomization[] }>,
  dateTime: string,
): OrderResult[] {
  const results: OrderResult[] = []
  let idx = 0

  meals.forEach(meal => {
    if (meal.qty <= 0) return
    const customText = meal.customizations
      .map(c => {
        const parts: string[] = []
        if (c.options.length) parts.push(c.options.join('、'))
        if (c.drink) parts.push(`${c.drink}．${c.sugar}．${c.ice}`)
        return parts.join('\n')
      })
      .join('\n---\n')

    results.push({
      ticketId: generateTicketId('C', idx),
      type: 'setMeal' as OrderType,
      location,
      items: meal.name,
      quantity: meal.qty,
      dateTime,
      price: meal.price,
      customization: customText,
    })
    idx++
  })

  return results
}

export function formatCustomizationDisplay(c: SetMealCustomization): string {
  const parts: string[] = []
  if (c.options.length) parts.push(c.options.join('、'))
  const drinkParts = [c.drink, c.sugar, c.ice].filter(Boolean)
  if (drinkParts.length) parts.push(drinkParts.join('．'))
  return parts.join('\n')
}
