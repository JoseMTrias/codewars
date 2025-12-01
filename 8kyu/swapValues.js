// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

// DESCRIPTION:

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// SOLUTION:

function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}
