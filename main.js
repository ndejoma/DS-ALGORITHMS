/** @format */
import { isSame, isSameRefactor } from './frequency-counter.js';

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
const isTrueSame = isSameRefactor([1, 2, 3, 3, 5], [1, 25, 4, 9, 9]);
console.log(isTrueSame, 'Same');
