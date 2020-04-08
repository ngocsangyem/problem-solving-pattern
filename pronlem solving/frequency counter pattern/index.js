/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 */

// Naive

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     console.log("Two array must be same length");
//     return false;
//   }

//   for (let index = 0; index < arr1.length; index++) {
//     const correctIndex = arr2.indexOf(arr1[index] ** 2);
//     if (correctIndex === -1) {
//       console.log("false");
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   console.log("true");
//   return true;
// }

// Frequency

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
