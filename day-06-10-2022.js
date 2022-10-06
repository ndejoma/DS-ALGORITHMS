/**
 * Counting unique values
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 *
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 *
 * @format
 */

/***
 * The following function has Big-O time complexity of O(n) as the inout size grow so does the time taken to compute all the unique iyems in the array
 * The space complexity of O(n) worst case assuming all values are unique the map will grow with the size
 */

export const countUniqueValues = arr => {
	if (arr.length === 0) {
		return 0;
	}
	if (arr.length === 1) {
		return 1;
	}

	const arrValuesMap = {};
	//the unique items count
	let unqiueItemsCount = 0;

	for (let el of arr) {
		if (arrValuesMap[el] !== undefined) {
			arrValuesMap[el] += 1;
		} else {
			arrValuesMap[el] = 1;
			unqiueItemsCount += 1;
		}
	}
	console.log(unqiueItemsCount);
	return unqiueItemsCount;
};

export const countUniqueValuesVersionTwo = arr => {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return 1;

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++;
			console.log(
				`THe vaue of i is ${i} and el ${arr[i]} and j is ${j} with arr ${arr[j]} `
			);
			console.log(arr);
		}
	}
	console.log(i + 1);
	return i;
};
