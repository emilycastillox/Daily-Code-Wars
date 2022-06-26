/** 
 * INSTRUCTIONS:
 
 Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

P: a string of words
R: the lengths of the shortest word(s) - a number/integer
E: "the quick brown fox" // 3; "You are amazing at what you do" // 2
P: turn string into array of strings (words),
iterate through each word, check the length,
if the first item in the array length is shorter than the next one, that number will be the new shortest word length, and so forth

*/


function findShort(s){
    let arr = s.split(' ');
    let smallestWord = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallestWord = arr[i];
      }
    }
    return smallestWord.length;
  }