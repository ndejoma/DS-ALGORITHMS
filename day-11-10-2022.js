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

/***
 * Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

 */

export const isSubsequence = (str1, str2) => {
	let str1Count = 0;
	let str2Count = 0;

	if (!str1) {
		return true;
    }
    
    /***
     * For a isSubsequence(abc, ahbkc)
     * 
     * In the first iteration st2Count = 0 and str2.length is 5
     *   1.So str1[0] === str2[0] so increment the str1Count by 1 becomes 1
     * 
     *   2. In the second iteration str2Count === 0 and str2.length is 5
     *   str1Count = 1  so str1[1] is not equal to str2[0] so we increment str2Count by 1 
     *   to become 1
     * 
     *   3. and so on until the str1Count is equal to the str1.length which means all the characters in str1 and available in str2 so the function returns so we break out of the loop
     * 
     * 4. If str1Count never equal to str1.length so we loop over until we are done
     * 
     *   
     */

	while (str2Count < str2.length) {
		if (str1[str1Count] === str2[str2Count]) {
			str1Count++;
		}

		if (str1Count === str1.length) {
			return true;
		}

		//otherwise increment the strCount
		str2Count++;
	}

	return false;
};
