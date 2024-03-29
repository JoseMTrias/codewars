// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

// DESCRIPTION:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

// SOLUTION:

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return '0=0';
    let arr = [];
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }
    let sum = arr.reduce((a, b) => a + b);
    let x = arr.join('+');
    return `${x} = ${sum}`;
  };

  return SequenceSum;
})();
