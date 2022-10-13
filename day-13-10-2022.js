/**
 * Sliding Window - minSubArrayLen
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * Examples:
 *
 * minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
 * minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
 * Time Complexity - O(n)
 *
 * Space Complexity - O(1)
 *
 * @format
 */

export const minSubArrayLen = (nums, sum) => {
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < nums.length) {
		// if current window doesn't add up to the given sum then
		// move the window to right
        /***
         * For an array  [2, 3, 1, 2, 4, 3], 7
         * 1. In the first iteration The current start is 0 and the end is 0 and total is 0
         *   So the total = 0  +  2
         *   so we increment the end by 1 end become 1
         * 
         * 2. In the second iteration start is 0, the end is 1 and the total is 2
         * In this case total of 2 is less than sum of 7 and end of 1 is less than the length of 6
         *  total = 2 + 3 = 5
         *  end = 1 + 1 = 2
         *  
         * 3. In the third iteration the start is 0, the end is 2 and total is 5
         *   total = 5 + 1 = 6
         *   end = 2 + 1 = 3
         * 
         * 4. In the fourth iteration the start is 0, the end is 3 and total is 6
         *    total = 6 + 2 = 8
         *   end = 3 +  1 = 4
         * 
         * 5. In the fifth iteration start is 0 and the end is 4 and the total is 8
         *   In this case the total is greater than the sum of we execute the else if(total >= sum) block
         *   In this case
         *   minLen = Math.min(Infinity, 4 - 0) = 4
         *   total = 8 - 2 = 6
         *   start= 0 + 1 = 1
         * 
         * 6 In the sixth iteration start is 1 and the end is 4 and the total is 6
         *                        6 < 7 && 4 < 6
         *  SO we execute the if(total < sum && end > nums.length)
         *   total = 6 + 4 = 10
         *   end = 4 + 1 = 5
         * 
         * 7 In the seventh iteratio start is 1 and the end is 5 and the total is 10
         *   SO excute the  else if(total >= sum) since 10 is greater than 7
         *   minLen = Math.min(4, 5 - 1) = 4
         *   total = 10 - 3 = 7
         *   start = 1 + 1 = 2
         *   
         *  8. In the eighth iteration start is 2 and the end is 5 ad the total is 7
         *   So we excute the code in the else if(total >= sum) since 7 >= 7 7 === 7
         *   minLen = Math.min(4, 3) = 3
         *   total = 7 - 1 = 6
         *   start = 2 + 1 = 3
         * 
         *  9. IN the 9th iteration the start is 3 and the end is 5 abd the total is 6
         *                            6 < 7 && 5 < 6
         *  SO we execute the code if(total < sum && end < nums.length)
         *  total = 6 + 3 = 9 
         *  end = 5 + 1 = 6
         *  
         *  10. IN the 10th iteration the start is 3 and the end is 6 and the total is 9
         *  SO we excute the else if( total >= sum) since 9 is greater than 7
         *  minLen = Math.min(3, 6 - 3) = 3
         *  total = 9 - 2 = 7
         *  start = 3 + 1 = 4
         *  
         *  11. In the 11th iteration the start is 4 ad the end is 6 and the total is 7
         *  SO we excute the else if block
         *  minLen = Math.min(3, 6 - 4) = 2
         *  total = 7 - 4 = 3
         *  start = 4 + 1 = 5
         * 
         * 
         *  12. IN the 12th iteration the start  is 5 and the end is 6 and the total is 3
         *  SO the if and else conditions are not true we execute the else block and break out of the loop
         *   Since  end === nums.length we never execute the if block
         *   Since the total 3 is less than sum 7 we nver execute the else if block
         *  WE return minLen to be 2 in this case
         * 
         */
		if (total < sum && end < nums.length) {
			total += nums[end];
			end++;
		}
		// if current window adds up to at least the sum given then
		// we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
		}
		// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
};
