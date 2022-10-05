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
            console.log( `i is ${ i } and j is ${ j }` );
            //check if two numbers sum to zero when the number is not itself to prevent the case with num zero
			if (arr[i] + arr[j] === 0 ) {
				console.log(
					`Sum is zero when i is ${i} and the value ${arr[j]} and j is ${j} and the value is ${arr[j]}`
				);
				return [arr[i], arr[j]];
			}
		}
	}
};
