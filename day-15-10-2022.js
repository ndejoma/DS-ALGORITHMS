/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 *  eg 10 + 9 + 8 + 7 + 6 + 5 + 3 + 2 + 1 + 0
 *  THe general formula is num + recursiveRange(num - 1)
 *  THe base case is  num === 0
 *
 * @format
 */

/***
 * The iterative range
 */

export const iterativeRange = num => {
	let total = 0;
	for (let i = num; i >= 0; i--) {
		total += i;
	}
	return total;
};

export const recursiveRange = num => {
	if (num === 0) {
		return num;
	}

	return num + recursiveRange(num - 1);
};
