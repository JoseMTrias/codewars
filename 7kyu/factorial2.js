// https://www.codewars.com/kata/57a049e253ba33ac5e000212

// DESCRIPTION:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// SOLUTION:

function factorial(n) {
  if (n < 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
