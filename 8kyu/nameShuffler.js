// https://www.codewars.com/kata/559ac78160f0be07c200005a

// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// SOLUTION:

function nameShuffler(str) {
  return str.split(' ')[1] + ' ' + str.split(' ')[0];
}

// ALTERNATIVE SOLUTION:

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}
