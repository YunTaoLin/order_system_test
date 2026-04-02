export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
