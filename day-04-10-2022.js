/**
 * Write a function which takes in a string and returns counts of each character in the string.
 *  eg ann = a = 1 and n is 2
 *
 * @format
 */

export const countStringChars = str => {
	if (!str) {
		throw new Error('Cannot count an empty string');
	}
	const charMap = {};

	//loop over the characters and increment the the count of each character string
	for (let char of str) {
		//if the character count is not defined set it to one else increment it by one
		charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
	}
	console.log(charMap);
	return charMap;
};
