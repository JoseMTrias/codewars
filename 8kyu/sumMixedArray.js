// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// INSTRUCTIONS:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// SOLUTION:

function sumMix(x) {
  for (let i = 0; i < x.length; i++) {
    x[i] = Number(x[i]);
  }
  return x.reduce((a, b) => a + b, 0);
}
