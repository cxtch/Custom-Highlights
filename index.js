import clipboardy from 'clipboardy';
import { stackTrace } from './syntax/stackTrace.js';
const input = await clipboardy.read()
const result = stackTrace(input)
console.log(result)
clipboardy.write(result)