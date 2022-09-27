/**
 * Calculate the time complexities of the follwoing snippets of code
 *
 * @format
 */

/****
 * Applying the coefficient rule, let use ignore the constant 20 && 1000 as they will be
 * insignificant as n approaches infinity
 * In this the the time complexity of the algorithm will be O(l1(n)) * O(g(n)) = O(n * n) = O(n^ 2)
 */

export const someFunctionOne = n => {
	for (let i = 0; i < n * 1000; i++) {
		for (let j = 0; j < n * 20; j++) {
			console.log(
				`The value of i + j isn the current iteration is ${i + j}`
			);
		}
	}
};

/***
 * FUnction 2
 *
 *In this case the complexity of the algoritm is 
 O(i(n)) * O(j(n)) * O(k(n)) * O(l(1)) = O(n * n * n * 1) = O(n^ 3) 
 THe operation on l wil always be 10 no matter the input size so the O(l(n))ₜᵢₘₑ = O(1) time complexity */

export const someFunctionTwo = n => {
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			for (let k = j; k < n; k++) {
				for (let l = k; l < 10; l++) {
					console.log(
						`The value of i + j + k + l is ${i + j + k + l}`
					);
				}
			}
		}
	}
};

/***
 * Some function 3
 * The function below has a Big-O time compexity of O(n) = O(1 because the value of n as it approaches infinity does not affect the number of operations. THere will always be 100 operation no matter the size  of the input
 *   So O(f(n))ₜᵢₘₑ = O(1)
 */

export const someFunctionThree = n => {
	for (let i = 0; i < 100; i++) {
		console.log(`The value of n is ${n} when i is ${i}`);
	}
};

/***
 * Some function 4
 * IN this case if we apply the the coefficient rule, the constanr 20 will be insignificant as we approach infinity
 * So in this case kf(n) = O(nK) = O(n)
 */

export const someFunctionFour = n => {
	for (let i = 0; i < n * 20; i++) {
		console.log(`THe value of n is ${n} when i is ${i}`);
	}
};

/***
 * Some function 5
 * In this case we apply the Logarithimic rule
 * The O(f(n)) will be O(log n)
 */

export const someFunctionFive = n => {
	//NB: Never set i = 0 or you will be stuck in an infinte loop becase any i * 0 will always be zero which is less than n so the code will execute infinitely, be warely of that
	for (let i = 2; i < n; i * 2) {
		console.log(`The value of i is ${i}`);
	}
};

/***
 * Some function 6
 * In this case the Time complexity of the function below will be O(Ꝏ) since the condition to execute the block of code is always true so you will be stuck in an infinite loop,
 * PLEASE DO NOT EXECUTE this piece of code
 * Ꝏ
 */

export const someFunctionSix = n => {
	while (true) {
		console.log(`The value of n is ${n}`);
	}
};
