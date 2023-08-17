// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION:

function pigIt(str) {
  let splitted = str.split(' ');
  for (let i = 0; i < splitted.length; i++) {
    if (/^[a-zA-Z]+$/.test(splitted[i])) {
      splitted[i] = splitted[i].slice(1) + splitted[i][0] + 'ay';
    }
  }
  return splitted.join(' ');
}
