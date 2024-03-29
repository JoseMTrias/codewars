// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
// A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// SOLUTION:

function towerBuilder(nFloors) {
  let space;
  let asterisk;
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    asterisk = '*'.repeat(2 * i - 1);
    tower.push(`${space}${asterisk}${space}`);
  }
  return tower;
}
