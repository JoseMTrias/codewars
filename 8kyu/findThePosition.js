// https://www.codewars.com/kata/5808e2006b65bff35500008f

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// SOLUTION:

function position(letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
