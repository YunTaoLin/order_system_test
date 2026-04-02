import type { SetMealProduct, CustomizationOption } from '@/types'

export const setMealPrepaidAmount = 130

export const setMealMockData: SetMealProduct[] = [
  {
    id: 'set-001',
    name: '牛肉蔬菜蛋堡套餐',
    price: 70,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-002',
    name: '咔啦雞腿蛋堡套餐',
    price: 70,
    img: 'https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-003',
    name: '鮪魚蛋餅套餐',
    price: 60,
    img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-004',
    name: '豬排蛋餅套餐',
    price: 60,
    img: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c397e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-005',
    name: '火腿起司蛋吐司套餐',
    price: 55,
    img: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c397e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-006',
    name: '薯泥培根蛋餅套餐',
    price: 65,
    img: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c397e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-007',
    name: '起司豬排漢堡套餐',
    price: 75,
    img: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c397e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'set-008',
    name: '玉米蛋餅套餐',
    price: 50,
    img: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c397e?auto=format&fit=crop&q=80&w=100&h=100',
  },
]

export const customizationOptionsMockData: CustomizationOption[] = [
  {
    label: '客製選項',
    type: 'checkbox',
    key: 'options',
    choices: ['不醬', '不菜', '不蛋'],
  },
  {
    label: '中杯飲料*1',
    type: 'radio',
    key: 'drink',
    choices: ['紅茶', '奶茶', '豆漿'],
  },
  {
    label: '甜度',
    type: 'radio',
    key: 'sugar',
    choices: ['全糖', '少糖', '半糖', '微糖', '無糖'],
  },
  {
    label: '冰量',
    type: 'radio',
    key: 'ice',
    choices: ['正常冰', '少冰', '半冰', '微冰', '去冰'],
  },
]
