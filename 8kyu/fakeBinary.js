// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// SOLUTION:

function fakeBin(x) {
  return x
    .split('')
    .map((x) => (x < 5 ? 0 : 1))
    .join('');
}
