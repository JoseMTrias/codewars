// https://www.codewars.com/kata/5663f5305102699bad000056

// DESCRIPTION:
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// SOLUTION:

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  let a1Length = [];
  let a2Length = [];

  for (let i = 0; i < a1.length; i++) {
    a1Length.push(a1[i].length);
  }
  a1Length = a1Length.sort((a, b) => a - b);

  for (let i = 0; i < a2.length; i++) {
    a2Length.push(a2[i].length);
  }
  a2Length = a2Length.sort((a, b) => a - b);

  let a1Min = Math.min(...a1Length);
  let a2Min = Math.min(...a2Length);
  let a1Max = Math.max(...a1Length);
  let a2Max = Math.max(...a2Length);
  let firstOption = a1Max - a2Min;
  let secondOption = a2Max - a1Min;

  return firstOption > secondOption ? firstOption : secondOption;
}
