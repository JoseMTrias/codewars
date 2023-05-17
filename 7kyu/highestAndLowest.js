// https://www.codewars.com/kata/554b4ac871d6813a03000035

// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// SOLUTION:

function highAndLow(numbers) {
  let array = numbers.split(' ');
  let highest = array.reduce((a, b) => Math.max(a, b));
  let lowest = array.reduce((a, b) => Math.min(a, b));
  let highStr = highest.toString();
  let lowStr = lowest.toString();
  return highStr + ' ' + lowStr;
}
