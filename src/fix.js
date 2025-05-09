import { unique, ALLOWED_CHARS } from './utils.js'

/**
 *
 * @param {String} input
 * @returns {Object} { result: string }
 */
export function cleanText(input) {
  // Step 1: Replace and  Normalize and remove diacritics (accents, etc.)
  let output = input
    .replace(/\-/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  // Step 4: Replace any remaining specials with null
  const result = output
    .split('')
    .filter(c => ALLOWED_CHARS.includes(c.charCodeAt(0)))
    .join('')

  return { result }
}

export default cleanText
