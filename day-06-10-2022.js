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

/***
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 * 
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
 */

export const maxSubarraySum = (arr = [], num = 2) => {
	if (num > arr.length) {
		return null;
	}

	let currentMaxSum = 0;
	for (let i = 0; i < arr.length - num + 1; i++) {
		//the temporary sum for each iteration eg the first 1 + 2 = 3 for arr [1, 2, 5, 2, 8, 7, 1, 5]
		//this tempSum should always be 0 in each iteration in the first it  will be  1+ 2 = 3 when num = 2 and the second iteration of the i loop it will be 2 + 5 = 7
		let tempSum = 0;

		console.log(`THe value of i is ${i} and the value of j is ${arr[i]}`);
		for (let j = i; j < i + num; j++) {
			console.log(
				`******** THe value of j  is ${j} and value arr is ${arr[j]}`
			);
			tempSum += arr[j];
		}

		if (currentMaxSum < tempSum) {
			/**
			 * If the currentMaxium is less than temp sum in the current iteration
			 * Set the current maxium sum to be the current temp sum
			 */
			currentMaxSum = tempSum;
			console.log(
				`##################The current maximum is ${tempSum} in the ${
					i + 1
				} iteration`
			);
			console.log(
				`&&&&*************The current maximum sum is ${currentMaxSum}`
			);
		}
	}
	console.log(currentMaxSum); //logs 15 for [1, 2, 5, 2, 8, 7, 1, 5]
	return currentMaxSum;
};
