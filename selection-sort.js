/** @format */

let arr = [-5, 56, 78, -100,  81, 7, 13, 12, 4, 8, 1];

console.log(arr);

//create a function to swap the array values
const swapArrayValues = (arr, currentIdx, minIdx) => {
	//your must store the values temporary before swapping them
	let currentValue = arr[currentIdx];
	let currentMinValue = arr[minIdx];
	//let the current index to contain the minValue
	arr[currentIdx] = currentMinValue;
	//l;et the index with the min to contain the currentValue
	arr[minIdx] = currentValue;
};



const selectionSort = arrToSort => {
	for (let i = 0; i < arrToSort.length; i++) {
		let minIdx = i;

		for (let j = i; j < arrToSort.length; j++) {
			if (arr[j] < arr[minIdx]) {
				//set the minIdx to be the current value of j
				minIdx = j;
			}
		}

		if (i !== minIdx) {
			//swap the array values
			swapArrayValues(arrToSort, i, minIdx);
		}
	}

	const sortedArr = arrToSort;
	return sortedArr;
};

const sortedArr = selectionSort(arr);
console.log(`The sorted array is ${sortedArr}`);//1,4,7,8,12,13
