/**
 * Get the fibonacci at n^th position using iteration
 * The number at F(n) = F(n -1) + F(n -2)
 * The number at position 0 is 0
 * THe number F(0) = 0
 * The number at position 1
 * SO the F(1) = 1
 * THe number at position 2 is 1
 * SO the F(2) = 1
 * @format
 */

//store the first and the second number in the summation
//For conveniency I will start with position 1 and postion2
let currentFirst = 1;
let currentSecond = 1;
let currentPosition = 3;
let currentPositionValue;

export const getFibonacciAtNPositionIterative = (n = 6) => {
	while (currentPosition <= n) {
		//set the currentPositionValue
		currentPositionValue = currentFirst + currentSecond;
		//set the currentFirst to be the currentSecondValue
		currentFirst = currentSecond;
		//set the currentSecond to be the currentPositionValue
		currentSecond = currentPositionValue;
		//increment the  value  of the currentPosition to the next if (it was at 3 it will move to 4)
		currentPosition += 1;
	}
	console.log(`The fibonacci of ${n} is ${currentPositionValue}`);
	//this will be returned when we break out of the loop
	return currentPositionValue;
};

/***
 * Solve the same fibonacci number at n^th position using recursive function
 */

export const getFibonacciAtNPositionRecursive = (n = 6) => {
	//if n is 0 the F(0) === 0 so return 0
	if (n < 1) {
		return 0;
	}
	//The F(1) === 1 && the F(2) === 1
	if (n <= 2) {
		return 1;
	}

	//other wise use the formula
	return (
		getFibonacciAtNPositionRecursive(n - 1) +
		getFibonacciAtNPositionRecursive(n - 2)
	);
};
