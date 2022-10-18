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
