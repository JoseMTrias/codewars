// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// SOLUTION:

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
