/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (string && !size && size !== 0) {
    return string;
  }

  if (size === 0) {
    return '';
  }

  let count = 0;
  let lastChar = null;
  const split = string.split('');
  const result = [];

  split.forEach(char => {
    count = char !== lastChar ? 1 : ++count;
    lastChar = char;

    if (count <= size) {
      result.push(char);
    }
  });

  return result.join('');
}
