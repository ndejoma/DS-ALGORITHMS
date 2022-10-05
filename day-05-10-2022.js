/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 * eg [-3, -2, -1, 0, 1, 2, 3] returns [-3, 3]
 * While [1, 2,3, 4, 5, 6] returns undefined
 *
 * @format
 */

export const pairWithSumZero = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			console.log(`i is ${i} and j is ${j}`);
			//check if two numbers sum to zero when the number is not itself to prevent the case with num zero
			if (arr[i] + arr[j] === 0) {
				console.log(
					`Sum is zero when i is ${i} and the value ${arr[j]} and j is ${j} and the value is ${arr[j]}`
				);
				return [arr[i], arr[j]];
			}
		}
	}
};

export const pairWithSumZeroRefactor = arr => {
	//cannot find a pair in an array with one element or empty
	if (arr.length <= 1) {
		return;
	}
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (leftIdx < rightIdx) {
		let sum = arr[leftIdx] + arr[rightIdx];

		//if the sum is zero return
		if (sum === 0) {
			return [arr[leftIdx], arr[rightIdx]];
		} else if (sum > 0) {
			/**8
			 * If the sum is greater than zero it means the array element which might be  pair might be present so decerement the rightIdx value to look up array with indices less than it
			 * WHere we are likelt to get the pair of the leftIdx
			 * Otherwsie if the sum is less than zero it means that number does not have a pair so
			 * increment the leftIdx as we like to get its pair
			 */
			rightIdx--;
		} else {
			//if the sum is less than zero increment the leftIdx
			leftIdx++;
		}
	}
};
