// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// SOLUTION:

function century(year) {
  let res = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      res++;
    }
  }
  return res;
}

// ALTERNATIVE BETTER SOLUTION:

// function century(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//   }

// OR ARROW FUNCTION

// const century = year => Math.ceil(year/100)
