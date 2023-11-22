export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}

export function generateId() {
  const uniqueId = Math.random().toString(36).substring(2, 12)
  const timestamp = new Date().getTime().toString()
  return `${uniqueId}${timestamp}`
}
