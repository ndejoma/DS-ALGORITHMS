/**
 * Using insertion sort algorithm
 * Has Big-O time complexity of O(n ^ 2) because we have to nested loops and Space complexity of
 * O(1)
 * @format
 */

export const insertionSort = arr => {
	let currentVal;

	/***
	 * Let us use this array [5, 4, 1, 2, 3] as an example
	 * We will assume that the first element in the array is already sorted and loop over it to insert
	 * The element in the second position and so to the last
	 *
	 * 1. In the first iteration for outer loop we have i = 1
	 *    We set the currentVal to be the arr[1] which is 4
	 *    Looping over the inner loop j = 1 - 1 = 0 j is 0 so j >= 0 arr[0] 5 is greater than 5
	 *    we set arr[0 + 1] whose value is 4 = arr[0] whose value is 5 so we get [5, 5, 1, 2, 3]
	 *    the inner loop finishes with array [5, 5, 1, 2, 3] and with j as - 1
	 *    we set arr[ - 1 + 1] that is arr[0] as 4 arr[0] = 4
	 *
     * 
     * 
	 * 2. In the second iteration the in the outer loop we have i = 2
	 *    The sorted array is [4, 5, 1, 2, 3]
	 *    We set the currentVal = arr[2] which 1
	 *      1 So we have to loop over the last sorted portion of the array which -1 position from          our       current
	 *    So we have j = 2  - 1 so  j is 1 and 1 >= 0 arr[1] which 5 >is greater than 1 our currentVal
	 *    so we move the 5 to the right side and to where 1 is arr[1 + 1] becomes [4, 5, 5, 2, 3] and j which a. is decremented by 1 to we get 0
	 *    b. In the inner loop we have j = 0 and arr[0] >which is 4 is greater than 1 our currentVal
	 *    So we swap the  value at arr[ 0 + 1] which is 5 to become arr[0] which is 4 to get array
	 *     [4, 4, 5, 2, 3] and j which is 0 is decremented by 1 we ge - 1 so we break out of the loop with array [4, 4, 5, 2, 3]
	 *      We have j as - 1 and currentVal as 1
	 *     SO arr[ - 1 + 1] becomes that arr[0] becomes 1 and we have a new array [1, 4, 5, 2, 3]
	 *    i is increment by 1 to become 3
	 *
     * 
     * 
	 * 3. In the third iteration of the outer loop we have i  == 3 and we arr[1, 4, 5, 2, 3]
	 *    So our currentVal = arr[3] which is 2
	 *    We iterate over the last already sorted array that is 1, 4, 5 form index 2 to 0 that 3-1 to 0
	 *    a. In the first iteration of the inner loop we have j = 3 - 1 = 2 and j >= 0 and arr[2] which is  4 is greater than 1 so we arr[2 + 1] = arr[2] and we get array [1, 4, 5, 5, 3] is decremented by 1 to become 1
     *    b. In the second iteration of the inner loop we have  j = 1 and arr[1] 4 is greater than our currentVal 1 so we set arr[1 + 1] which was 5  = arr[j] which is 4 so we get [1, 4, 4, 5, 3] and decrement j by 1 to become 0
     *   c. In the third iteration we have j = 0 so arr[0] > currentVal is false so we break out of the loop
     *  No we set arr[0 + 1] = currentVal so arr[1] becomes 2 and we get the the array [1, 2, 4, 5, 3]
     * 
     * 
     * 
     * 4. In the fourth iteration we have i = 4   in the outer loop ad array [1, 2, 4, 5, 3]
     *  So our currentVal = arr[4] so we have 3 as our current, repeat the same procedure until we insert 3 in the right position to get the array [1, 2, 3, 4, 5]
     * 
     *  a. In the first iteration in the  inner loop we have j = 4 - 1 = 3  and arr[3] which 5 > 3 is true so we move 4 arr[3 + 1] we get array [1, 2, 4, 5, 5]
     * b. In the second iteration in the inner loop we have j as 2 and arr[2] which 4 is greater than 3
     *  So we move it to the right arr[ 2 + 1] = arr[2] arr[3] becomes 4 and we get array [1, 2, 4, 4, 5]
     * c. In the third iteration in the inner loop we have j as 1 and arr[1] which 2 is less than 3 so the loop breaks out and we set j as 1
     *   so arr[1 + 1] becomes our currentVal and we get array [1, 2, 3, 4, 5]
     *    we increment i to become  5 
     * 
     * 
     * 5. So the outer loop has reached the end since i == 5 which === arr.length of 5 
     * and we return the sorted array as [1, 2, 3, 4, 5]
	
	 */

	for (let i = 1; i < arr.length; i++) {
		currentVal = arr[i];
		let j = i - 1;
		for (j; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		console.log(j, 'what is j');
		arr[j + 1] = currentVal;
	}
	//by now the array is sorted
	return arr;
};
