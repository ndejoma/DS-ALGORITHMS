/** @format */

function merge(arr1, arr2) {
	console.log(`Merge was called with left: ${arr1} and right ${arr2}`);
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	console.log(`Merge returned with results ${results}`);
	return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
	console.lo(`Was called Mergesort(${arr})`);
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	console.log(`Left was when array is ${arr} returned left: ${left}`);
	let right = mergeSort(arr.slice(mid));
	console.log(
		`Right was returned when array is ${arr} returned right ${right} `
	);
	return merge(left, right);
}

mergeSort([27, 53, 7, 25, 33, 2, 32, 47, 33]);
