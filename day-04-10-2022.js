/**
 * Write a function which takes in a string and returns counts of each character in the string.
 *  eg ann = a = 1 and n is 2
 *
 * @format
 */

export const countAStringsChar = (str, charToCount) => {
	if (!str) {
		throw new Error('Cannot count an empty string');
	}
	//if the string does not have the char bail out to avoi wasting computation time
	if (!str.includes(charToCount)) {
		return 0;
	}

	let charCount = 0;

	//loop over the characters and increment the the count of each character string
	for (let char of str) {
		if (char === charToCount) {
			//increment the count of the string
			charCount += 1;
		}
	}
	console.log(charCount, 'The counts');
	return charCount;
};

/***
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 */

const getCharCountMap = str => {
	if (!str) {
		throw new Error('Cannot be empty');
	}

	const charCountMap = {};

	for (let char of str) {
		charCountMap[char] = charCountMap[char] ? charCountMap[char] + 1 : 1;
	}

	return charCountMap;
};

export const areAnagrams = (str1, str2) => {
	//if the two string don;t have the same length they cannot be anagrams
	if (str1.length !== str2.length) {
		return false;
	}

	//the isAnagram
	let isAnagram;

	//we can count the individual string in both
	const str1CharCount = getCharCountMap(str1);
	const str2CharCount = getCharCountMap(str2);

	//loop over the two charCount and compare their values
	for (let [key, value] of Object.entries(str1CharCount)) {
		isAnagram = value === str2CharCount[key] ? true : false;
	}
	return isAnagram;
};
