import type { BentoProductDayMenu } from '@/types'

export const bentoPrepaidAmount = 150

export const bentoMenuMockData: BentoProductDayMenu[] = [
  {
    date: '02/02',
    weekday: '一',
    notice: '午餐：總部股東會，暫停供餐。 | 晚餐：總部股東會，暫停供餐。',
    periods: [],
  },
  {
    date: '02/03',
    weekday: '二',
    periods: [
      {
        key: 'lunch',
        label: '午餐',
        items: [
          {
            id: 'bento-001',
            name: '雞肉便當',
            price: 30,
            img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100',
          },
          {
            id: 'bento-002',
            name: '炸魚便當',
            price: 30,
            img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=100&h=100',
          },
          {
            id: 'bento-003',
            name: '豬肉便當',
            price: 30,
            img: 'https://images.unsplash.com/photo-1544025162-8315ea07f45b?auto=format&fit=crop&q=80&w=100&h=100',
          },
          {
            id: 'bento-004',
            name: '素食便當',
            price: 30,
            img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=100&h=100',
          },
        ],
      },
    ],
  },
]
