import { sleep } from '@/utils'
import { ENABLE_MOCK_API, MOCK_API_LATENCY } from '@/config'
import type { OrderResult, BentoProductDayMenu, SetMealProduct, CustomizationOption } from '@/types'

async function mockDelay() {
  if (ENABLE_MOCK_API) await sleep(MOCK_API_LATENCY)
}

export async function fetchBuffetMenu() {
  const { buffetMenuMockData } = await import('@/mockData')
  await mockDelay()
  return buffetMenuMockData
}

export async function fetchBentoMenu(): Promise<BentoProductDayMenu[]> {
  const { bentoMenuMockData } = await import('@/mockData')
  await mockDelay()
  return bentoMenuMockData
}

export async function fetchSetMealMenu(): Promise<{
  meals: SetMealProduct[]
  customizationOptions: CustomizationOption[]
}> {
  const { setMealMockData, customizationOptionsMockData } = await import('@/mockData')
  await mockDelay()
  return { meals: setMealMockData, customizationOptions: customizationOptionsMockData }
}

export async function submitOrder(_payload: Record<string, unknown>): Promise<OrderResult[]> {
  await mockDelay()
  return []
}
