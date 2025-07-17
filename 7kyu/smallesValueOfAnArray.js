// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// DESCRIPTION:

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

// SOLUTION:

function min(arr, toReturn) { 
    if (toReturn === "value") {
        return Math.min(...arr);
    } else if (toReturn === "index") {
        return arr.indexOf(Math.min(...arr));
    }
}
