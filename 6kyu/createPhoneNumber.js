/**
 INSTRUCTIONS:

 Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

P: an array of 10 integers - most likely will not have double digits
R: a string that looks like a phone number with ()and - __
E: [5,6,7,8,9,1,2,4,3,5] // "(567) 891-2435"
P: take in the array, push ( ) , dash and space in each specific index to create the phone number, loop through each element ant turn it into a string, might need to push to new arr,
return new string with join 

 */

function createPhoneNumber(numbers){
    let newArr = []
    for(let i = 0; i < numbers.length; i++){
      let str = numbers[i].toString()
      newArr.push(str)
    }
    newArr.splice(0, 0,'(')
    newArr.splice(4, 0, ')')
    newArr.splice(5, 0, ' ')
    newArr.splice(9, 0, '-')
    let result = newArr.join('')
    return result
  }