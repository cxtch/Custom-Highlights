import { colours } from "./colours.js";
export function applyColour(/**@type string*/string, /**@type string*/colour) {
  return `${colours.get(colour)}${string}${colours.get('neutral')}`
}