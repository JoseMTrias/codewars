// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION:

function solution(str) {
  let array = str.split('');
  let result = [];
  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1]) result.push(array[i] + array[i + 1]);
    else result.push(array[i] + '_');
  }
  return result;
}
