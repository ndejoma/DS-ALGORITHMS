/** @format */

import { someRecursive, flatten, capitalizeFirst } from './day-17-10-2022.js';

const isOdd = el => el % 2 !== 0;
const value = someRecursive([2, 4, 6, 7], isOdd);
console.log(value); //true because  7 is an odd number 7 % 2 === 1 which !== 0

const isGreaterThanTen = el => el / 10 > 1;
const valueTwo = someRecursive([12, 4, 6, 6], isGreaterThanTen);
console.log(valueTwo); //true because 12 is greater than 10

const isEvenNumber = el => el % 2 === 0;
const valueThree = someRecursive([2, 4, 6, 8], isEvenNumber);
console.log(valueThree); //true since all number are even

const valueFour = flatten([1, 2, 3, [4, 5, [6, [7, 8, [9, [10]]]]]]);
console.log(valueFour);

const valueFive = capitalizeFirst(['hakuna', 'mimi', 'sasa', 'wewe']);
console.log(valueFive);
