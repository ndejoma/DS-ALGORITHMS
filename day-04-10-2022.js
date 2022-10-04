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
