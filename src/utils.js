/**
 * @description Remove duplicates from an array
 * @template T
 * @param {Array<T>}
 * @returns {Array<T>}
 */
export function unique(a) {
  return [...new Set(a)]
}

export function timed() {
  const start = performance.now()
  return () => {
    const end = performance.now()
    return Math.round((end - start) * 100) / 100
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabetUpper = alphabet.toUpperCase()
const numbers = '0123456789'
const special = '.()!?,/'
const spacing = '\t\n\r '
const all = alphabet + alphabetUpper + numbers + special + spacing
const charCodes = all.split('').map(c => c.charCodeAt(0))

export const ALLOWED_CHARS = unique(charCodes)
