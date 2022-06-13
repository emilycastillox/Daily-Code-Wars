/* INSTRUCTIONS

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

P: a string of numbers, separated by spaces
R: a string of 2 numbers, the highest and lowest - separated by one space - highest number is first in the string
E: ("5 8 3 2 9") // return "9 2" ("1 3 5 6 7") // return "7 1"
P: turn the string into an array of numbers
the string needs to be an integer, 
then we can loop through the array of numbers, and compare each number to each other 
return highest + lowest numbers in the array
returning a string of two numbers, probably need to join and then turn it back into a string

*/

function highAndLow(numbers){
    let arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }