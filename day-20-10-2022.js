/**
 * The bubble sort algorithm
 *
 * @format
 */

const swapArrayItems = (arr, idx1, idx2) => {
	//store the value at idx1 before swapping
	//eg [1, 2, 3, 4] where idx1 is 0 and idx2 is 1
	let temp = arr[idx1]; //temp will be arr[0] which 1
	//change the value at idx1 to be the one at idx2
	//arr[0] = arr[1] so arr[0 becomes] 2 so we have an array [2, 2, 3, 4 ]
	arr[idx1] = arr[idx2];

	//now change the value
	//now with array as [2, 2, 3, 4] and temp == 1
	//we get [2, 1, 3, 4] by swapping the array at arr[1] to become 1 the value of temp
	arr[idx2] = temp;
};

export const bubbleSort = arr => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			count++;
			if (arr[i] > arr[j]) {
				swapArrayItems(arr, i, j);
			}
		}
	}

	console.log(`The count is ${count}`);

	//return the sorted array
	return arr;
};
