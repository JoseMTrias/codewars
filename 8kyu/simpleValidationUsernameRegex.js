// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// SOLUTION:

function validateUsr(username) {
  return /^[a-z\d_]{4,16}$/.test(username);
}
