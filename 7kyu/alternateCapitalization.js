// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// SOLUTION:

function capitalize(s) {
  let chars = s.split('');
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  let chors = s.split('');
  for (let i = 1; i < chors.length; i += 2) {
    chors[i] = chors[i].toUpperCase();
  }
  return [chars.join(''), chors.join('')];
}
