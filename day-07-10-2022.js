/**
 * Refactor to an efficient one
 *  * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6],1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) // null
 *
 *    THis function is simple take for example we have this array
 *    [3, 5, 7, 8]
 *    To get the maximum sum of n consecutive terms in this case let us use 2 as n
 *    To get the first two and set it to tempSum in the first loop for iteration
 *     let maxSum = 0;
 *     let tempSum = 0;
 *
 *     for (let i = 0; i < n; i++) {
 *           - in the first iteration wil will have
 *             - 1 tempSum = 0 + arr[0] = 0 + 3 = 3
 *             - 2 tempSum = 3 + arr[1] = 3 + 5 = 8
 *           tempSum = tempSum + arr[i]
 *         - now tempSu, will be 8 when the loop breaks out since we have reached i == 1 and 1 < 2 but not eqaul to 2
 *     }
 *
 *     - assign maximum sum to be the current maxSum sum when the first iteration finishes
 *     - in this case maxSUm will be 8
 *     maxSum = tempSum;
 *
 *     - loop over another but starting from the index we have not calclated
 *     -  in this case we have the tempSum upto index one before this code gets executed
 *     - so we start off from index = 2 i = 2 and i < 4 (length of the array) and increment i in each iteration
 *
 *     for (let i = num; i < arr.length; i++) {
 *          - assing tempSum to be the nextSum
 *          - in this case we are using the currentTemp sum to be
 *          - we can get the nextSum by subtracting the element which is n positions from our current index then add element at our current index  to get the current tempSum before comparing it with the maxSum
 *          - when i = 2
 *          - tempSUm = 8 - arr[2-2] + arr[1] = 8 - 3 + 7 = 12 and so on
 *          - when i = 3
 *          - tempSum = 12 - arr[3- 2] + arr[3] = 12 - 5 + 8 = 15
 *          tempSum = tempSum - arr[i - num] + arr[i]
 *          - if the maxSum is greater keep it to be if otherwise return the currentTempSum we just got
 *          - when i = 2 the tempSum is 12 so compare 12 and 8 so the maxSum will be  12
 *         - when i = 3 the tempSUm is 15 so compare 15 and 12 and so the maxSum will be 15
 *          - BY i = 3 and arr.length is 4 so the loop breaks and the current maxSum is 15
 *          maxSum = Math.max(tempSum, maxSum);
 *     }
 *
 *     //return the maxSUm
 *     //will return 15
 *     return maxSum
 *
 *  The function has a time complexity of O(n) there will be n calcations O(i(n)) + O(j(n))
 *  There will be always n computationa and space complexity of O(1) only a constant amount of space is rquired to store the tempSum and maxSum;
 * @format
 */

export const maxSubarraySum = (arr, num) => {
	// the num shold be equal to the length or greater than the length
	if (num > arr.length || arr.length === 0) {
		return nulll;
	}

	let tempSum = 0;
	let maxSum = 0;

	//get the first tempSum for the first n items in the array
	for (let i = 0; i < num; i++) {
		tempSum += arr[i];
	}

	//assign the first tempSUm to be the currentmaxium sum
	maxSum = tempSum;

	//now continue from the element at n position in the array
	for (let j = num; j < arr.length; j++) {
		tempSum = tempSum - arr[j - num] + arr[j];
		maxSum = Math.max(tempSum, maxSum);
	}
	console.log(maxSum); // [3, 4, 5, 7] shoulde be 12 when n is 2 and 19 when n is 4
	return maxSum;
};

/***
 * Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexit
 */

/***
 * Example one: Linear search or sequential search
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
 *
 *  eg [-1, 0, 3, 4, 5, 8, 10]  the index of element 2 will be 3 and 5 will be 4
 * This also known as linear search will a time complecity of O(n) as swe have to loop over all the items in the array in the worst case scenario t
 * To find the 18 we have to loop over the array and return -1 since it will not be found
 */

export const linearSearch = (arr, elToFind) => {
	let foundIdx = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === elToFind) {
			foundIdx = i;
			//break out of the loop there is no need to continue iterating
			break;
		}
	}
	return foundIdx;
};
