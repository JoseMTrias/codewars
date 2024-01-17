// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// SOLUTION:

function high(x) {
  let words = x.split(' ');
  let highestScore = 0;
  let highestScoreWord = '';
  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    let wordScoreCounter = 0;
    word.split('').forEach((letter) => {
      wordScoreCounter += letter.charCodeAt(0) - 96;
    });
    if (wordScoreCounter >= highestScore) {
      highestScore = wordScoreCounter;
      highestScoreWord = word;
    }
  }
  return highestScoreWord;
}
