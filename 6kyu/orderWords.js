/* 

INSTRUCTIONS:

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

P: a string 
R: a new string with the numbers in order
E: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
P: turn sting into an array of words with split.
sort the words in order by the number in each string.

*/

function order(words){
    // ...
    let newArr = []
    let arr = words.split(' ')
   for(let i = 0; i < arr.length; i++){
    let char = arr[i].split('')
    newArr.push(char)
    console.log(newArr)
   }
    
  }

order("is2 Thi1s T4est 3a")  