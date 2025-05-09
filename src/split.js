/**
 * Splits text into chunks of specified word count
 * @param {string} text - The text to split
 * @param {number} wordsPerChunk - Number of words per chunk
 * @returns {string[]} Array of text chunks
 */
export default function splitText(text, wordsPerChunk) {
  if (!text) return []

  // Split text into words and filter out empty strings
  const words = text.split(/\s+/).filter(word => word.trim() !== '')

  // Create chunks of specified word count
  const chunks = []
  for (let i = 0; i < words.length; i += wordsPerChunk) {
    const chunk = words.slice(i, i + wordsPerChunk).join(' ')
    chunks.push(chunk)
  }

  return chunks
}
