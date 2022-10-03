/**
 * AN EXAMPLE
 * Write a function called isSame, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 *
 * @format
 */

export const isSame = (arr1, arr2) => {
	let isSame;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] * 2 === arr2[i]) {
			isSame = true;
		} else {
			isSame = false;
		}
	}
	//return the value if true;
	return isSame;
};


