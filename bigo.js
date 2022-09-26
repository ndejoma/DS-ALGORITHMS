/**
 * BigO notation Primer
 * It measures the worst-case complexity of an algorithm.In big-o notation n represent the number of inputs
 * "What will happend a n approaches infinity"
 *
 * How to impelement an algorithm with respect to both time(execution time) and space( memory consumed)
 * @format
 */

/**
 * Big-O of O(1) represents the exection time or space complexity does not chnage with respect to the number of inputs
 * EG accessing the items in an array by its index or an object's property by its key
 */

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArr[5]);

/**
 * The Big-O of  O(n)
 * EG Printing alll the number between 1 and 1000
 * As the number of inputs grow so do the the time
 *
 */

export const printALlNosBtnZeron = n => {
	let sum = 0;
	for (let i = 1; i < n; i++) {
		console.log(`The value of i is ${i}`);
		sum += i;
	}
	console.log(sum);
	return sum;
};

/***
 * The O of O(n^ 2)
 */

export const exampleQuadratic = n => {
	for (let i = 0; i < n; i++) {
		// console.log(`The value of i is ${i}*****`);
		for (let j = i; j < n; j++) {
			// console.log(`The value of j is ${j}`);
		}
	}
	console.log('*************************');
};

/***
 * AN algorithm with o(n^3) cubic time in the worst case scenario
 * If you ever find yourself writing code ins such a way rethink your strategy and go back to the drawing board , an algorithm with such a complexity is complex by itself
 */

export const exampleCubic = n => {
	for (let i = 0; i < n; i++) {
		console.log(`**THe value of i is ${i}`);
		for (let j = i; j < n; j++) {
			console.log(`******The value of j ${j} is`);
			for (let k = j; k < n; k++) {
				console.log(`****************The value of k is ${k}`);
			}
		}
	}
};

/***
 * An example of an algorithm with the time complexity O(log n)
 */

export const exampleLogarithimic = n => {
	for (let i = 2; i <= n; i = i * 2) {
		console.log(`The value of i is ${i}`);
	}
};
