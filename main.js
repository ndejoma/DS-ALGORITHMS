/** @format */
import { linearSearch } from './day-07-10-2022.js';

const value = linearSearch([3, 7, 78, 4, 5, 7], 4);
console.log(value); // 3
const unfound = linearSearch([3, 7, 78, 4, 5, 7], 19);
console.log(unfound);
