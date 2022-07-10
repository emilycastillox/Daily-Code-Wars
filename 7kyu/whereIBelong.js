/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).

P: an array of integers, and a number to be inserted into this array
R: the lowest index at which the second value should be inserted
E: [5,6,7,8], 7.5 // return 2
P: go through each element in the array, and compare the number to each value
if the number is greater than the element in the arr, 

*/

function whereIBelong(arr, num) {
    let index = 0
   for ( let i = 0; i < arr.length; i++){
      if (num > arr[i]){
         index++
      }
   }
   return index
 }

 whereIBelong([1,2,3,4], 1.5)