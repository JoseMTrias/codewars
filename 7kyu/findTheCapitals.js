// https://www.codewars.com/kata/539ee3b6757843632d00026b

// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// SOLUTION:

function capitals(word) {
  let result = [];
  let splitted = word.split('');
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === splitted[i].toUpperCase()) {
      result.push(splitted.indexOf(splitted[i]));
    }
  }
  return result;
}
