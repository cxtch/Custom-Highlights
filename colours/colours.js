const ESC = '\x1b';
const colours = new Map([
  ['grey', '\x1b[0;30m'],
  ['red', '\x1b[0;31m'],
  ['green', '\x1b[0;32m'],
  ['gold', '\x1b[0;33m'],
  ['blue', '\x1b[0;34m'],
  ['magenta', '\x1b[0;35m'],
  ['aqua', '\x1b[0;36m'],
  ['white', '\x1b[0;37m'],
  ['neutral', '\x1b[0;0m']
]),
  //Just for redundancy.
  coloursArray = ['grey', 'red', 'green', 'gold', 'blue', 'magenta', 'aqua', 'white', 'neutral'];
export {
  ESC, colours, coloursArray
}
