//instructions: In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
//P: start and end, which is a number
//R: return the count of all numbers except numbers with a five in it - start and end numbers are included
//E: 2,7 -> 2,3,4,6,7 result 5
//P: count the amount of numbers from start to end, skipping any number that has the number 5 in it, returning the total count of those numbers,
// 1. iterate through a loop to get from start to end
// 2. check if it has a string of 5
// 3. increase the count of total numbers by 1


function dontGiveMeFive(start, end){
    let count = 0
    for(let i = start; i <= end; i++){
       let arr = i.toString().split('')
       if(!arr.includes('5')){
           count += 1
       }
    }
  return count
}