// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// SOLUTION:

function removeUrlAnchor(url) {
  let res = [];
  let splitted = url.split('');
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] !== '#') {
      res.push(splitted[i]);
    } else if (splitted[i] === '#') {
      break;
    }
  }
  return res.join('');
}
