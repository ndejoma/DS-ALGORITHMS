/** @format */
import { linearSearch, binarySearch } from './day-07-10-2022.js';

const value = linearSearch([3, 7, 78, 4, 5, 7], 4);
console.log(value); // 3
const unfound = linearSearch([3, 7, 78, 4, 5, 7], 19);
console.log(unfound);

//found
const foundBinary = binarySearch([1, 2, 3, 4, 5], 4); //3
console.log(foundBinary); //

//unfound
const unfoundBinary = binarySearch([1, 2, 3, 4, 5, 6], 17);
console.log( unfoundBinary ); //-1

