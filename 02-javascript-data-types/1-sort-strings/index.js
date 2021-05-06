/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const directions = {
    asc: 1,
    desc: -1
  };

  const direction = directions[param];

  const collator = new Intl.Collator(['ru-RU', 'en-US'], {
    caseFirst: 'upper'
  });

  return [...arr].sort((a, b) => direction * collator.compare(a, b));
}
