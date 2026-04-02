export interface NavTab {
  key: string
  label: string
  path: string
  disabled?: boolean
}

export const navTabsConfig: NavTab[] = [
  { key: 'record', label: '報餐紀錄', path: '/record', disabled: true },
  { key: 'buffet', label: '自助餐報餐', path: '/buffet' },
  { key: 'bento', label: '便當報餐', path: '/bento' },
  { key: 'setMeal', label: '套餐報餐', path: '/set-meal' },
  { key: 'menu', label: '每週菜單', path: '/menu', disabled: true },
]
