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

	//the is true variable
	let isSameFrequency = false;

	//check if the char both map have the same frequency
	for (let [key, value] of Object.entries(num1FreqCounter)) {
		//check if the corresponding key in the num2FreqCounter has the same value and return true othersow return false
		if (num2FreqCounter[key] === value) {
			isSameFrequency = true;
		} else {
			isSameFrequency = false;
		}
	}

	console.log(isSameFrequency);
	return isSameFrequency;
};
