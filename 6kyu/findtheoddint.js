/*
INSTRUCTIONS:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

P: Array of Integers
R: Return how many times the odd numbers show up in the array
E: Above
P: for loop to iterate through the array elements and see which ones are odd, but also see how many times they show up
    in order to check if they are odd or not - do % 2 = 0.
*/

function findOdd (A) {  
    
    for (let i = 0; i <= A.length - 1; i += 1) {   
      
      let elmLength = A.filter((elm) => elm === A[i]).length; 
      
      if (elmLength % 2 !== 0) {  
        return A[i];
      }
    }
  }