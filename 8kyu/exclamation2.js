// https://www.codewars.com/kata/57faece99610ced690000165

// DESCRIPTION:
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// SOLUTION:

function remove(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] === '!') {
      arr.pop();
    }
  }
  return arr.join('');
}
