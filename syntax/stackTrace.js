const syntax = {
  white: /(?<=:\/{2,3}).+(?=\w+\.\w+\:\d+\:\d+).+/gmi,
  grey: /(?<=at\s).+(?=\d+\)).+/gm,
  blue: /at file|file|at\s|in\s/gi,
  red: /[A-Z]\w+Error/gm,
};
import { applyColour } from '../colours/applyColour.js';
export function stackTrace(/**@type string*/string) {
  const syntaxArr = Object.keys(syntax);
  syntaxArr.forEach((c) => {
    if (syntax[c].test(string)) {
      string = string.replace(syntax[c], (substring) => applyColour(substring, c))
    }
  })
  return string
}