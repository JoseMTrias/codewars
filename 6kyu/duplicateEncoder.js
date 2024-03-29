// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new
// string is "(" if that character appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// SOLUTION:

function duplicateEncode(word) {
  let arr = word.toLowerCase().split('');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  arr = arr.map((char) => {
    if (obj[char] > 1) return ')';
    else return '(';
  });
  return arr.join('');
}
