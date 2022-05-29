/*
INSTRUCTIONS:

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

P: a string
R: a string with "ay" at the end of the word
E ^ above
P: turn string into an array with split, add they "ay" to the end of the string possibly? Join at the end. 

*/


function pigIt(str){
    return str.split(' ').map(word => {
      return word.substring(1) + word[0] + 'ay';
    }).join(' ');
  }