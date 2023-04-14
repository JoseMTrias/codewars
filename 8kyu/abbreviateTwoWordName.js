// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// SOLUTION:

function abbrevName(name) {
  const answer = [name[0]];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      answer.push(name[i + 1]);
    }
  }
  return answer.map((el) => el.toUpperCase()).join('.');
}
