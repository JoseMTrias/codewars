// https://www.codewars.com/kata/52f3149496de55aded000410

// DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// SOLUTION:

function sumDigits(n) {
  let arr = String(n).split('').map(Number);
  let onlyNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 9) onlyNumbers.push(arr[i]);
  }
  return onlyNumbers.reduce((a, b) => a + b);
}
