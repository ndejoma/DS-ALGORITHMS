/** @format */

/***
 * The following function has big-o time complexity if O(j(n)) + O(i(n)) = O(n + n)   = O(2n)
 * THe code is executed twice the input size of the array
 * Thus the time complexity of O(2n) but ignoring the constant by applyng the coefficient rule as n 2 will become negligible as n approaches infinity
 */

//the indices of the two largest numbers
let maxIdx = 0;
let max = 0;
let maxTwo = 0;

export const findTheTwoMaximumNo = (arr = []) => {
	for (let i = 0; i < arr.length; i++) {
		//find the maximuIndex
		if (arr[i] > max) {
			maxIdx = i;
			max = arr[i];
		}
	}

	//you already have the maximum
	for (let j = 0; j < arr.length; j++) {
		//continue to the next iteration of the loop if the current Index is the maxIdx to prevent it from being set as the second maximum number in  the iteration
		if (j === maxIdx) continue;
		if (arr[j] > maxTwo) {
			maxTwo = arr[j];
		}
	}

	console.log(`The frist max is ${max} and the second largest is ${maxTwo}`);
	//return the two maxs
	return {
		maxTwo,
		max
	};
};
