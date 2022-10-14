/**
 * Recursion challenges
 *
 * @format
 */

/***
 * Challenge One
 * POWER
 *  power(base, exponent)
power(2,4) //16
power(3,2) //9
power(3,3) //27
Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.
 */

/***
 * In this case we have power(3, 4)
 *  1. THe first call have the base as 3 and the exponent as 4
 *     SO we execute the return 3 * power(3, 4 -1 ) in which the function calls itself with power(3, 3)
 *  2. In the second function call the base is 3 and the exponent is 3
 *     So we execute the return 3 * power(3, 3 - 1) in which it calls itself with power(3, 2)
 *
 *  3. In the third function call the base will be 3 and the exponent will be 2
 *   So we execute the return 3 * power(3, 2- 1) in which it calls itself with power(3, 1)
 *
 *  4. In the fourth function is pushed on top of the call stack with base 3 and exponent of 1
 *   SO we execute the return 3 * power(3, 1 - 1) and the function calls itself once more
 *
 *  5. In the fifth function call calls the power(3, 0) is pushed on top of the stack and invoked
 *   SInce the exponent is 0 we have hit the base case so we return 1 from the power(3, 0) function call
 *
 *  6. The power(3, 0) is popped of the call stack once it returns 1
 *
 *  THe other function power(3, 1) returns 3 * 1  = 3
 *  The function which called power(3,1) is the power(3, 2) function returns 3 * 3 = 9
 *  The function which called power(3, 2) is the power(3, 3) function returns 3 * 9 = 27
 *  The function which called power(3, 3) is the power(3, 4) return 3 * 27 = 81
 *  Once the function power(3,4) returns 81 is popped off the stack and now the value is 81
 *
 */

export const power = (base, exponent) => {
	//the base case
	if (exponent === 0) {
		return 1;
	}

	return base * power(base, exponent - 1);
};

/***
 * productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray([1,2,3])    // 6
productOfArray([1,2,3,10]) // 60
 */

export const productOfArray = arr => {
	if (arr.length === 0) {
		return 0;
	}
	if (arr.length === 1) {
		return arr[0];
	}
	//slice the f array from index 0 to 1
	const left = arr.slice(0, 1);
	//slice the array from index 1 to the last index
	const right = arr.slice(1);

	return productOfArray(left) * productOfArray(right);
};
