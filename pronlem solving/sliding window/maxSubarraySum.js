/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
 */

// Naive
// function maxSubarraySum(arr, num) {
// 	if (num > arr.length) {
// 		return null;
// 	}

// 	let max = -Infinity; // If array have all negative number, our biggest sum would still be negative
// 	for (let index = 0; index < arr.length - num + 1; index++) {
// 		let temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += arr[index + j];
// 		}
// 		if (temp > max) {
// 			max = temp;
// 		}
// 	}
// 	return max;
// }

// Sliding window
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (num > arr.length) {
		return null;
	}

	for (let index = 0; index < num; index++) {
		maxSum += arr[index];
	}
	tempSum = maxSum;

	for (let index = num; index < arr.length; index++) {
		tempSum = tempSum - arr[index - num] + arr[index];
		// console.log("maxSubarraySum -> tempSum", tempSum);
		maxSum = Math.max(maxSum, tempSum);
		console.log(maxSum, tempSum);
	}
	return maxSum;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([], 4)); // null
