// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// SOLUTION:

function sameCase(a, b) {
  let lowAlph = 'abcdefghijklmnopqrstuvwxyz';
  let upAlph = lowAlph.toUpperCase();
  if (lowAlph.includes(a) && lowAlph.includes(b)) return 1;
  if (upAlph.includes(a) && upAlph.includes(b)) return 1;
  if (lowAlph.includes(a) && upAlph.includes(b)) return 0;
  if (lowAlph.includes(b) && upAlph.includes(a)) return 0;
  else return -1;
}
