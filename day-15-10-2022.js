/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 *  eg 10 + 9 + 8 + 7 + 6 + 5 + 3 + 2 + 1 + 0
 *  THe general formula is num + recursiveRange(num - 1)
 *  THe base case is  num === 0
 *
 * @format
 */

/***
 * The iterative range
 */

export const iterativeRange = num => {
	let total = 0;
	for (let i = num; i >= 0; i--) {
		total += i;
	}
	return total;
};

export const recursiveRange = num => {
	if (num === 0) {
		return num;
	}
	return num + recursiveRange(num - 1);
};

/***
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * reverseString('javascript') we get tpircsavaj
 */
/***
 * This function simply does this for example: john
 *  We take john as our initial input to get the reversed str using iteration
 *  We take the last char in the str by slicing it from the last index eg 'john'.slice(3) which will be  n
 *  Add the end to the reverseString('john'.slice(0, 'john'.length)) which cases a recursion with reverseString('joh')
 *   The  function calls itself  with reversString('joh') this return  hoj
 *   THe function calls itself again with reverseString('jo') //this returns oj
 *   The function calls itself again with reverseStr('j') //this returns j
 *   By this point we have reached the base case so the function returns j
 *   The
 *   Once all the recursive function return  the reverseString('john') returns n + hoj = nhoj
 *   THis returns the string nhoj and the function is popped off the stack and the valueThree get the value 'nhoj'
 */
export const reverseString = str => {
	if (!str) {
		throw new Error('Cannot reverse a empty string');
	}

	if (str.length === 1) {
		return str;
	}

	return (
		str.slice(str.length - 1) + reverseString(str.slice(0, str.length - 1))
	);
};
