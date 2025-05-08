const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = alphabet.toUpperCase();
const numbers = "0123456789";
const special = ".()!?,";
const spacing = "\t\n\r ";
const all = alphabet + alphabetUpper + numbers + special + spacing;
const charCodes = all.split("").map((c) => c.charCodeAt(0));

/**
 * @param {Array<number | string>} a
 * @returns {Array<number | string>}
 */
function unique(a) {
  return [...new Set(a)];
}

/**
 *
 * @param {String} input
 * @returns {Object} { clean: boolean, result: string }
 */
export function cleanText(input) {
  const chars = input.split("").map((c) => c.charCodeAt(0));

  const uniqueCodes = unique(chars);

  console.log({
    uniqueCodes: uniqueCodes.length,
    total: unique(charCodes).length,
  });

  let clean = true;
  // Step 1: Replace
  let output = input.replace(/\-/g, " ");
  // Step 2: Normalize and remove diacritics (accents, etc.)
  output = output.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Step 3: Remove anything not a-zA-Z0-9 or .
  output = output.replace(/[^a-zA-Z0-9 .,]/g, "");

  // Step 4: Replace any remaining special characters with their corresponding codes

  let result = "";

  for (let i = 0; i < output.length; i++) {
    const c = output[i];

    if (!charCodes.includes(c.charCodeAt(0))) {
      result += `[NA|${c.charCodeAt(0)}|${c}]`;
      clean = false;
    } else {
      result += c;
    }
  }

  return { clean, result };
}


export default cleanText;




