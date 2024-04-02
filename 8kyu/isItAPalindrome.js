// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// SOLUTION:

function isPalindrome(x) {
  x = x.toLowerCase();
  let y = x.toLowerCase().split('').reverse().join('');
  return x === y;
}
