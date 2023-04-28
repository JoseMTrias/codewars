// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION:

function findShort(s) {
  let words = s.split(' ');
  let shortestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) shortestWord = words[i];
  }
  return shortestWord.length;
}
