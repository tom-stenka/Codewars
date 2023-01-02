//link to challenge in Codewars : 
https://www.codewars.com/kata/515e271a311df0350d00000f

/*DESCRIPTION*/

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

const array = [1, 3, 2];

const squareAndSum = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}

squareAndSum(array);
