import { colours, coloursArray } from "./colours.js";

/**
 * @param {string} string
 * @param {RegExp,string}seperator
 * @returns {string}
 */
export function randomColour(string,seperator) {
  seperator ??= /./g;
  const matches = typeof seperator == 'string' ? string.split(seperator) : string.match(seperator);
  const result = matches.map((str) => {
    const r = Math.floor(Math.random() * coloursArray.length);
    return `${colours.get(coloursArray[r])}${str}`
  });
  return result.join((typeof seperator == 'string') ? seperator : '')
}
