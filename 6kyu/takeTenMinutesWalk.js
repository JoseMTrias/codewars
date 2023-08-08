// https://www.codewars.com/kata/54da539698b8a2ad76000228ç

// DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// SOLUTION:

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') n++;
    else if (walk[i] === 's') s++;
    else if (walk[i] === 'w') w++;
    else if (walk[i] === 'e') e++;
  }
  if (n !== s || w !== e) return false;
  return true;
}

// BETTER SOLUTION:

function isValidWalk(walk) {
  let coor = { n: 0, s: 0, e: 0, w: 0 };
  walk.forEach((c) => coor[c]++);
  return coor.n === coor.s && coor.e === coor.w && walk.length === 10;
}
