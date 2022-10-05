/** @format */
import { pairWithSumZero, pairWithSumZeroRefactor } from './day-05-10-2022.js';

const firstPair = pairWithSumZero([0, 1, 2, 3]);
console.log(firstPair); //[-3, 3]

const value = pairWithSumZeroRefactor([-3, -2, 0, 3, 4, 5]);
console.log(value); //[-3, 3]
