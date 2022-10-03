/** @format */
import { isSame } from './frequency-counter.js';

let nums = [6, 57, 58, 400, 31, 3, 78];
let numsDouble = nums.map(el => {
	return el * 2;
});
console.log(numsDouble);
const isTrueSame = isSame(nums, numsDouble);
console.log(isTrueSame);
