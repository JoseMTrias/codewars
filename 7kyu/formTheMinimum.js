// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

// DESCRIPTION:
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// SOLUTION:

function minValue(values) {
  let res = [];
  let sorted = values.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (!res.includes(sorted[i])) res.push(sorted[i]);
  }
  return Number(res.join(''));
}
