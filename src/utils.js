/**
 * @description Remove duplicates from an array
 * @template T
 * @param {Array<T>}
 * @returns {Array<T>}
 */
export function unique(a) {
  return [...new Set(a)];
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabet.toUpperCase();
const numbers = "0123456789";
const special = ".()!?,/";
const spacing = "\t\n\r ";
const all = alphabet + alphabetUpper + numbers + special + spacing;
const charCodes = all.split("").map((c) => c.charCodeAt(0));

export const ALLOWED_CHARS = unique(charCodes);
