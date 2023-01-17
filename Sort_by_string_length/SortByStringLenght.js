//link to challenge in Codewars : 
https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

/*DESCRIPTION*/

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

const array = ["Telescopes", "Glasses", "Eyes", "Monocles"]

const sortByLength = (arr) => {
  const sortedStrings = arr.sort((a, b) => {
    return a.length - b.length 
  });
  return sortedStrings;
}

sortByLength(array);

//rozwiązanie najkrótsze:
//return arr.sort((a, b) => a.length - b.length);