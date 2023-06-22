// https://www.codewars.com/kata/57cc981a58da9e302a000214

// DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// SOLUTION:

function smallEnough(a, limit) {
  let checker = a.map((x) => (x <= limit ? true : false));
  if (checker.includes(false)) {
    return false;
  } else {
    return true;
  }
}
