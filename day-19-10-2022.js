/**
 * capitalizeWords
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 *
 *    ['john', 'maina']  returns ['JOHN', 'MAINA']
 *
 * @format
 */

const capitalizeWord = (str = '') => {
	return str.toUpperCase();
};

export const capitalizeWords = arr => {
	if (arr.length === 0) {
		return [];
	}

	return [capitalizeWord(arr[0])].concat(capitalizeWords(arr.slice(1)));
};
