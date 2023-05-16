// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// SOLUTION:

function findAverage(array) {
  let sum = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum / array.length;
}
