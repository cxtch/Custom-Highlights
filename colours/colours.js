const ESC = '\x1b';
const colours = new Map([
  ['grey', '\x1b[1;30m'],
  ['red', '\x1b[1;31m'],
  ['green', '\x1b[1;32m'],
  ['gold', '\x1b[1;33m'],
  ['blue', '\x1b[1;34m'],
  ['magenta', '\x1b[1;35m'],
  ['aqua', '\x1b[1;36m'],
  ['white', '\x1b[1;37m'],
  ['neutral', '\x1b[1;0m']
]),
  //Just for redundancy.
  coloursArray = ['grey', 'red', 'green', 'gold', 'blue', 'magenta', 'aqua', 'white', 'neutral'];
export {
  ESC, colours, coloursArray
}