import clipboardy from 'clipboardy';
import {randomColour} from "./colours/randomColour.js";
import { stackTrace } from './syntax/stackTrace.js';

const type = process.argv[2]
let alias;
switch(type?.toLowerCase()) {
    case 'st':
    case'stacktrace':
        alias = stackTrace;
        break;
    default:
        alias = randomColour
}
let input;
if (process.argv[3])
    input = process.argv[3]
else
    input = await clipboardy.read()
const result = alias(input, process.argv[4])
console.log(result)
clipboardy.write(result)
