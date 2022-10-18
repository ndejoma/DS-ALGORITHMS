/** @format */
import {
	numbersEqual,
	isPrime,
	isPrimeRefactored,
	getModularExponentiation
} from './day-18-10-2022.js';

const value = numbersEqual(0.1 + 0.2, 0.3);
console.log(value);

const valueTwo = isPrime(7);
console.log(valueTwo); //true

const valueThree = isPrimeRefactored(18);
console.log(valueThree);

const valueFour = getModularExponentiation(2, 3, 3);
console.log(valueFour); // 2
