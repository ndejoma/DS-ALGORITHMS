/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if any value in the array returns true when passed to the callback. Otherwise it returns false.
 *   eg isOdd if any value i the array is an odd number
 * @format
 */

export const someRecursive = (arr, callback) => {
	if (arr.length === 0) {
		return false;
	}
	//start from the last index
	if (callback([arr[arr.length - 1]])) return true;

	return someRecursive(arr.slice(0, arr.length - 1), callback);
};

/***
 * flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

export const flatten = arr => {
	let flattenArr = [];
	for (let el of arr) {
		if (Array.isArray(el)) {
			flattenArr = flattenArr.concat(flatten(el));
		} else {
			flattenArr.push(el);
		}
	}
	return flattenArr;
};

/***
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first letter of each string in the array.
 */

const capitalizeFirstLetter = str => {
	return [str[0].toUpperCase() + str.slice(1)];
};

export const capitalizeFirst = arr => {

	if (arr.length === 0) {
		return [];
	}

	return capitalizeFirstLetter(arr[0]).concat(capitalizeFirst(arr.slice(1)));
};

/***
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects
 */
