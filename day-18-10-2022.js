/**
 * The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
 *
 * You do not have to create a Number object to access this static property (use Number.EPSILON).
 *
 * Number.EPSILON is equal to 2^-52 (52bits are used to represent the integer part) while the 11bits for the decimal part and the other 1bit for the sign(- or +)
 * Number.EPSILON returns the smallest interval between two representable numbers.
 * This is useful for the problem with floating-point approximation.
 *
 * @format
 */

export const numbersEqual = (y, z) => {
	let equal = Math.abs(y - z) < Number.EPSILON;
	return equal;
};

/**
 * A primality test can be done by iterating from 2 to n, checking whether modulus division 
(remainder) is equal to zero.
 A number is considered prime if it is only divisible by 1 or itself
  eg 2 is prime number as it divisible by  2 or 1 and not any other number
  But 9 is not a prime as divisible by 1 or 9 or 3
 */

//using iteration
export const isPrime = n => {
	if (n <= 1) {
		return false;
	}

	/***
	 * If the remainder of dividing n % 2 is 0 n is not a prime number
	 *  eg n = 8
	 *  8 % 2 === 0
	 *  While 7 % 2 = 1
	 *  7 % 3 === 1
	 *  7 % 5 === 2
	 */
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
};

/***
 * This is an example of an algorithm that can be easily improved. Think about how this 
method iterates through 2 to n. Is it possible to find a pattern and make the algorithm 
faster? First, any multiple of 2s can be ignored, but there is more optimization possible.
Let’s list some prime numbers.
2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
  
This is difficult to notice, but all primes are of the form 6k ± 1, with the exception of 
2 and 3 where k is some integer. Here’s an example:
5 = (6-1) , 7 = ((1*6) + 1), 13 = ((2*6) + 1)  11 = 2*6 - 1
Also realize that for testing the prime number n, the loop only has to test until the 
square root of n. This is because if the square root of n is not a prime number, n is not a 
prime number by mathematical definition.
 */

export const isPrimeRefactored = n => {
	if (n <= 1) {
		return false;
	}
	//return true if n is 2 or 3 which are both prime numbers
	if (n <= 3) {
		return true;
	}

	if (n % 2 === 0 || n % 3 === 0) {
		return false;
	}

	for (let i = 5; i * i <= n; i += 6) {
		if (n % i === 0 || n % (1 + 2) === 0) {
			return false;
		}
	}

	return true;
};

/***
 * MOdular exponentiation
 * Given the number x, y and p where
 *   x is the base
 *  y is the exponent
 *  p is the modulus
 *  Used in the field iof Public-Key cryptography
 */

export const getModularExponentiation = (base, exponent, modulus) => {
	if (modulus === 1) {
		/***
		 * For example (2, 3, 1)
		 *  2 ** 3 we get 6 , so 6 % 1 === 0
		 */
		return 0;
	}

	/****
	 * For example (2, 3, 3) 
     * We expect the result to be 2 as 2 ** 3 is 8 8 % 3 === 2
     * 
     *  In our case
     *  1. In the first iteration the value will be 1 and i = 0; base= is 2 exponent 3 and modulus 3
     *    So value will be 
     *    value =  (1 * 2) % 3 = 2 % 3 we get 2 and i is incremented to be 1
     *  2. In the second iteration value==2 , i==1, base is 2 and the exponent is 3 and modulus is 3
     *     So the value will be: 
     *    value = (2 * 2) % 3 = 1 and i will become i = 1 + 1 = 2
     * 
     *  3. In the third iteration  value==2, i ==2, the exponent is 3 and the modulus is 3
     *  So the value will be
     *   value = (1 * 2) % 3 = 2 % 3 = 2 value becomes 2 and i becomes 3
     *  4. THe next iteration is never run so we return a value of 2 from the function getModularExponent(2,3, 3) we get 2
	 */

	let value = 1;

	for (let i = 0; i < exponent; i++) {
		value = (value * base) % modulus;
	}
	return value;
};
