// https://www.codewars.com/kata/57eaec5608fed543d6000021

// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// SOLUTION:

function divCon(x) {
  let strings = [];
  let stringsNumbers;
  let numbers = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') {
      numbers += x[i];
    } else {
      strings.push(x[i]);
    }
  }
  strings = strings.map((x) => parseInt(x));
  if (strings.length !== 0) {
    stringsNumbers = strings.reduce((a, b) => a + b);
  } else {
    stringsNumbers = [0];
  }
  return numbers - stringsNumbers;
}
