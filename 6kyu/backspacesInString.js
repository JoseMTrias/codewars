// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// SOLUTION:

function cleanString(s) {
  const cleaned = [];

  s.split('').forEach((char) => {
    if (char === '#') {
      cleaned.pop();
    } else {
      cleaned.push(char);
    }
  });
  return cleaned.join('');
}
