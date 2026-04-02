export function formatCurrency(amount: number): string {
  return `$${amount}`
}

export function generateTicketId(prefix: string, index: number): string {
  return `${prefix}${(141 + index).toString()}`
}

export function formatWeekday(day: string): string {
  const map: Record<string, string> = {
    '一': '一', '二': '二', '三': '三',
    '四': '四', '五': '五', '六': '六', '日': '日',
  }
  return map[day] || day
}
