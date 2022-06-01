/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



*/

let moveZeros = function (arr) {
    let zeroes = [];
    let withoutZeros = arr.filter(function(value){
      if(value === 0) {
        zeroes.push(0);
        return false;
      }
      return true;
    });
    
    return withoutZeros.concat(zeroes);
  }