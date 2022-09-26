<!-- @format -->

## Fundamental rules to help you in computing the big-O notation of an algorithm which deternies the efficiency of the algorithm.

-   `Coefficient rule`

    If `f(n)` is `O(g(n))`, then `kf(n)` is `O(g(n))`, for any constant `k > 0`.
    The first rule is the coefficient rule, which eliminates coefficients not
    related to the input size, <em> n</em>. This is because as <em>n</em>
    approaches infinity, the other coefficient becomes negligible. Ignore
    theconstant and it becomes `O(n)`

    ```js
    for (let i = 0; i < 3 * n; i++) {
    	//handle iterations of i
    }
    ```

-   `Sum rule`

    The sum rule is intuitive to understand; time complexities can be added.
    Imagine a master algorithm that involves two other algorithms. The Big-O
    notation of that master algorithm is simply the sum of the other two Big-O
    notations.

    ```js
    function sumOfTwoNumberBetweenTwoNumbers(n, k) {
    	let sumK = 0;
    	let sumN = 0;

    	/***
         * The total O(n) + O(k) = O(n + k) = 
         Follwong the sum rules
        */
    	//loop over the numbers
    	//Has a Big-0 O(n)time = O(n)
    	for (let i = 0; i < n; i++) {
    		sumN = sumN + 1;
    	}

    	//loop over the k numbers
    	//has a Big-O O(k)time = O(k)
    	for (let i = 0; i < k; k++) {
    		sumK = sumK + 1;
    	}

    	let totalSumNKs = sumK + sumN;
    	return totalSumNKs;
    }
    ```

-   `Product rule`

    Simply states that the Big-Os of two different algorithms `f(n)` and `g(n)`
    can be multiplied. In this case:

         f(n)g(n) = O(p(n) h(n))

    The complexity this algorithm will be O(n) = O(n) \* O(3n) Which is just
    O(3n^ 2) Ignoring the constant by applying the coefficient we ignore three
    as it will be negligible when we approach infinity

    ```js
       function productRule (n) {

           for (let i = 0; i < n; i++) {{{
                console.log(`The value of i is ${i}`);

               for(let j = i; j < 3 * n; j++) {
                   console.log(`The value of j is ${j})
               }
           }
       }
    ```

-   `Polynomial rule`

    The polynomial rule states that polynomial time complexities have a Big-O
    notation of the same polynomial degree.

        f(n) with a polynomial degreeof k the complexity is
        O(n^ k)

    An example: The time complexity will be <em>O(n^k)</em>

    ```js
    function polynomialK(n, k) {
    	for (let i = 0; i < n ** k; i++) {
    		//print the result
    	}
    }
    ```
