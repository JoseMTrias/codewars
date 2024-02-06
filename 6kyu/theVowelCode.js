// https://www.codewars.com/kata/53697be005f803751e0015aa

// DESCRIPTION:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// SOLUTION:

function encode(str) {
  let splitted = str.split('');
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === 'a') {
      splitted[i] = splitted[i].replace('a', 1);
    } else if (splitted[i] === 'e') {
      splitted[i] = splitted[i].replace('e', 2);
    } else if (splitted[i] === 'i') {
      splitted[i] = splitted[i].replace('i', 3);
    } else if (splitted[i] === 'o') {
      splitted[i] = splitted[i].replace('o', 4);
    } else if (splitted[i] === 'u') {
      splitted[i] = splitted[i].replace('u', 5);
    }
  }
  return splitted.join('');
}

function decode(str) {
  let splitted = str.split('');
  console.log(splitted);
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === '1') {
      splitted[i] = splitted[i].replace(1, 'a');
    } else if (splitted[i] === '2') {
      splitted[i] = splitted[i].replace(2, 'e');
    } else if (splitted[i] === '3') {
      splitted[i] = splitted[i].replace(3, 'i');
    } else if (splitted[i] === '4') {
      splitted[i] = splitted[i].replace(4, 'o');
    } else if (splitted[i] === '5') {
      splitted[i] = splitted[i].replace(5, 'u');
    }
  }
  return splitted.join('');
}
