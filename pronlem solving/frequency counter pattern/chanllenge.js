/**
 * Anagrams
 * Give two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 */

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     console.log("false 1");
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (const val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (const val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (const key in frequencyCounter1) {
//     if (frequencyCounter1.hasOwnProperty(key)) {
//       console.log(frequencyCounter1);
//       console.log(frequencyCounter2);

//       if (!(key ** 2 in frequencyCounter2)) {
//         console.log("false 2");
//         return false;
//       }

//       if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//         console.log("false 3");
//         return false;
//       }
//     }
//   }
//   console.log("true");

//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (const val of str1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }

  for (const val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  console.log("true");

  return true;
}

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false
// validAnagram("awesome", "awsom"); // false
// validAnagram("qwerty", "qeywrt"); // false
// validAnagram("texttwisttime", "timetwisttext"); // true
