// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// SOLUTION:

function findUniq(arr) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted[0] !== sorted[1] ? sorted[0] : sorted[sorted.length - 1];
}
