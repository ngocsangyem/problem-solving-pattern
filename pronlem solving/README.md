### Frequency counter pattern

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(n^2) operations with arrays/ string.

Ex:

```javascript
/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 */

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (const val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (const val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (const key in frequencyCounter1) {
		if (frequencyCounter1.hasOwnProperty(key)) {
			console.log("aaa", frequencyCounter2[key ** 2]);
			console.log("bbb", frequencyCounter1[key]);

			if (!(key ** 2 in frequencyCounter2)) {
				return false;
			}

			if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
				return false;
			}
		}
	}

	return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
```

### Multiple pointers pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle bases on a certain condition.
Very efficient for solving problems with minimal space complexity as well.

```javascript
/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
 */

function countUniqueValues(arr) {
	let i = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let index = 1; index < arr.length; index++) {
		if (arr[i] !== arr[index]) {
			i++;
			arr[i] = arr[index];
		}
	}

	return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 2])); // 2
```

### Sliding window

This pattern involves creating a window which can either be an array or number from one postion to another.
Depending on a certain condition, the window either increases pr closes (and a new window is created)
vVery useful for keeping track of a subset of data in an array/string etc.

```javascript
/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
 */

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

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
```

### Divide and conquer pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity.

```javascript
```
