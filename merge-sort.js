/** @format */
const merge = (arr1, arr2) => {
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
	console.log(`***********THe merge is being called with results ${results}`);
	return results;
};

//the merge sort
export const mergerSort = arr => {
	if (arr.length <= 1) {
		console.log(`The mergeSort function was called with ${arr}`);
		return arr;
	}
	//destructure the length from the array
	const { length } = arr;
	//get the middle index
	//if the lenght is 7 the midIdx will be 7 / 2 = 3.5 approx  wil be 3 after flooring
	const midIdx = Math.floor(length / 2);
	//get the left side of the array by gettig items from the 0 index to midIdx but no including the midIdx
    const left = mergerSort( arr.slice( 0, midIdx ) );

	//get the right starting from the midIdx to the lastIdx
	const right = mergerSort(arr.slice(midIdx, length));
	console.log(right, 'Right');
	//the arr to be the the mergedARray
	console.log(`&&&&&&&The merge is being called ##########`);
	return merge(left, right);
};

