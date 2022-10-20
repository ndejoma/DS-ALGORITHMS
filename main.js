/** @format */
import { bubbleSort } from './day-20-10-2022.js';

const value = bubbleSort([5, 1, 2, 7, 6, 78, 67, -1, 56, 4]);
console.log(value);

/***
 * Bubble slow algorithm with a worst case time complexity of 0(n^2) since we
 * have an inner loop if we have n items the complexity is n * n
 * But has space complexity of O(1) as we are only using the same array in memory
 *
 */

//bubble sort on an array of 10000 items

const getRandomNo = (max = 100) => {
	return Math.floor(Math.random() * max) + 1;
};

//create an array with value between 0 and 10000 including 10000 that is 1 -10000
const bigArr = Array.from({ length: 100000 }).map(el => getRandomNo(10000));

console.time('big-arr');

const sortedBigArr = bubbleSort(bigArr);
console.log(sortedBigArr);//gets sorted but it blocked the main thread for ~15s

console.timeEnd('big-arr');//big-arr: 14427.780029296875 ms ~ 15s to execute
