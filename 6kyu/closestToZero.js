/* 

Problem Statement:
Implement a method to return the value from an array of integers that is closest to zero.  If there are two equally close to zero elements, like 2 and -2, consider the positive element to be "closer" to zero.
Example: The expected output for the array [-8, 3, 11, 2, 1, 4, 21, -3, -2 ] should be 1.
Example: The expected output for the array [5, 3, -2, 7] should be -2.

- an array 
- returning an integer, which is the number that is closest to zero in the array 
- [-1,4,5,2] // -1
- iterate through the array, compare the to the number 0, sort the array in ascending order, if there are 2 elements - return the positive element 
//absolute value to make sure positive gets returned
*/

function closeToZero(arr){
    let sortedArr = arr.sort((a,b) => a - b)
    console.log(sortedArr)
    let closestNum = 0
    for(let i = 0; i < sortedArr.length; i++){
      if (closestNum === 0){
        closestNum = sortedArr[i]
      }else if(sortedArr[i] > 0 && sortedArr[i] <= Math.abs(closestNum)){
            closestNum = sortedArr[i]
      }
    }
    console.log(closestNum)
    return closestNum
  }
  
  closeToZero([-8, 3, 11, 2, 1, 4, 21, -3, -2 ])