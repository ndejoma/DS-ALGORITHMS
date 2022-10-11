/** @format */
import { averagePair } from './day-11-10-2022.js';

const valueOne = averagePair([1, 2, 4, 6, 7, 9], 8.5);
console.log(valueOne, 'the value'); //false
const valueTwo = averagePair([1, 2, 4, 6, 7, 9], 2.5);
console.log(valueTwo, 'True'); //true
