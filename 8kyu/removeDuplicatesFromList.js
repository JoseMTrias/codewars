// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// SOLUTION:

function distinct(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// ALTERNATIVE

function distinct(a) {
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) === index);
  return findDuplicates(a);
}

// BEST SOLUTION:

function distinct(a) {
  return [...new Set(a)];
}
