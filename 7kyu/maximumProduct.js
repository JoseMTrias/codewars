// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// DESCRIPTION:
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6

// SOLUTION:

function adjacentElementsProduct(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(array[i] * array[i + 1]);
  }
  return res.sort((a, b) => b - a)[0];
}
