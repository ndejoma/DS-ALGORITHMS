/**
 * Exercise 1
 *
 * Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 *
 * Sample Input:
 *
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 *
 * @format
 */

export const sameFrequency = (num1, num2) => {
	//convert the num to strings to became it an iterable since numbers are not iterable
	let num1Str = `${num1}`;
	let num2Str = `${num2}`;
	//the is true variable
	let isSameFrequency = false;

	//if the the string length are different return false
	// '123' and '3214' will return true so better check the lenth and terminate any futher execution of the function
	if (num1Str.length !== num2Str.length) {
		isSameFrequency = false;
		return isSameFrequency;
	}

	//the map to keep track of the char counts in bot numbers
	const num1FreqCounter = {};
	const num2FreqCounter = {};

	for (let char of num1Str) {
		if (num1FreqCounter[char]) {
			num1FreqCounter[char] += 1;
		} else {
			//set the counter to 1 if the char is not in the counter map
			num1FreqCounter[char] = 1;
		}
	}

	//iterate over the second number str to create the char count map
	for (let char of num2Str) {
		if (num2FreqCounter[char]) {
			num2FreqCounter[char] += 1;
		} else {
			num2FreqCounter[char] = 1;
		}
	}

	//check if the char both map have the same frequency
	for (let [key, value] of Object.entries(num1FreqCounter)) {
		//check if the corresponding key in the num2FreqCounter has the same value and return true othersow return false
		console.log(key, value);
		console.log(num2FreqCounter[key], value);
		if (num2FreqCounter[key] === value) {
			isSameFrequency = true;
		} else {
			isSameFrequency = false;
		}
	}

	return isSameFrequency;
};

/***
 * Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1
 */

//use the rest parameter to collect the items passed into the function as an array (...params)
//solution using frequency counter
export const areThereDuplicates = (...items) => {
	if (items.length === 0) {
		return false;
	}
	const paramsCount = {};
	let hasDuplicates;

	for (let item of items) {
		//check if there is a duplicate and return to stop execution no need of checking again
		if (paramsCount[item]) {
			hasDuplicates = true;
			return hasDuplicates;
		} else {
			paramsCount[item] = 1;
			hasDuplicates = false;
		}
	}
	return hasDuplicates;
};


