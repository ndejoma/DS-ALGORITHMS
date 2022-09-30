/** @format */
import {
	checkIsPalindromeByRecursion,
	checkIsPalindromeByReversingStr
} from './palindrome.js';

let myString = 'mm';

//check if a word is palindrome that is if the word is reverse it will be the same
const isPalindrome = checkIsPalindromeByRecursion(myString);
console.log(
	`The string ${myString} is ${
		isPalindrome ? 'a' : 'not a'
	}  palindrome checked using recursion`
);

const isPalindrome2 = checkIsPalindromeByReversingStr(myString);
console.log(
	`The string ${myString} is ${
		isPalindrome2 ? 'a' : 'not'
	}  palindrome checked using reversing`
);

window.sayMyName = function (name) {
	console.log(`Your name is ${name}`);
};

sayMyName('Kamauchu');
