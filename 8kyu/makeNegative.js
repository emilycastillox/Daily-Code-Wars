/* 
Instructions:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


P: a number 
R: the negative number
E: (3) // -3 ; (-1) // -1
P: if the number is already negative, return that same number, if the number is positive , multiply by negative 1 and return the product 
*/

function makeNegative(num) {
    // Code?
    if(Math.sign(num) === -1){
      return num
    }else if(Math.sign(num) === 1){
      return num * -1
    }else{
      return 0
    }
  }