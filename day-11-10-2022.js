/**
 * Multiple Pointers - averagePair
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 *
 * Bonus Constraints:
 *
 * Time: O(N)
 *
 * Space: O(1)
 *
 * Sample Input:
 *
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([],4) // false
 *
 * @format
 */

export const averagePair = (arr, numAvg) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;

		if (avg === numAvg) {
			return true;
		} else if (avg > numAvg) {
			//if the avg above is greater than the numAvg decrement the end
			/***
			 * For an array [1,2, 4, 6, 7, 9]  and numAvg 2.5
			 * The first iteratio will have start = 0 and end = 5
			 * SO the avg will be (1 + 9) / 2  === 5 which greater than our target average
			 * So we increment the decrement our end by 1
			 *   2. For the second iteration start = 0, end = 4 and avg = 1 + 7 / 2 = 4
			 *   which is greater than our target average so decrement the end by 1 which will be 3
			 *
			 *   3. For third iteration the start = 0, the end will be 3 anf the avg 1 + 6 = 3.5
			 *   SO we decrement the the end by 1 which will become 2
			 *
			 * 4.For the next iteration the start = 0 the end is 2 the avg will become 1 + 4 = 2.5
			 *  Now the avg === numAVg so the function returns and break out of the loop
			 *
			 *
			 */
			end--;
		} else {
			start++;
		}
	}

	return false;
};
