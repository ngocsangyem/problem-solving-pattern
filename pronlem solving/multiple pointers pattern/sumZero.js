/**
 * Write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair dose not exist.
 */

// Naive
// function sumZero(arr) {
// 	for (let index = 0; index < arr.length; index++) {
// 		for (let index2 = index + 1; index2 < arr.length; index2++) {
// 			if (arr[index] + arr[index2] === 0) {
// 				return [arr[index], arr[index2]];
// 			}
// 		}
// 	}
// }

// Multiple pointers
function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
