/**
 * AN EXAMPLE
 * Write a function called isSame, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 *
 * The following function is not that efficient as it has a Big-O time complexity of: O(n^2)
 *   WHy because for an array one n items it will need to loop over n times thus O(n)
 *   To search if the second i tems has includes the square of the current value being iterated it has Big-o of O(n) as you need to loop over the n items to see if includes the element
 *  O(n) * O(n) = O(n^2)
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
		const squaredNumber = arr1[i] ** 2;
		if (arr2.includes(squaredNumber)) {
			isSame = true;
		} else {
			isSame = false;
		}
	}
	//return the value if true;
	return isSame;
};

/***
 * Refactored
 * The refactored has an 0(n) which is a result when we apply the Sum rule (add the corresposnind Big-Os)
 * The O(n) = 0(a1(n)) + O(arr2(n)) + O(arrk1(n)) 
 */
export const isSameRefactor = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let isSame = false;

	//loop over the the arrays
	const frequencyCounterKeysArr1 = {};
	const frequencyCounterKeysArr2 = {};

	for (let el of arr1) {
		frequencyCounterKeysArr1[el] += 1;
	}

	for (let el of arr2) {
		frequencyCounterKeysArr2[el] += 1;
	}

	for (let key in frequencyCounterKeysArr1) {
		//log the object keys in this case {1: 1, 2: 1, 3: 3} becomes 1, 2, 3 respectively
		if (
			frequencyCounterKeysArr2[key] === frequencyCounterKeysArr1[key ** 2]
		) {
			isSame = true;
		} else {
			isSame = false;
		}
	}
	return isSame;
};
