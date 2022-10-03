/** @format */
import { isSame } from './frequency-counter.js';

let nums = [6, 57, 58, 400, 31, 3, 78];
let numsSquaredSorted = nums
	.map(el => {
		return el ** 2;
	})
	.sort((a, b) => {
		//sort from the smallest to the largest in this case
		//[36, 3249, 3364, 160000, 961, 9, 6084 ] becomes  [9, 36, 961, 3249, 3364, 6084, 160000]
		if (a > b) {
			return 1;
		}
		if (a < b) {
			return -1;
		}
		if (a === b) {
			return 0;
		}
	});
console.log(numsSquaredSorted);
const isTrueSame = isSame(nums, numsSquaredSorted);
console.log(isTrueSame);
