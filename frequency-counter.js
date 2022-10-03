/**
 * AN EXAMPLE
 * Write a function called isSame, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 *
 * @format
 */

export const isSame = (arr1, arr2) => {
	let isSame;
	//if the two arrays are not of the same length return false, they must be of the same length/frequency
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
        const squaredNumber = arr1[ i ] ** 2;
		if (arr2.includes(squaredNumber)) {
			isSame = true;
		} else {
			isSame = false;
		}
	}
	//return the value if true;
	return isSame;
};
