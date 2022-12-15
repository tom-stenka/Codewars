/* link to challenge in Codewars:
https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

Description:

Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array 
will only contain 'x's and 'o's.

Examples input -> output in README.md 

*/

const input = [
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
] 

const xMarksTheSpot = (input) => {

    let a;
    let b;
    let xCount = 0;
    
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if (input[i][j] == 'x') {
                xCount++
                a = i;
                b = j;
            }
        }
    }
    if(xCount == 1) {
        return [a,b];
    } else {
        return [];
    }
  }

  xMarksTheSpot(input);
