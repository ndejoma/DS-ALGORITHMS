/** @format */
import {
	recursiveRange,
	iterativeRange,
	reverseString
} from './day-15-10-2022.js';

const valueOne = recursiveRange(10);
console.log(valueOne);
const valueTwo = iterativeRange(10);
console.log(valueTwo);

//string reversal
const valueThree = reverseString('javascript');
console.log(valueThree, 'The value');
