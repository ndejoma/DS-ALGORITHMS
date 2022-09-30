/**
 * Checking if a word is a palindrome by reversing the string
 * This uses a loop to loop over the string and create an array from the end
 *
 * @format
 */

const reverseString = str => {
	let reversedStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
};

/***
 * The function has a Big-O of O(n) since the iteration to reverse the the string depends on the size of the string of and Big-0 O(n)space complexity as tne input grow the more space required to store the reversed string
 */
export const checkIsPalindromeByReversingStr = str => {
	//before looping confirm if the last and the first character are equal to avoid wasting CPU cycles
	//if false it means the word is not a palindrome and there is not need to confirm
	if (str[0] !== str[str.length - 1]) {
		return false;
	}
	//check if the reversed str is
	return str === reverseString(str);
};

/***
 * 2. Checking using Recursion withour iteration
 */

let currentWord;
export const checkIsPalindromeByRecursion = str => {
	if (str.length === 1) {
		return true;
	}

	if (str[0] !== str[str.length - 1]) {
		return false;
	}

	//slice the string start from index 1 to the last but not including the last index eg
	// eg 'john'.slice(1, str.length -1) do not include the last index
	currentWord = str.slice(1, str.length - 1);
	return checkIsPalindromeByRecursion(currentWord);
};
