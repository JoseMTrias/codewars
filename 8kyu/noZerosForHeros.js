// https://www.codewars.com/kata/570a6a46455d08ff8d001002/

// DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// SOLUTION:

function noBoringZeros(n) {
  if (n === 0) return 0;
  let arr = n.toString().split('');
  for (let i = arr.length; i > 0; i--) {
    if (arr[arr.length - 1] == '0') {
      arr.pop();
    } else {
      return +arr.join('');
    }
  }
}
