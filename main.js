/** @format */
import {
	getFibonacciAtNPositionIterative,
	getFibonacciAtNPositionRecursive
} from './fibonacci.js';

// printALlNosBtnZeron( 100 );

// console.time('execution');
// getFibonacciAtNPositionIterative(8); //21
const value = getFibonacciAtNPositionRecursive(8);
console.log(`The fibonacci of 8 is ${value}`);
// console.timeEnd('execution');
